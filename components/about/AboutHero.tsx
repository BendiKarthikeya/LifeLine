import { HeartIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function AboutHero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">About LifeLine</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Saving Lives Through Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a dedicated team of engineers, healthcare professionals, and safety experts 
            working together to revolutionize emergency response in India through cutting-edge technology.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Purpose</h3>
              <p className="mt-4 text-gray-600">
                To reduce accident-related deaths by making emergency response faster, smarter, and more reliable
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
              <p className="mt-4 text-gray-600">
                Providing 24/7 reliable emergency detection and response services across India
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <UsersIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Community</h3>
              <p className="mt-4 text-gray-600">
                Building a nationwide network of responders, hospitals, and safety-conscious citizens
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-green-50 px-6 py-3 text-sm font-medium text-green-700">
            <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            1,250+ lives saved and counting
          </div>
        </div>
      </div>
    </div>
  )
}