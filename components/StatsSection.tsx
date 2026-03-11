'use client'

import { useState, useEffect } from 'react'
import { Users, Eye, FileText, Zap } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Leitores Ativos', value: 1247, suffix: '+' },
  { icon: Eye, label: 'Visualizações', value: 89234, suffix: '+' },
  { icon: FileText, label: 'Artigos Publicados', value: 48, suffix: '' },
  { icon: Zap, label: 'Performance Score', value: 99, suffix: '%' },
]

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    
    const intervals = stats.map((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps
      
      return setInterval(() => {
        currentStep++
        setAnimatedValues(prev => {
          const newValues = [...prev]
          newValues[index] = Math.min(Math.floor(increment * currentStep), stat.value)
          return newValues
        })
        
        if (currentStep >= steps) {
          clearInterval(intervals[index])
        }
      }, stepDuration)
    })
    
    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="glass-effect rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-4">
            <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {animatedValues[index].toLocaleString()}
            {stat.suffix}
          </div>
          
          <div className="text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
              style={{ width: `${(animatedValues[index] / stat.value) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}