import Hero from '@/components/home/Hero'
import ProblemStatement from '@/components/home/ProblemStatement'
import SolutionOverview from '@/components/home/SolutionOverview'
import KeyBenefits from '@/components/home/KeyBenefits'
import Statistics from '@/components/home/Statistics'
import Testimonials from '@/components/home/Testimonials'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <KeyBenefits />
      <Statistics />
      <Testimonials />
      <CallToAction />
    </div>
  )
}