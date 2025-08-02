import { 
  BoltIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  HeartIcon,
  UsersIcon 
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Automatic Detection',
    description: 'No need to manually call for help. Our AI detects accidents instantly and triggers emergency response.',
    icon: BoltIcon,
    stats: '2 seconds',
    statsLabel: 'Detection time'
  },
  {
    name: 'Instant Alerts',
    description: 'Emergency services and your contacts are notified immediately with your exact location.',
    icon: ClockIcon,
    stats: '99.7%',
    statsLabel: 'Success rate'
  },
  {
    name: 'Nationwide Network',
    description: 'Connected to 112 India and thousands of hospitals across the country for comprehensive coverage.',
    icon: GlobeAltIcon,
    stats: '28 states',
    statsLabel: 'Coverage area'
  },
  {
    name: 'Life-Saving Speed',
    description: 'Reduce emergency response time by up to 80%, significantly improving survival chances.',
    icon: HeartIcon,
    stats: '80%',
    statsLabel: 'Faster response'
  },
  {
    name: 'Verified Safety',
    description: 'Government-approved system with end-to-end encryption and privacy protection.',
    icon: ShieldCheckIcon,
    stats: '100%',
    statsLabel: 'Secure & private'
  },
  {
    name: 'Community Support',
    description: 'Access to 50,000+ trained volunteer responders and first-aid providers nationwide.',
    icon: UsersIcon,
    stats: '50,000+',
    statsLabel: 'Volunteers'
  }
]

export default function KeyBenefits() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Key Benefits</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose LifeLine?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the most advanced accident detection and emergency response system 
            designed specifically for Indian roads and emergency infrastructure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-lg bg-primary-50 p-3">
                    <benefit.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{benefit.stats}</div>
                    <div className="text-xs text-gray-500">{benefit.statsLabel}</div>
                  </div>
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-50 px-6 py-3 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
            <HeartIcon className="h-4 w-4 mr-2" />
            Join thousands of users who trust LifeLine to keep them safe
          </div>
        </div>
      </div>
    </div>
  )
}