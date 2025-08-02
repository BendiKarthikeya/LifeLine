import LoginForm from '@/components/auth/LoginForm'

export const metadata = {
  title: 'Login - LifeLine Smart Accident Detection',
  description: 'Login to your LifeLine account to access emergency features and dashboard.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <LoginForm />
    </div>
  )
}