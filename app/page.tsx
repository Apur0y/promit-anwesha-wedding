"use client"

import { HeroBanner } from "@/components/hero-banner"
import { IntroductionSection } from "@/components/introduction-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  return (
    <main className="min-h-screen pb-24">
      <HeroBanner />
      <IntroductionSection />
      <CountdownTimer />
      <BottomNav activeTab="home" />
    </main>
  )
}
