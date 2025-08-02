import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactInfo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="mt-4 text-gray-600">+91-XXXX-XXXXX</p>
              <p className="text-sm text-gray-500">24/7 Emergency Support</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <EnvelopeIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="mt-4 text-gray-600">info@lifelineapp.com</p>
              <p className="text-sm text-gray-500">General Inquiries</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <MapPinIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Office</h3>
              <p className="mt-4 text-gray-600">New Delhi, India</p>
              <p className="text-sm text-gray-500">Headquarters</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-50 px-6 py-3 text-sm font-medium text-primary-700">
            <div className="h-2 w-2 bg-primary-400 rounded-full mr-2 animate-pulse"></div>
            We typically respond within 2 hours
          </div>
        </div>
      </div>
    </div>
  )
}