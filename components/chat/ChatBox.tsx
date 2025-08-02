'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  UserIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
}

const quickResponses = [
  'How does accident detection work?',
  'What happens during an emergency?',
  'How do I install the app?',
  'Is my data secure?',
  'How much does it cost?',
  'Which vehicles are supported?'
]

const agentResponses: { [key: string]: string } = {
  'How does accident detection work?': 'Our AI-powered system uses IoT sensors to detect sudden impacts, rollovers, and rapid deceleration. When an accident is detected, the system automatically sends your GPS location to emergency services within 2 seconds.',
  'What happens during an emergency?': 'When an accident is detected: 1) Your location is sent to 112 India, 2) Emergency contacts are notified, 3) Nearby hospitals are alerted, 4) Volunteer responders in your area are contacted, 5) You receive first-aid instructions if conscious.',
  'How do I install the app?': 'Download LifeLine from Google Play Store or Apple App Store. After installation, complete the setup by adding emergency contacts, medical information, and pairing with your vehicle sensors (if available).',
  'Is my data secure?': 'Yes! We use end-to-end encryption for all data transmission. Your location is only shared during emergencies, and all personal information is stored securely following Indian data protection regulations.',
  'How much does it cost?': 'LifeLine is completely FREE for basic accident detection and emergency alerts. Premium features like advanced analytics and family tracking are available for ₹99/month.',
  'Which vehicles are supported?': 'LifeLine works with all vehicles through smartphone sensors. For enhanced accuracy, we support Bluetooth sensors for cars, motorcycles, trucks, and buses manufactured after 2015.'
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with any questions about LifeLine. How can I assist you today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      const response = agentResponses[text] || 
        "Thank you for your question! For immediate assistance, please call our 24/7 helpline at +91-XXXX-XXXXX or email support@lifelineapp.com. Our team will get back to you within 2 hours."

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputText)
  }

  const handleQuickResponse = (response: string) => {
    sendMessage(response)
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-primary-600 hover:bg-primary-700 emergency-pulse'
        }`}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <ComputerDesktopIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">LifeLine Support</h3>
                  <p className="text-primary-100 text-sm">Usually responds in minutes</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span className="text-primary-100 text-xs">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-primary-100' 
                      : 'bg-gray-100'
                  }`}>
                    {message.sender === 'user' ? (
                      <UserIcon className="h-5 w-5 text-primary-600" />
                    ) : (
                      <ComputerDesktopIcon className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-xs">
                  <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <ComputerDesktopIcon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick responses */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.slice(0, 3).map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-100 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors duration-200"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}