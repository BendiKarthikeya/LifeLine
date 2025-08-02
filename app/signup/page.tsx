import SignupForm from '@/components/auth/SignupForm'

export const metadata = {
  title: 'Sign Up - LifeLine Smart Accident Detection',
  description: 'Create your LifeLine account to start protecting yourself and your family.',
}

export default function SignupPage() {
  return (
    <div className="min-h-screen">
      <SignupForm />
    </div>
  )
}