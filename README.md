# LifeLine - Smart Accident Detection & Emergency Care Website

**"Detect Accidents Instantly. Save Lives Effortlessly"**

A comprehensive Next.js website for the Smart Accident Detection & Emergency Care system that showcases the product, provides user registration/dashboard functionality, and demonstrates real-time emergency response capabilities.

## 🚀 Features

- **Landing Page**: Hero section with compelling value proposition
- **Features Page**: Detailed explanation of all app capabilities
- **Demo Page**: Interactive demonstration of alert system
- **Bluetooth Integration**: Technical integration information
- **About Us**: Team and company information
- **Contact**: Multiple communication channels
- **User Authentication**: Firebase Auth integration
- **Live Chat**: Real-time customer support
- **Responsive Design**: Mobile-first approach
- **Firebase Integration**: Real-time database and authentication

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication, Realtime Database)
- **Maps**: Google Maps API
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project
- Google Maps API key

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd smart-accident-detection-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase and Google Maps credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your actual values:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### 4. Set up Firebase

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Create a Firestore database
4. Enable Realtime Database
5. Set up the following Firestore collections:

```
users/
  - profile_info
  - medical_info
  - emergency_contacts

alerts/
  - alert_logs
  - response_times

hospitals/
  - location_data
  - contact_info

chat_messages/
```

### 5. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Maps JavaScript API
4. Create credentials (API Key)
5. Restrict the API key to your domain

### 6. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── features/          # Features page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── chat/             # Chat components
│   ├── features/         # Feature-specific components
│   ├── home/             # Home page components
│   └── layout/           # Layout components
├── lib/                  # Utility libraries
│   └── firebase.ts       # Firebase configuration
├── public/               # Static assets
└── README.md
```

## 🎨 Design System

The website uses a minimal and simple light color scheme:

- **Primary**: Red tones (#ef4444, #dc2626, #b91c1c)
- **Secondary**: Gray tones (#64748b, #475569, #334155)
- **Accent**: Blue tones (#3b82f6, #2563eb, #1d4ed8)
- **Background**: Light colors with subtle gradients

## 📱 Pages Overview

### Home Page (`/`)

- Hero section with main value proposition
- Problem statement with statistics
- Solution overview with interactive features
- Key benefits showcase
- Live statistics dashboard
- User testimonials
- Call-to-action section

### Features Page (`/features`)

- GPS Location Sharing
- Automatic Crash Detection
- Emergency Service Integration
- First Aid Instructions
- SOS Button functionality
- Volunteer Responder Network
- Feature comparison table

### Additional Pages (To be implemented)

- Demo page with interactive simulation
- Bluetooth connectivity information
- About us with team information
- Contact page with multiple channels
- User authentication (login/signup)
- User dashboard
- FAQ section
- Privacy policy and terms

## 🔧 Development

### Adding New Components

1. Create component in appropriate directory under `components/`
2. Use TypeScript for type safety
3. Follow the existing design patterns
4. Add proper accessibility attributes
5. Ensure mobile responsiveness

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use the defined color palette
- Maintain consistent spacing and typography
- Add hover and focus states for interactive elements

### Firebase Integration

- Use the configured Firebase services from `lib/firebase.ts`
- Implement proper error handling
- Add loading states for async operations
- Follow Firebase security rules best practices

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 📊 Performance Optimization

- Images are optimized using Next.js Image component
- Components are lazy-loaded where appropriate
- Bundle size is minimized with tree shaking
- Critical CSS is inlined
- Static generation is used where possible

## 🔒 Security

- Environment variables are properly configured
- Firebase security rules should be implemented
- Input validation on all forms
- XSS protection through React's built-in sanitization
- HTTPS enforced in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@lifelineapp.com or join our Slack channel.

---

**Note**: This is a comprehensive website for the Smart Accident Detection & Emergency Care system. Make sure to configure all environment variables and Firebase settings before running in production.
