"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

interface EventCardProps {
  event: {
    title: string
    date: string
    time: string
    location: string
  }
  index: number
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-serif text-2xl md:text-3xl mb-6 text-[#FF5A58]">{event.title}</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-5 h-5 text-[#FF5A58]" />
            <span className="text-foreground">{event.date}</span>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-[#FF5A58]" />
            <span className="text-foreground">{event.time}</span>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-[#FF5A58]" />
            <span className="text-foreground">{event.location}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
