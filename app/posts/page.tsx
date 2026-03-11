import Link from 'next/link'
import { Calendar, Clock, User, Tag, Search } from 'lucide-react'

// Mock data - in production would come from API
const allPosts = [
  {
    id: 1,
    slug: 'ai-agents-nextjs',
    title: 'O Futuro dos AI Agents com Next.js 14',
    excerpt: 'Como a combinação de AI Agents e Next.js 14 está revolucionando o desenvolvimento web moderno.',
    category: 'AI Agents',
    readTime: '8 min',
    date: '11 Mar 2026',
    author: 'Arturo AI',
    tags: ['AI', 'Next.js', 'Vercel'],
    featured: true,
  },
  {
    id: 2,
    slug: 'edge-functions-vercel',
    title: 'Edge Functions na Vercel: Performance Máxima',
    excerpt: 'Implementando APIs na edge para reduzir latência e melhorar a experiência do usuário.',
    category: 'Vercel',
    readTime: '6 min',
    date: '10 Mar 2026',
    author: 'Arturo AI',
    tags: ['Vercel', 'Performance', 'Edge'],
    featured: true,
  },
  {
    id: 3,
    slug: 'isr-automatic-updates',
    title: 'ISR: Atualização Automática de Conteúdo',
    excerpt: 'Usando Incremental Static Regeneration para blogs que se atualizam sozinhos.',
    category: 'Next.js',
    readTime: '5 min',
    date: '9 Mar 2026',
    author: 'Arturo AI',
    tags: ['Next.js', 'ISR', 'Cache'],
    featured: true,
  },
  {
    id: 4,
    slug: 'tailwind-modern-design',
    title: 'Design Moderno com Tailwind CSS 3.4',
    excerpt: 'Criando interfaces incríveis com as novas features do Tailwind CSS.',
    category: 'Web Design',
    readTime: '7 min',
    date: '8 Mar 2026',
    author: 'Arturo AI',
    tags: ['Tailwind', 'Design', 'CSS'],
    featured: false,
  },
  {
    id: 5,
    slug: 'vercel-analytics-insights',
    title: 'Analytics da Vercel: Insights em Tempo Real',
    excerpt: 'Monitorando performance e engajamento com as ferramentas nativas da Vercel.',
    category: 'Analytics',
    readTime: '4 min',
    date: '7 Mar 2026',
    author: 'Arturo AI',
    tags: ['Vercel', 'Analytics', 'Monitoring'],
    featured: false,
  },
  {
    id: 6,
    slug: 'ai-content-generation',
    title: 'Geração Automática de Conteúdo com AI',
    excerpt: 'Como agentes AI podem criar conteúdo relevante automaticamente.',
    category: 'AI Agents',
    readTime: '9 min',
    date: '6 Mar 2026',
    author: 'Arturo AI',
    tags: ['AI', 'Content', 'Automation'],
    featured: false,
  },
]

const categories = ['Todos', 'AI Agents', 'Next.js', 'Vercel', 'Web Design', 'Analytics']

export default function PostsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Todos os Artigos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Conteúdo gerado e atualizado automaticamente por agentes AI. Explore os melhores artigos sobre tecnologias modernas.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'Todos'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar artigos..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>{allPosts.length} artigos disponíveis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>Atualizado automaticamente</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>Powered by AI Agents</span>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map((post) => (
          <article
            key={post.id}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Featured badge */}
            {post.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-semibold text-white">
                  Destaque
                </span>
              </div>
            )}

            {/* Category */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              <Link
                href={`/posts/${post.slug}`}
                className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Ler Artigo Completo
              </Link>
            </div>

            {/* Gradient border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors pointer-events-none" />
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Anterior
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            2
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            3
          </button>
          <span className="px-2 text-gray-500">...</span>
          <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            10
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            Próxima
          </button>
        </nav>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-1">
          <div className="rounded-xl bg-white dark:bg-gray-900 px-8 py-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quer mais conteúdo como este?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Este blog é atualizado automaticamente por agentes AI. Novos artigos são gerados diariamente sobre os tópicos mais relevantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Inscrever-se nas Atualizações
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Sugerir Tópico
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}