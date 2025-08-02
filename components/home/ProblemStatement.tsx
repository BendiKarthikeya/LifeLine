import { ExclamationTriangleIcon, ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const statistics = [
  {
    id: 1,
    name: 'Road Accidents Daily',
    value: '1,200+',
    description: 'accidents happen every day in India',
    icon: ExclamationTriangleIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    id: 2,
    name: 'Lives Lost',
    value: '400+',
    description: 'people die daily due to delayed emergency response',
    icon: ClockIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 3,
    name: 'Response Time',
    value: '45 min',
    description: 'average emergency response time in rural areas',
    icon: MapPinIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 4,
    name: 'Failed Calls',
    value: '60%',
    description: 'of accident victims cannot call for help themselves',
    icon: PhoneIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

export default function ProblemStatement() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">The Crisis</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Every Second Counts in Emergency Response
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            India faces a critical challenge in emergency response. Delayed detection and slow response times 
            cost thousands of lives every year. Traditional emergency systems rely on manual reporting, 
            creating dangerous delays when every second matters.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {statistics.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center">
                <div className={`rounded-full p-3 ${stat.bgColor} mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {stat.name}
                </dt>
                <dd className={`mt-1 text-4xl font-bold tracking-tight ${stat.color}`}>
                  {stat.value}
                </dd>
                <dd className="mt-2 text-sm leading-6 text-gray-600 max-w-xs">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Solution is Here
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our AI-powered system detects accidents automatically and alerts emergency services 
              within 2 seconds, reducing response time by up to 80%.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Saving lives every day across India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}