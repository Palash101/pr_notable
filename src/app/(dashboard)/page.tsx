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
      <TrustedBy />

      {/* Sticky Stack - Use Cases */}
      <StickyStack />

      {/* Platform Feature Section */}
      <PlatformFeature />

      {/* Insights & Stats */}
      <Insights />

      <Resources />
    </>
  );
}
