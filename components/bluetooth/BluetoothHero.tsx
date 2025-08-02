import { 
  WifiIcon, 
  CpuChipIcon, 
  DevicePhoneMobileIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

export default function BluetoothHero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Bluetooth Connectivity</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vehicle Sensor Integration
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect your vehicle's sensors to LifeLine via Bluetooth for enhanced accident detection 
            accuracy and real-time monitoring capabilities.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <WifiIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Bluetooth 5.0</h3>
              <p className="mt-4 text-sm text-gray-600">
                Low energy consumption with reliable connectivity
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CpuChipIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Smart Sensors</h3>
              <p className="mt-4 text-sm text-gray-600">
                Advanced IoT sensors for precise accident detection
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">App Integration</h3>
              <p className="mt-4 text-sm text-gray-600">
                Seamless connection with LifeLine mobile app
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Secure Connection</h3>
              <p className="mt-4 text-sm text-gray-600">
                Encrypted data transmission for privacy protection
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700">
            <div className="h-2 w-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            Compatible with 95% of vehicles manufactured after 2015
          </div>
        </div>
      </div>
    </div>
  )
}