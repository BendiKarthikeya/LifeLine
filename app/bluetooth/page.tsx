import BluetoothHero from '@/components/bluetooth/BluetoothHero'
import HowItWorks from '@/components/bluetooth/HowItWorks'
import SensorSpecs from '@/components/bluetooth/SensorSpecs'
import InstallationGuide from '@/components/bluetooth/InstallationGuide'
import Compatibility from '@/components/bluetooth/Compatibility'

export const metadata = {
  title: 'Bluetooth Connectivity - Vehicle Sensor Integration | LifeLine',
  description: 'Learn how LifeLine integrates with vehicle sensors via Bluetooth for enhanced accident detection accuracy.',
}

export default function BluetoothPage() {
  return (
    <div className="min-h-screen">
      <BluetoothHero />
      <HowItWorks />
      <SensorSpecs />
      <InstallationGuide />
      <Compatibility />
    </div>
  )
}