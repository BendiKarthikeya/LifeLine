import { PlayIcon, BoltIcon, MapPinIcon, BellAlertIcon } from '@heroicons/react/24/outline'

export default function DemoHero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Interactive Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See How Alerts Are Triggered
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience our accident detection system in action. Watch how LifeLine detects accidents, 
            processes location data, and triggers emergency alerts in real-time.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BoltIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accident Detection</h3>
              <p className="mt-4 text-gray-600">
                AI-powered sensors detect impact, rollover, and sudden deceleration patterns
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Location Processing</h3>
              <p className="mt-4 text-gray-600">
                GPS coordinates are captured and verified for precise emergency response
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <BellAlertIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Emergency Alerts</h3>
              <p className="mt-4 text-gray-600">
                Instant notifications sent to 112 India, hospitals, and emergency contacts
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200">
            <PlayIcon className="h-6 w-6 mr-2" />
            Start Interactive Demo
          </button>
        </div>
      </div>
    </div>
  )
}