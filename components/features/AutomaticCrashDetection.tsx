import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  BoltIcon, 
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const detectionTypes = [
  {
    name: 'Impact Detection',
    description: 'Detects sudden deceleration and impact forces',
    threshold: '8G force',
    accuracy: '99.8%',
    icon: BoltIcon
  },
  {
    name: 'Rollover Detection',
    description: 'Identifies vehicle rollover using gyroscope data',
    threshold: '45° tilt',
    accuracy: '99.5%',
    icon: ExclamationTriangleIcon
  },
  {
    name: 'Collision Analysis',
    description: 'AI analysis of crash patterns and severity',
    threshold: 'Multi-sensor',
    accuracy: '99.7%',
    icon: CpuChipIcon
  }
]

const sensorData = [
  { name: 'Accelerometer', description: 'Measures G-forces in all directions', status: 'Active' },
  { name: 'Gyroscope', description: 'Detects rotation and orientation changes', status: 'Active' },
  { name: 'GPS Module', description: 'Tracks speed and location changes', status: 'Active' },
  { name: 'Magnetometer', description: 'Provides compass and orientation data', status: 'Active' }
]

export default function AutomaticCrashDetection() {
  return (
    <div id="automatic-crash-detection" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Automatic Crash Detection</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI-Powered Accident Detection
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our advanced machine learning algorithms analyze sensor data in real-time to detect 
            accidents with 99.7% accuracy, triggering emergency response within 2 seconds.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Detection Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Detection Capabilities</h3>
              <div className="space-y-6">
                {detectionTypes.map((type) => (
                  <div key={type.name} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-lg bg-green-100 p-3">
                        <type.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">{type.name}</h4>
                        <p className="mt-2 text-gray-600">{type.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Threshold: </span>
                            <span className="text-sm font-medium text-gray-900">{type.threshold}</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Accuracy: </span>
                            <span className="text-sm font-medium text-green-600">{type.accuracy}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sensor Dashboard */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Sensor Integration</h3>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-900">Live Sensor Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">All Systems Active</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {sensorData.map((sensor) => (
                    <div key={sensor.name} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">{sensor.name}</h5>
                          <p className="text-sm text-gray-600">{sensor.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          <span className="text-sm font-medium text-green-600">{sensor.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                  <h5 className="font-medium text-gray-900 mb-2">Detection Algorithm</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Multi-sensor fusion technology</div>
                    <div>• Machine learning pattern recognition</div>
                    <div>• Real-time data processing</div>
                    <div>• False positive filtering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.7%</div>
              <div className="text-sm text-gray-600">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">0.3%</div>
              <div className="text-sm text-gray-600">False Positive Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2 sec</div>
              <div className="text-sm text-gray-600">Detection Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Continuous Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}