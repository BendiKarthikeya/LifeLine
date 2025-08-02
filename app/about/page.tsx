import AboutHero from '@/components/about/AboutHero'
import VisionMission from '@/components/about/VisionMission'
import TeamSection from '@/components/about/TeamSection'
import Achievements from '@/components/about/Achievements'
import ContactInfo from '@/components/about/ContactInfo'

export const metadata = {
  title: 'About Us - LifeLine Smart Accident Detection | Our Mission',
  description: 'Learn about LifeLine team, our mission to reduce accident-related deaths, and our vision for safer roads in India.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <VisionMission />
      <TeamSection />
      <Achievements />
      <ContactInfo />
    </div>
  )
}