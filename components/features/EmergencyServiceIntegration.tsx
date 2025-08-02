import { 
  PhoneIcon, 
  BuildingOffice2Icon, 
  TruckIcon, 
  ClockIcon,
  MapPinIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const integrations = [
  {
    name: '112 India Emergency',
    description: 'Direct integration with national emergency helpline',
    responseTime: '< 30 seconds',
    coverage: 'Pan-India',
    icon: PhoneIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    name: 'Hospital Network',
    description: '2,500+ hospitals connected for immediate coordination',
    responseTime: '< 1 minute',
    coverage: '150+ cities',
    icon: BuildingOffice2Icon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Ambulance Services',
    description: '5,000+ ambulances with GPS tracking integration',
    responseTime: '< 2 minutes',
    coverage: 'Urban & Rural',
    icon: TruckIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Police Coordination',
    description: 'State police networks for traffic and security support',
    responseTime: '< 1 minute',
    coverage: '28 states',
    icon: UserGroupIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

const responseFlow = [
  {
    step: 1,
    title: 'Accident Detected',
    description: 'System automatically identifies emergency situation',
    time: 'T+0 seconds'
  },
  {
    step: 2,
    title: '112 India Alerted',
    description: 'Emergency services receive location and severity data',
    time: 'T+2 seconds'
  },
  {
    step: 3,
    title: 'Hospital Notified',
    description: 'Nearest hospitals prepared for incoming patient',
    time: 'T+5 seconds'
  },
  {
    step: 4,
    title: 'Ambulance Dispatched',
    description: 'Closest available ambulance sent to location',
    time: 'T+30 seconds'
  },
  {
    step: 5,
    title: 'Contacts Informed',
    description: 'Emergency contacts receive notification and location',
    time: 'T+10 seconds'
  },
  {
    step: 6,
    title: 'Live Tracking',
    description: 'Real-time updates until help arrives',
    time: 'Continuous'
  }
]

export default function EmergencyServiceIntegration() {
  return (
    <div id="emergency-service-integration" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Emergency Service Integration</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Connected to India's Emergency Network
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            LifeLine is directly integrated with 112 India and thousands of hospitals, 
            ambulance services, and emergency responders across the country.
          </p>
        </div>

        {/* Integration Partners */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {integrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`rounded-lg p-3 ${integration.bgColor}`}>
                    <integration.icon className={`h-8 w-8 ${integration.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{integration.name}</h3>
                    <p className="mt-2 text-gray-600">{integration.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Response Time</dt>
                        <dd className={`text-lg font-semibold ${integration.color}`}>{integration.responseTime}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Coverage</dt>
                        <dd className="text-lg font-semibold text-gray-900">{integration.coverage}</dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Timeline */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Emergency Response Timeline
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See how quickly our integrated system responds to emergencies
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {responseFlow.map((item, index) => (
                <div key={item.step} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`text-sm font-medium text-red-600 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                          {item.time}
                        </div>
                        <div className={`w-8 h-8 bg-red-100 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                          <span className="text-sm font-bold text-red-600">{item.step}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Stats */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">2,500+</div>
              <div className="text-sm text-gray-600">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">5,000+</div>
              <div className="text-sm text-gray-600">Connected Ambulances</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">28</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}