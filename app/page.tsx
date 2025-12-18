"use client"

import { HeroBanner } from "@/components/hero-banner"
import { IntroductionSection } from "@/components/introduction-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { BottomNav } from "@/components/bottom-nav"
import { useEffect } from "react"
import {launchConfetti} from "@/lib/confetti"

export default function HomePage() {

    useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <main className="min-h-screen pb-24">
      <HeroBanner />
      <IntroductionSection />
      <CountdownTimer />
      <BottomNav activeTab="home" />
      
    </main>
  )
}
