"use client"

import { EventCard } from "@/components/event-card"
import { BottomNav } from "@/components/bottom-nav"
import { motion } from "framer-motion"

export default function WeddingPage() {
const events = [
  {
    title: "Holud Sondha",
    date: "January 22, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Bagharpara, Jessore",
    mapLink: "https://maps.app.goo.gl/W61Vi61wkFqqsGfZ7",
    image: "https://images.pexels.com/photos/19536439/pexels-photo-19536439.jpeg",
  },
  {
    title: "Marriage",
    date: "January 23, 2026",
    time: "10:00 AM - 11:00 PM (Whole Day)",
    location: "Narail & Bagharpara",
    brideLocation: "https://maps.app.goo.gl/W61Vi61wkFqqsGfZ7",
    groomLocation: "https://goo.gl/maps/W9Z77pDLhY6Br6iB9",
    image: "/images/marriage.jpg",
  },
  {
    title: "Reception",
    date: "January 25, 2026",
    time: "12:00 PM - 3:30 PM",
    location: "Narail",
    mapLink: "https://maps.app.goo.gl/qhjWxAsAGX2ZsupS6",
    image: "/images/reception.jpg",
  },
]


  return (
    <main className="min-h-screen pb-24 px-4 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-2 text-balance">Wedding Events</h1>
        <p className="text-center text-muted-foreground mb-12">Join us in celebrating our special day</p>

        <div className="space-y-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </motion.div>
      <BottomNav activeTab="wedding" />
    </main>
  )
}
