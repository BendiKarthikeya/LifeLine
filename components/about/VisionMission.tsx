export default function VisionMission() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              "To reduce accident-related deaths by speeding up emergency response"
            </p>
            <p className="text-gray-600">
              We envision a future where no life is lost due to delayed emergency response. 
              Through our AI-powered accident detection system, we aim to create the fastest 
              and most reliable emergency response network in India.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                Zero preventable deaths from delayed response
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                Nationwide coverage by 2025
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                Integration with all emergency services
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              "Create a nationwide connected safety network for vehicles and citizens"
            </p>
            <p className="text-gray-600">
              Our mission is to leverage cutting-edge technology to build India's most 
              comprehensive accident detection and emergency response ecosystem, connecting 
              vehicles, citizens, and emergency services in real-time.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Advanced AI-powered detection systems
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Real-time emergency coordination
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                Community-driven safety network
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}