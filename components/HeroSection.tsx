'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function HeroSection() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: Sparkles, text: 'Conteúdo AI-Generated' },
    { icon: Zap, text: 'Performance Edge' },
    { icon: TrendingUp, text: 'Atualização Automática' },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 md:p-12">
      {/* Animated background elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        style={{ transform: `rotate(${rotation + 180}deg)` }}
      />

      <div className="relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-white font-medium">✨ Blog AI Ativo</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Descubra o Futuro dos{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8">
            Um blog moderno construído com Next.js 14 e funcionalidades avançadas da Vercel.
            Conteúdo atualizado automaticamente por agentes AI, com performance de edge computing.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <feature.icon className="h-5 w-5 text-white" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/posts"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Explorar Artigos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Ver Demonstração
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80">Monitoramento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Edge</div>
              <div className="text-white/80">Performance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">AI</div>
              <div className="text-white/80">Powered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-8 right-8 hidden lg:block">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Next.js</div>
              <div className="text-white/80 text-sm">14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}