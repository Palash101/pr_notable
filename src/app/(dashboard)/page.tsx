"use client";
import Hero from "../../components/Hero";
import TrustedBy from "../../components/TrustedBy";
import StickyStack from "@/components/StickyStack";
import PlatformFeature from "@/components/PlatformFeature";
import Insights from "@/components/Insights";
import Resources from "@/components/Resources";

export default function Dashboard() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <div className="w-full max-w-7xl mx-auto">
        <TrustedBy headingPreview={true} />
      </div>

      {/* Sticky Stack - Use Cases */}
      <StickyStack />

      {/* Platform Feature Section */}
      <PlatformFeature />

      {/* Insights & Stats */}
      <Insights analyticsData={true} />

      <Resources />
    </>
  );
}
