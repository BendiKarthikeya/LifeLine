'use client'

import { useState } from 'react'
import { 
  DevicePhoneMobileIcon, 
  MapPinIcon, 
  BellAlertIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    id: 1,
    name: 'Smart Detection',
    description: 'AI-powered sensors detect accidents using impact force, rollover detection, and sudden deceleration patterns.',
    icon: ShieldCheckIcon,
    details: [
      'Multi-sensor fusion technology',
      'Machine learning algorithms',
      '99.7% accuracy rate',
      'False positive rate < 0.3%'
    ]
  },
  {
    id: 2,
    name: 'Instant Location',
    description: 'Precise GPS coordinates shared automatically with emergency services and your emergency contacts.',
    icon: MapPinIcon,
    details: [
      'Sub-meter GPS accuracy',
      'Works in remote areas',
      'Offline location caching',
      'What3Words integration'
    ]
  },
  {
    id: 3,
    name: 'Emergency Alerts',
    description: 'Automatic alerts sent to 112 India, nearby hospitals, and your emergency contacts within 2 seconds.',
    icon: BellAlertIcon,
    details: [
      '2-second response time',
      'Multi-channel alerts',
      'Priority routing',
      'Confirmation tracking'
    ]
  },
  {
    id: 4,
    name: 'Responder Network',
    description: 'Connect with nearby volunteer responders and trained first-aid providers in your area.',
    icon: UserGroupIcon,
    details: [
      '50,000+ volunteers',
      'Verified responders',
      'Real-time availability',
      'Community safety network'
    ]
  },
  {
    id: 5,
    name: 'Mobile Integration',
    description: 'Seamless smartphone integration with Bluetooth connectivity and offline capabilities.',
    icon: DevicePhoneMobileIcon,
    details: [
      'Cross-platform support',
      'Bluetooth Low Energy',
      'Offline functionality',
      'Battery optimization'
    ]
  },
  {
    id: 6,
    name: 'Real-time Response',
    description: 'Live tracking of emergency response with ETA updates and direct communication channels.',
    icon: ClockIcon,
    details: [
      'Live ambulance tracking',
      'ETA calculations',
      'Two-way communication',
      'Status updates'
    ]
  }
]

export default function SolutionOverview() {
  const [selectedFeature, setSelectedFeature] = useState(features[0])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Solution</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Emergency Response Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A comprehensive system that combines IoT sensors, AI detection, GPS tracking, 
            and emergency response coordination to save lives through faster, smarter emergency response.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`cursor-pointer rounded-lg p-4 transition-all duration-200 ${
                    selectedFeature.id === feature.id
                      ? 'bg-primary-50 border-2 border-primary-200 shadow-md'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-lg p-2 ${
                      selectedFeature.id === feature.id ? 'bg-primary-100' : 'bg-white'
                    }`}>
                      <feature.icon className={`h-6 w-6 ${
                        selectedFeature.id === feature.id ? 'text-primary-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold ${
                        selectedFeature.id === feature.id ? 'text-primary-900' : 'text-gray-900'
                      }`}>
                        {feature.name}
                      </h3>
                      <p className={`mt-1 text-sm ${
                        selectedFeature.id === feature.id ? 'text-primary-700' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Details */}
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="rounded-lg bg-primary-100 p-3">
                    <selectedFeature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedFeature.name}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  {selectedFeature.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {selectedFeature.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Feature {selectedFeature.id} of {features.length}</span>
                    <div className="flex space-x-1">
                      {features.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            index + 1 === selectedFeature.id ? 'bg-primary-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}