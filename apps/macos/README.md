# System Design Atlas for macOS

用 `NSWindow + WKWebView` 包装本地 Vite 产物，构建方式参考 DeepSeek Harness 的 `apps/macos`：只依赖 Command Line Tools 的 `swiftc`、`plutil`、`codesign`，不需要完整 Xcode 或 Tauri。

## 构建

```sh
apps/macos/build.sh
```

产物：`dist/macos/System Design Atlas.app`

## 安装到本机

```sh
apps/macos/install.sh
```

安装位置：`~/Applications/System Design Atlas.app`

App 直接加载打包进 Resources 的 `web/index.html`，不启动本地服务。外链在系统浏览器打开。
