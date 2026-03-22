"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { PlanVisitSection } from "@/components/sections/plan-visit-section"
import { NewHereSection } from "@/components/sections/new-here-section"
import { DiscoverSection } from "@/components/sections/discover-section"
import { ApostolicSection } from "@/components/sections/apostolic-section"
import { NationsSection } from "@/components/sections/nations-section"
import { ExploreJesusSection } from "@/components/sections/explore-jesus-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PlanVisitSection />
      <NewHereSection />
      <DiscoverSection />
      <ApostolicSection />
      <NationsSection />
      <ExploreJesusSection />
      <ConnectSection />
      <Footer />
    </main>
  )
}
