import { 
  MapPinIcon, 
  ShieldCheckIcon, 
  BellAlertIcon, 
  UserGroupIcon,
  DevicePhoneMobileIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'GPS Location Sharing',
    description: 'Precise location tracking and sharing',
    icon: MapPinIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Automatic Crash Detection',
    description: 'AI-powered accident detection',
    icon: ShieldCheckIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Emergency Service Integration',
    description: 'Direct connection to 112 India',
    icon: BellAlertIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    name: 'First Aid Instructions',
    description: 'Step-by-step emergency guidance',
    icon: DevicePhoneMobileIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'SOS Button',
    description: 'One-touch emergency activation',
    icon: ClockIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    name: 'Volunteer Network',
    description: 'Community responder system',
    icon: UserGroupIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
]

export default function FeaturesHero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Complete Feature Set</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need for Emergency Safety
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            LifeLine combines cutting-edge technology with practical emergency response features 
            to create the most comprehensive accident detection and emergency care system available.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5 group-hover:shadow-lg transition-all duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className={`rounded-lg p-2 ${feature.bgColor}`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={`#${feature.name.toLowerCase().replace(/\s+/g, '-')}`} className={`text-sm font-semibold leading-6 ${feature.color} hover:opacity-80`}>
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Stats */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">99.7%</div>
              <div className="text-sm text-gray-600">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">2 sec</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}