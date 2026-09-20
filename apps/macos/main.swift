import AppKit
import Darwin
import Foundation
import WebKit

private let appTitle = "System Design Atlas"
private let loopbackHost = "127.0.0.1"

final class LocalSiteServer {
    private let root: URL
    private var serverFD: Int32 = -1
    private var running = true
    let port: UInt16

    init(root: URL) throws {
        self.root = root.standardizedFileURL
        var addr = sockaddr_in()
        addr.sin_len = UInt8(MemoryLayout<sockaddr_in>.size)
        addr.sin_family = sa_family_t(AF_INET)
        addr.sin_port = 0
        addr.sin_addr = in_addr(s_addr: inet_addr("127.0.0.1"))

        let fd = socket(AF_INET, SOCK_STREAM, 0)
        guard fd >= 0 else { throw Self.lastError("socket") }
        serverFD = fd

        var yes: Int32 = 1
        setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &yes, socklen_t(MemoryLayout<Int32>.size))

        let bindResult = withUnsafePointer(to: &addr) { pointer in
            pointer.withMemoryRebound(to: sockaddr.self, capacity: 1) {
                Darwin.bind(fd, $0, socklen_t(MemoryLayout<sockaddr_in>.size))
            }
        }
        guard bindResult == 0 else { throw Self.lastError("bind") }
        guard Darwin.listen(fd, 16) == 0 else { throw Self.lastError("listen") }

        var bound = sockaddr_in()
        var len = socklen_t(MemoryLayout<sockaddr_in>.size)
        let nameResult = withUnsafeMutablePointer(to: &bound) { pointer in
            pointer.withMemoryRebound(to: sockaddr.self, capacity: 1) {
                getsockname(fd, $0, &len)
            }
        }
        guard nameResult == 0, bound.sin_port != 0 else { throw Self.lastError("getsockname") }
        port = UInt16(bigEndian: bound.sin_port)

        Thread.detachNewThread { [weak self] in
            self?.acceptLoop()
        }
    }

    deinit {
        running = false
        if serverFD >= 0 { close(serverFD) }
    }

    var url: URL {
        URL(string: "http://\(loopbackHost):\(port)/")!
    }

    private func acceptLoop() {
        while running {
            let client = accept(serverFD, nil, nil)
            guard client >= 0 else { continue }
            Thread.detachNewThread { [weak self] in
                self?.serve(client: client)
            }
        }
    }

    private func serve(client: Int32) {
        defer { close(client) }
        var buffer = [UInt8](repeating: 0, count: 16_384)
        let count = read(client, &buffer, buffer.count)
        guard count > 0 else { return }
        let request = String(decoding: buffer[0..<count], as: UTF8.self)
        let path = Self.path(from: request)
        let fileURL = fileURL(for: path)
        let exists = FileManager.default.fileExists(atPath: fileURL.path)
        let body = exists ? ((try? Data(contentsOf: fileURL)) ?? Data()) : Data("Not found".utf8)
        let status = exists ? "200 OK" : "404 Not Found"
        let header = "HTTP/1.1 \(status)\r\nContent-Type: \(Self.mimeType(for: fileURL))\r\nContent-Length: \(body.count)\r\nConnection: close\r\n\r\n"
        var response = Data(header.utf8)
        response.append(body)
        response.withUnsafeBytes { bytes in
            _ = write(client, bytes.baseAddress, bytes.count)
        }
    }

    private func fileURL(for path: String) -> URL {
        let trimmed = path.split(separator: "?").first.map(String.init) ?? path
        let relative = trimmed == "/" || trimmed.isEmpty ? "index.html" : String(trimmed.drop(while: { $0 == "/" }))
        let candidate = root.appendingPathComponent(relative).standardizedFileURL
        if candidate.path.hasPrefix(root.path) {
            return candidate
        }
        return root.appendingPathComponent("index.html")
    }

    private static func path(from request: String) -> String {
        let first = request.split(separator: "\r\n", maxSplits: 1, omittingEmptySubsequences: true).first ?? ""
        let parts = first.split(separator: " ")
        guard parts.count >= 2 else { return "/" }
        return String(parts[1])
    }

    private static func mimeType(for url: URL) -> String {
        switch url.pathExtension.lowercased() {
        case "html": return "text/html; charset=utf-8"
        case "js": return "text/javascript; charset=utf-8"
        case "css": return "text/css; charset=utf-8"
        case "svg": return "image/svg+xml"
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "json": return "application/json"
        default: return "application/octet-stream"
        }
    }

    private static func lastError(_ operation: String) -> NSError {
        let message = String(cString: strerror(errno))
        return NSError(domain: "LocalSiteServer", code: Int(errno), userInfo: [
            NSLocalizedDescriptionKey: "\(operation): \(message)",
        ])
    }
}

final class AppDelegate: NSObject, NSApplicationDelegate, WKNavigationDelegate, WKUIDelegate {
    private var window: NSWindow!
    private var webView: WKWebView!
    private var status: NSTextField!
    private var server: LocalSiteServer?

    func applicationDidFinishLaunching(_ notification: Notification) {
        installMenus()

        let screen = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1280, height: 860)
        let size = NSSize(width: min(1280, screen.width * 0.9), height: min(860, screen.height * 0.9))
        let origin = NSPoint(x: screen.midX - size.width / 2, y: screen.midY - size.height / 2)

        window = NSWindow(
            contentRect: NSRect(origin: origin, size: size),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = appTitle
        window.minSize = NSSize(width: 960, height: 680)
        window.isReleasedWhenClosed = false
        window.center()

        let config = WKWebViewConfiguration()
        config.preferences.setValue(true, forKey: "developerExtrasEnabled")
        webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.allowsBackForwardNavigationGestures = true

        status = NSTextField(labelWithString: "正在加载 System Design Atlas…")
        status.alignment = .center
        status.font = NSFont.systemFont(ofSize: 15, weight: .medium)
        status.textColor = .secondaryLabelColor

        let root = NSView(frame: window.contentView!.bounds)
        root.autoresizingMask = [.width, .height]
        webView.translatesAutoresizingMaskIntoConstraints = false
        status.translatesAutoresizingMaskIntoConstraints = false
        root.addSubview(webView)
        root.addSubview(status)
        NSLayoutConstraint.activate([
            webView.leadingAnchor.constraint(equalTo: root.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: root.trailingAnchor),
            webView.topAnchor.constraint(equalTo: root.topAnchor),
            webView.bottomAnchor.constraint(equalTo: root.bottomAnchor),
            status.centerXAnchor.constraint(equalTo: root.centerXAnchor),
            status.centerYAnchor.constraint(equalTo: root.centerYAnchor),
        ])
        window.contentView = root
        window.makeKeyAndOrderFront(nil)
        window.makeFirstResponder(webView)
        NSApp.activate(ignoringOtherApps: true)

        loadBundledSite()
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        true
    }

    private func loadBundledSite() {
        guard let resourceURL = Bundle.main.resourceURL else {
            status.stringValue = "找不到应用资源目录"
            return
        }
        let webRoot = resourceURL.appendingPathComponent("web")
        let indexURL = webRoot.appendingPathComponent("index.html")
        guard FileManager.default.fileExists(atPath: indexURL.path) else {
            status.stringValue = "找不到打包后的网页：Contents/Resources/web/index.html"
            return
        }
        do {
            server = try LocalSiteServer(root: webRoot)
            webView.load(URLRequest(url: server!.url))
        } catch {
            status.stringValue = "启动本地页面失败：\(error.localizedDescription)"
        }
    }

    private func installMenus() {
        let main = NSMenu()

        let appItem = NSMenuItem()
        let appMenu = NSMenu()
        appMenu.addItem(withTitle: "隐藏 \(appTitle)", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
        appMenu.addItem(NSMenuItem.separator())
        appMenu.addItem(withTitle: "退出 \(appTitle)", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
        appItem.submenu = appMenu
        main.addItem(appItem)

        let editItem = NSMenuItem()
        let edit = NSMenu(title: "编辑")
        edit.addItem(withTitle: "剪切", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
        edit.addItem(withTitle: "拷贝", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
        edit.addItem(withTitle: "粘贴", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
        edit.addItem(NSMenuItem.separator())
        edit.addItem(withTitle: "全选", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")
        editItem.submenu = edit
        main.addItem(editItem)

        NSApp.mainMenu = main
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        status.isHidden = true
        window.makeFirstResponder(webView)
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        status.isHidden = false
        status.stringValue = "加载失败：\(error.localizedDescription)"
    }

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        status.isHidden = false
        status.stringValue = "加载失败：\(error.localizedDescription)"
    }

    func webView(
        _ webView: WKWebView,
        decidePolicyFor navigationAction: WKNavigationAction,
        decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
    ) {
        guard let url = navigationAction.request.url else {
            decisionHandler(.allow)
            return
        }
        if url.host == loopbackHost || url.scheme == "about" {
            decisionHandler(.allow)
            return
        }
        NSWorkspace.shared.open(url)
        decisionHandler(.cancel)
    }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.run()
