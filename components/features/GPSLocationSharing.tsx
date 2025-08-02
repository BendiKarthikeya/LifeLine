import { 
  MapPinIcon, 
  GlobeAltIcon, 
  SignalIcon, 
  ShieldCheckIcon,
  ClockIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

const locationFeatures = [
  {
    name: 'Sub-meter Accuracy',
    description: 'GPS precision within 1-3 meters for exact location identification',
    icon: MapPinIcon,
    stat: '<3m',
    statLabel: 'Accuracy'
  },
  {
    name: 'Offline Capability',
    description: 'Location caching works even without internet connectivity',
    icon: SignalIcon,
    stat: '100%',
    statLabel: 'Offline ready'
  },
  {
    name: 'Real-time Tracking',
    description: 'Continuous location updates during emergency situations',
    icon: ClockIcon,
    stat: '1 sec',
    statLabel: 'Update interval'
  },
  {
    name: 'Privacy Protected',
    description: 'Location shared only during emergencies with encrypted transmission',
    icon: ShieldCheckIcon,
    stat: 'AES-256',
    statLabel: 'Encryption'
  },
  {
    name: 'Multi-platform Support',
    description: 'Works across Android, iOS, and connected vehicle systems',
    icon: DevicePhoneMobileIcon,
    stat: '3',
    statLabel: 'Platforms'
  },
  {
    name: 'Global Coverage',
    description: 'GPS and GLONASS satellite support for worldwide coverage',
    icon: GlobeAltIcon,
    stat: 'Global',
    statLabel: 'Coverage'
  }
]

export default function GPSLocationSharing() {
  return (
    <div id="gps-location-sharing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">GPS Location Sharing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Precise Location. Instant Sharing.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our advanced GPS system ensures emergency responders know exactly where you are, 
            even in remote areas or when you can't communicate your location.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {/* Features list */}
            <div className="space-y-8">
              {locationFeatures.map((feature) => (
                <div key={feature.name} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{feature.stat}</div>
                        <div className="text-xs text-gray-500">{feature.statLabel}</div>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual representation */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">How Location Sharing Works</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Accident Detected</h4>
                      <p className="text-sm text-gray-600">System automatically captures GPS coordinates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location Verified</h4>
                      <p className="text-sm text-gray-600">Cross-references with multiple satellite systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Instant Sharing</h4>
                      <p className="text-sm text-gray-600">Location sent to emergency services and contacts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Continuous Updates</h4>
                      <p className="text-sm text-gray-600">Real-time tracking until help arrives</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Sample Location Data</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Coordinates: 28.6139° N, 77.2090° E</div>
                    <div>Address: Connaught Place, New Delhi</div>
                    <div>Accuracy: ±2.1 meters</div>
                    <div>What3Words: ///index.home.raft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Faster Response</h3>
              <p className="mt-2 text-sm text-gray-600">
                Emergency services reach you 60% faster with precise location data
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Privacy First</h3>
              <p className="mt-2 text-sm text-gray-600">
                Location shared only during emergencies with full encryption
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Universal Coverage</h3>
              <p className="mt-2 text-sm text-gray-600">
                Works anywhere in India, from cities to remote rural areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}