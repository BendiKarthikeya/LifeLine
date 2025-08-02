import DemoHero from '@/components/demo/DemoHero'
import AccidentSimulation from '@/components/demo/AccidentSimulation'
import InteractiveTimeline from '@/components/demo/InteractiveTimeline'
import LiveDemo from '@/components/demo/LiveDemo'

export const metadata = {
  title: 'Demo - How Alerts Are Triggered | LifeLine',
  description: 'Interactive demonstration of how LifeLine detects accidents and triggers emergency alerts in real-time.',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <DemoHero />
      <AccidentSimulation />
      <InteractiveTimeline />
      <LiveDemo />
    </div>
  )
}