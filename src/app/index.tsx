import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Navigation from '../components/Navigation'
import StickyStack from '../components/StickyStack'
import PlatformFeature from '../components/PlatformFeature'
import Resources from '../components/Resources'
import Insights from '../components/Insights'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
        <TrustedBy />

      {/* Sticky Stack - Use Cases */}
        <StickyStack />

      {/* Platform Feature Section */}
        <PlatformFeature />

      {/* Insights & Stats */}
        {/* <Insights /> */}

      {/* Resources Section */}
        {/* <Resources /> */}
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
