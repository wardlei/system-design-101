export type Guide = {
  id: string
  title: string
  description: string
  image?: string
  createdAt: string
  categories: string[]
  tags: string[]
  body: string
}

export type Pillar = {
  id: string
  number: string
  title: string
  english: string
  description: string
  keywords: string[]
}

export const pillars: Pillar[] = [
  { id: 'requirements', number: '01', title: '需求收集', english: 'Requirements', description: '先把问题定义清楚，再讨论解法。', keywords: ['requirement', 'interview', 'problem'] },
  { id: 'architecture', number: '02', title: '系统架构', english: 'Architecture', description: '把边界、组件和关键链路画出来。', keywords: ['architecture', 'microservice', 'system'] },
  { id: 'data', number: '03', title: '数据设计', english: 'Data design', description: '围绕事实、访问模式和一致性设计数据。', keywords: ['database', 'data', 'storage', 'sql'] },
  { id: 'domain', number: '04', title: '领域设计', english: 'Domain design', description: '让业务概念成为清晰、可演进的模型。', keywords: ['domain', 'ddd', 'design'] },
  { id: 'scalability', number: '05', title: '可扩展性', english: 'Scalability', description: '面对流量、数据和团队增长保持从容。', keywords: ['scale', 'scalability', 'sharding', 'load'] },
  { id: 'reliability', number: '06', title: '可靠性', english: 'Reliability', description: '故障会发生，系统要能恢复并减少损失。', keywords: ['reliability', 'fault', 'resilient', 'failure'] },
  { id: 'availability', number: '07', title: '可用性', english: 'Availability', description: '让服务在用户需要时持续可访问。', keywords: ['availability', 'distributed', 'replication'] },
  { id: 'performance', number: '08', title: '性能', english: 'Performance', description: '用延迟、吞吐和容量刻画体验。', keywords: ['performance', 'latency', 'cache', 'cdn'] },
  { id: 'security', number: '09', title: '安全性', english: 'Security', description: '把身份、权限和数据保护放进设计起点。', keywords: ['security', 'auth', 'secure', 'encryption'] },
  { id: 'maintainability', number: '10', title: '可维护性', english: 'Maintainability', description: '让系统容易理解、修改、观测和交接。', keywords: ['maintain', 'code', 'microservice', 'devops'] },
  { id: 'testing', number: '11', title: '测试', english: 'Testing', description: '验证关键行为，而不是只追求覆盖率。', keywords: ['test', 'testing', 'quality'] },
  { id: 'ux', number: '12', title: '用户体验', english: 'User experience', description: '技术方案最终要落到真实用户的感受。', keywords: ['user', 'product', 'experience', 'frontend'] },
  { id: 'cost', number: '13', title: '成本估算', english: 'Cost estimation', description: '把资源、流量和运营成本纳入取舍。', keywords: ['cost', 'cloud', 'aws', 'storage'] },
  { id: 'documentation', number: '14', title: '文档', english: 'Documentation', description: '把决策写下来，让上下文可以复用。', keywords: ['document', 'design', 'architecture'] },
  { id: 'migration', number: '15', title: '迁移计划', english: 'Migration plan', description: '用可回滚的步骤把旧世界带到新世界。', keywords: ['migration', 'evolution', 'legacy', 'upgrade'] },
]

const rawGuidesZh = import.meta.glob('../data/guides-zh/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const rawGuidesEn = import.meta.glob('../data/guides/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

// 按文件名合并：中文译文覆盖英文原文，避免同一篇文章出现两份
const rawGuides: Record<string, string> = {}
for (const [file, raw] of Object.entries(rawGuidesEn)) {
  rawGuides[file.split('/').pop()!] = raw
}
for (const [file, raw] of Object.entries(rawGuidesZh)) {
  rawGuides[file.split('/').pop()!] = raw
}

function parseFrontMatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string | string[]> = {}
  let activeList: string | undefined
  for (const line of match[1].split('\n')) {
    const listItem = line.match(/^\s+-\s+["']?(.*?)["']?$/)
    if (listItem && activeList) {
      const current = data[activeList]
      data[activeList] = [...(Array.isArray(current) ? current : []), listItem[1]]
      continue
    }
    const field = line.match(/^([\w]+):\s*(.*)$/)
    if (!field) continue
    const [, key, value] = field
    if (!value) {
      activeList = key
      data[key] = []
    } else {
      activeList = undefined
      data[key] = value.replace(/^['"]|['"]$/g, '')
    }
  }
  return { data, body: match[2].trim() }
}

export const guides: Guide[] = Object.entries(rawGuides).map(([file, raw]) => {
  const { data, body } = parseFrontMatter(raw)
  const id = file.split('/').pop()!.replace(/\.md$/, '')
  return {
    id,
    title: String(data.title || id),
    description: String(data.description || '系统设计主题文章'),
    image: data.image ? String(data.image) : undefined,
    createdAt: String(data.createdAt || ''),
    categories: Array.isArray(data.categories) ? data.categories : [],
    tags: Array.isArray(data.tags) ? data.tags : [],
    body,
  }
}).sort((a, b) => b.createdAt.localeCompare(a.createdAt))

export function pillarGuides(pillar: Pillar) {
  const terms = pillar.keywords.map((keyword) => keyword.toLowerCase())
  return guides.filter((guide) => {
    const haystack = `${guide.title} ${guide.description} ${guide.tags.join(' ')} ${guide.categories.join(' ')} ${guide.body.slice(0, 1200)}`.toLowerCase()
    return terms.some((term) => haystack.includes(term))
  })
}
