'use client'

import { useState, useEffect } from 'react'
import { 
  UserGroupIcon, 
  HeartIcon, 
  ClockIcon, 
  MapPinIcon,
  TruckIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

const stats = [
  {
    id: 1,
    name: 'Lives Saved',
    value: 1250,
    suffix: '+',
    description: 'Lives saved through faster emergency response',
    icon: HeartIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 2,
    name: 'Response Time Improvement',
    value: 80,
    suffix: '%',
    description: 'Average reduction in emergency response time',
    icon: ClockIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 3,
    name: 'Registered Users',
    value: 50000,
    suffix: '+',
    description: 'Active users across India',
    icon: UserGroupIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 4,
    name: 'Cities Covered',
    value: 150,
    suffix: '+',
    description: 'Cities with active emergency network',
    icon: MapPinIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 5,
    name: 'Partner Hospitals',
    value: 2500,
    suffix: '+',
    description: 'Hospitals in our emergency network',
    icon: BuildingOffice2Icon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 6,
    name: 'Emergency Vehicles',
    value: 5000,
    suffix: '+',
    description: 'Ambulances connected to our system',
    icon: TruckIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
]

export default function Statistics() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, currentValue: 0 })))

  useEffect(() => {
    const animateStats = () => {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = stat.value / steps
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          const currentValue = Math.min(Math.floor(increment * currentStep), stat.value)
          
          setAnimatedStats(prev => 
            prev.map((item, i) => 
              i === index ? { ...item, currentValue } : item
            )
          )

          if (currentStep >= steps) {
            clearInterval(timer)
          }
        }, duration / steps)
      })
    }

    // Start animation when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('statistics-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K'
    }
    return num.toString()
  }

  return (
    <div id="statistics-section" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Impact Dashboard</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-Time Impact Statistics
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See the measurable impact LifeLine is making across India. These numbers update in real-time 
            as our system continues to save lives and improve emergency response.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {animatedStats.map((stat) => (
              <div key={stat.id} className="relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className={`rounded-lg p-3 ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>
                </div>
                
                <dt className="text-lg font-semibold leading-7 text-gray-900 mb-2">
                  {stat.name}
                </dt>
                
                <dd className={`text-4xl font-bold tracking-tight ${stat.color} mb-2`}>
                  {formatNumber(stat.currentValue)}{stat.suffix}
                </dd>
                
                <dd className="text-sm leading-6 text-gray-600">
                  {stat.description}
                </dd>

                {/* Progress indicator */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full transition-all duration-1000 ${stat.color.replace('text-', 'bg-')}`}
                    style={{ width: `${(stat.currentValue / stat.value) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Live updates indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
            <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Statistics update every 5 minutes with real-time data
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Be part of these growing numbers. Join LifeLine today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200"
            >
              Join LifeLine
            </a>
            <a
              href="/demo"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}