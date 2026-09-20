import { useMemo, useState } from 'react'
import { guides, pillarGuides, pillars, type Guide, type Pillar } from './content'

function formatInline(text: string) {
  const chunks = text.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g)
  return chunks.map((chunk, index) => {
    if (chunk.startsWith('**')) return <strong key={index}>{chunk.slice(2, -2)}</strong>
    if (chunk.startsWith('`')) return <code key={index}>{chunk.slice(1, -1)}</code>
    const link = chunk.match(/^\[(.*?)\]\((.*?)\)$/)
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>
    return chunk
  })
}

function Markdown({ body }: { body: string }) {
  const blocks = body.split(/\n\s*\n/).filter(Boolean)
  return <div className="markdown">{blocks.map((block, index) => {
    const lines = block.split('\n')
    if (lines.length === 1 && /^!\[.*?\]\(.*?\)$/.test(lines[0])) {
      const image = lines[0].match(/^!\[(.*?)\]\((.*?)\)$/)!
      return <img className="article-image" key={index} src={image[2]} alt={image[1] || '文章配图'} />
    }
    if (lines.every((line) => /^\*\s+/.test(line))) {
      return <ul key={index}>{lines.map((line) => <li key={line}>{formatInline(line.replace(/^\*\s+/, ''))}</li>)}</ul>
    }
    if (lines[0].startsWith('### ')) return <h3 key={index}>{formatInline(lines[0].slice(4))}</h3>
    if (lines[0].startsWith('## ')) return <h2 key={index}>{formatInline(lines[0].slice(3))}</h2>
    if (lines[0].startsWith('# ')) return <h1 key={index}>{formatInline(lines[0].slice(2))}</h1>
    return <p key={index}>{lines.map((line, lineIndex) => <span key={lineIndex}>{formatInline(line)}{lineIndex < lines.length - 1 && <br />}</span>)}</p>
  })}</div>
}

function GuideCard({ guide, onOpen }: { guide: Guide; onOpen: (guide: Guide) => void }) {
  return <button className="guide-card" onClick={() => onOpen(guide)}>
    <span className="card-kicker">{guide.createdAt || 'SYSTEM DESIGN'}</span>
    <strong>{guide.title}</strong>
    <span>{guide.description}</span>
    <span className="read-link">开始阅读 →</span>
  </button>
}

function App() {
  const [view, setView] = useState<'home' | 'pillar' | 'article' | 'admin'>('home')
  const [selectedPillar, setSelectedPillar] = useState<Pillar>(pillars[0])
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null)
  const [query, setQuery] = useState('')
  const [saved, setSaved] = useState<string[]>(() => JSON.parse(localStorage.getItem('atlas-saved') || '[]'))

  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return guides.slice(0, 8)
    return guides.filter((guide) => `${guide.title} ${guide.description} ${guide.tags.join(' ')}`.toLowerCase().includes(needle)).slice(0, 12)
  }, [query])

  const openGuide = (guide: Guide) => {
    setSelectedGuide(guide)
    setView('article')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleSaved = (id: string) => {
    const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]
    setSaved(next)
    localStorage.setItem('atlas-saved', JSON.stringify(next))
  }

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={() => setView('home')}><span className="brand-mark">SD</span><span><b>System Design</b><small>ATLAS / 101</small></span></button>
      <nav><button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>学习地图</button><button className={view === 'admin' ? 'active' : ''} onClick={() => setView('admin')}>内容管理</button></nav>
      <div className="topbar-note">15 个设计视角 · {guides.length} 篇资料</div>
    </header>

    {view === 'home' && <main>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">A FIELD GUIDE FOR BUILDERS</p><h1>把复杂系统，<em>拆成可读的路径。</em></h1><p className="hero-lede">从需求到迁移，沿着 15 个关键视角，建立一套真正能用于设计、评审和面试的系统思维。</p><div className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索文章、主题或关键词..." /></div></div>
        <div className="hero-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core">15<br /><small>视角</small></div><span className="orbit-label label-a">可靠性</span><span className="orbit-label label-b">数据设计</span><span className="orbit-label label-c">可扩展性</span></div>
      </section>
      {query ? <section className="section"><div className="section-heading"><div><p className="eyebrow">SEARCH RESULT</p><h2>找到 {searchResults.length} 篇文章</h2></div><button className="text-button" onClick={() => setQuery('')}>清除搜索</button></div><div className="guide-grid">{searchResults.map((guide) => <GuideCard key={guide.id} guide={guide} onOpen={openGuide} />)}</div></section> : <>
        <section className="section pillars-section"><div className="section-heading"><div><p className="eyebrow">THE DESIGN MAP</p><h2>15 个系统设计视角</h2></div><span className="section-meta">01 — 15</span></div><div className="pillar-grid">{pillars.map((pillar) => <button className="pillar-card" key={pillar.id} onClick={() => { setSelectedPillar(pillar); setView('pillar') }}><span className="pillar-number">{pillar.number}</span><span className="pillar-title">{pillar.title}</span><span className="pillar-english">{pillar.english}</span><span className="pillar-description">{pillar.description}</span><span className="pillar-arrow">↗</span></button>)}</div></section>
        <section className="section latest-section"><div className="section-heading"><div><p className="eyebrow">CURATED READING</p><h2>从这里开始</h2></div><span className="section-meta">精选文章</span></div><div className="guide-grid">{guides.slice(0, 6).map((guide) => <GuideCard key={guide.id} guide={guide} onOpen={openGuide} />)}</div></section>
      </>}
    </main>}

    {view === 'pillar' && <main className="content-page"><button className="back-button" onClick={() => setView('home')}>← 返回学习地图</button><div className="pillar-intro"><p className="eyebrow">PILLAR {selectedPillar.number}</p><h1>{selectedPillar.title}</h1><p>{selectedPillar.description}</p></div><div className="section-heading"><div><p className="eyebrow">READING LIST</p><h2>{pillarGuides(selectedPillar).length} 篇相关资料</h2></div></div><div className="guide-grid">{pillarGuides(selectedPillar).map((guide) => <GuideCard key={guide.id} guide={guide} onOpen={openGuide} />)}</div></main>}

    {view === 'article' && selectedGuide && <main className="article-page"><button className="back-button" onClick={() => setView('home')}>← 返回学习地图</button><article><div className="article-header"><p className="eyebrow">FIELD NOTE / {selectedGuide.createdAt}</p><h1>{selectedGuide.title}</h1><p className="article-description">{selectedGuide.description}</p><div className="article-actions"><span>{selectedGuide.tags.join(' · ')}</span><button className={saved.includes(selectedGuide.id) ? 'saved' : ''} onClick={() => toggleSaved(selectedGuide.id)}>{saved.includes(selectedGuide.id) ? '★ 已收藏' : '☆ 收藏文章'}</button></div></div><Markdown body={selectedGuide.body} /></article></main>}

    {view === 'admin' && <main className="content-page"><div className="admin-heading"><div><p className="eyebrow">EDITORIAL DESK</p><h1>内容管理</h1><p>当前内容来自 <code>data/guides/*.md</code>。这里提供筛选和预览入口，后续可接入服务端写回。</p></div><span className="admin-badge">LOCAL CONTENT</span></div><div className="admin-table">{guides.map((guide) => <div className="admin-row" key={guide.id}><div><strong>{guide.title}</strong><span>{guide.id}.md · {guide.categories.join(', ') || '未分类'}</span></div><button className="outline-button" onClick={() => openGuide(guide)}>预览</button></div>)}</div></main>}
    <footer><span> SYSTEM DESIGN ATLAS</span><span>Built around clear trade-offs, not magic.</span></footer>
  </div>
}

export default App
