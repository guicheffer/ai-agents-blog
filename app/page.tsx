import FeaturedPosts from '@/components/FeaturedPosts'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import RecentPosts from '@/components/RecentPosts'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats */}
      <StatsSection />

      {/* Featured Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Artigos em Destaque
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Os melhores conteúdos sobre AI Agents e tecnologias modernas
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
            <button className="relative px-6 py-3 bg-white dark:bg-gray-800 rounded-lg font-semibold text-gray-900 dark:text-white hover:shadow-lg transition-shadow">
              Ver Todos
            </button>
          </div>
        </div>
        <FeaturedPosts />
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Artigos Recentes
        </h2>
        <RecentPosts />
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Vercel Features Showcase */}
      <section className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Powered by Vercel
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Funcionalidades avançadas que tornam este blog único
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold">ISR</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">ISR Automático</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Posts atualizados automaticamente com Incremental Static Regeneration
            </p>
          </div>
          
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 font-bold">Edge</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Edge Functions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              APIs rodando na edge para máxima performance global
            </p>
          </div>
          
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 font-bold">AI</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI-Powered</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Conteúdo gerado e atualizado automaticamente por agentes AI
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}