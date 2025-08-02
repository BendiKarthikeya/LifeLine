import Link from 'next/link'
import { 
  DevicePhoneMobileIcon, 
  PlayIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Instant Protection',
    description: 'Start protecting yourself and your family immediately',
    icon: ShieldCheckIcon,
  },
  {
    name: '2-Second Response',
    description: 'Fastest emergency detection and alert system',
    icon: ClockIcon,
  },
  {
    name: 'Life-Saving Technology',
    description: 'Join thousands who trust LifeLine for safety',
    icon: HeartIcon,
  },
]

export default function CallToAction() {
  return (
    <div className="bg-primary-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Protect What Matters Most?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
            Don't wait for an emergency to wish you had LifeLine. Download now and join 
            50,000+ users who trust us to keep them safe on the road.
          </p>
          
          {/* Main CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 flex items-center gap-2"
            >
              <DevicePhoneMobileIcon className="h-6 w-6" />
              Download App Now
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/demo"
              className="group rounded-md bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 transition-all duration-200 flex items-center gap-2"
            >
              <PlayIcon className="h-6 w-6" />
              Watch Demo
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.name}</h3>
                <p className="mt-2 text-sm text-primary-100">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 border-t border-primary-500 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-primary-100">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>Government Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>112 India Integrated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>50,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Emergency contact */}
          <div className="mt-8 text-center">
            <p className="text-sm text-primary-200 mb-2">
              In case of immediate emergency, call:
            </p>
            <a
              href="tel:112"
              className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 emergency-pulse"
            >
              📞 Emergency 112
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}