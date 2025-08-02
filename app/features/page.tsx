import FeaturesHero from '@/components/features/FeaturesHero'
import GPSLocationSharing from '@/components/features/GPSLocationSharing'
import AutomaticCrashDetection from '@/components/features/AutomaticCrashDetection'
import EmergencyServiceIntegration from '@/components/features/EmergencyServiceIntegration'
import FirstAidInstructions from '@/components/features/FirstAidInstructions'
import SOSButton from '@/components/features/SOSButton'
import VolunteerNetwork from '@/components/features/VolunteerNetwork'
import FeatureComparison from '@/components/features/FeatureComparison'

export const metadata = {
  title: 'Features - Smart Accident Detection System | LifeLine',
  description: 'Explore all features of LifeLine including GPS tracking, automatic crash detection, emergency service integration, and volunteer responder network.',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <FeaturesHero />
      <GPSLocationSharing />
      <AutomaticCrashDetection />
      <EmergencyServiceIntegration />
      <FirstAidInstructions />
      <SOSButton />
      <VolunteerNetwork />
      <FeatureComparison />
    </div>
  )
}