'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Truck Driver',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'LifeLine saved my life when I had an accident on the highway. The system detected the crash instantly and help arrived within 15 minutes. I couldn\'t have called for help myself.',
    rating: 5,
    incident: 'Highway accident, unconscious for 20 minutes',
    responseTime: '15 minutes'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'Emergency Physician',
    location: 'AIIMS, New Delhi',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    content: 'As an emergency doctor, I see the difference LifeLine makes daily. Patients arrive faster, with better information, and we can prepare treatment in advance. It\'s revolutionary.',
    rating: 5,
    incident: 'Medical professional perspective',
    responseTime: 'Improved patient outcomes'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Software Engineer',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'My wife was in an accident while I was at work. LifeLine not only called the ambulance but also notified me immediately with her exact location. Peace of mind is priceless.',
    rating: 5,
    incident: 'Family member accident',
    responseTime: '8 minutes'
  },
  {
    id: 4,
    name: 'Sunita Devi',
    role: 'School Teacher',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    content: 'I was driving alone at night when my car skidded. LifeLine detected the accident and sent help before I could even process what happened. Truly life-saving technology.',
    rating: 5,
    incident: 'Night-time single vehicle accident',
    responseTime: '12 minutes'
  },
  {
    id: 5,
    name: 'Inspector Vikram Singh',
    role: 'Traffic Police',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    content: 'LifeLine has transformed how we respond to accidents. We get precise locations, severity estimates, and can coordinate better with hospitals. It\'s made our job more effective.',
    rating: 5,
    incident: 'Law enforcement perspective',
    responseTime: 'Enhanced coordination'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Stories from Real People
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from users, medical professionals, and emergency responders who have experienced 
            the life-saving impact of LifeLine firsthand.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 sm:px-12 sm:py-16">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Profile */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <img
                    className="mx-auto lg:mx-0 h-24 w-24 rounded-full object-cover"
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{currentTestimonial.role}</p>
                    <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mt-3">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <blockquote className="text-xl leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>"{currentTestimonial.content}"</p>
                  </blockquote>
                  
                  {/* Incident details */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <dt className="text-sm font-medium text-gray-500">Incident Type</dt>
                      <dd className="mt-1 text-sm text-gray-900">{currentTestimonial.incident}</dd>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <dt className="text-sm font-medium text-gray-500">Response Time</dt>
                      <dd className="mt-1 text-sm text-gray-900">{currentTestimonial.responseTime}</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-white p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextTestimonial}
                className="rounded-full bg-white p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">4.9/5</div>
            <div className="text-sm text-gray-600">Average user rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">98%</div>
            <div className="text-sm text-gray-600">Would recommend to others</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">1,200+</div>
            <div className="text-sm text-gray-600">Success stories shared</div>
          </div>
        </div>
      </div>
    </div>
  )
}