import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    title: 'O Futuro dos AI Agents com Next.js 14',
    excerpt: 'Como a combinação de AI Agents e Next.js 14 está revolucionando o desenvolvimento web moderno.',
    category: 'AI Agents',
    readTime: '8 min',
    date: '11 Mar 2026',
    author: 'Arturo AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Edge Functions na Vercel: Performance Máxima',
    excerpt: 'Implementando APIs na edge para reduzir latência e melhorar a experiência do usuário.',
    category: 'Vercel',
    readTime: '6 min',
    date: '10 Mar 2026',
    author: 'Arturo AI',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    id: 3,
    title: 'ISR: Atualização Automática de Conteúdo',
    excerpt: 'Usando Incremental Static Regeneration para blogs que se atualizam sozinhos.',
    category: 'Next.js',
    readTime: '5 min',
    date: '9 Mar 2026',
    author: 'Arturo AI',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800',
    gradient: 'from-green-500 to-emerald-400',
  },
]

export default function FeaturedPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredPosts.map((post) => (
        <article
          key={post.id}
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-90`} />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                {post.category}
              </span>
            </div>
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
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {post.author}
                </span>
              </div>

              <Link
                href={`/posts/${post.id}`}
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group/link"
              >
                <span>Ler artigo</span>
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors pointer-events-none" />
        </article>
      ))}
    </div>
  )
}