"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface EventCardProps {
  event: {
    title: string
    date: string
    time: string
    location: string
    image: string
    mapLink?: string
    brideLocation?: string
    groomLocation?: string
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
      <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        
        {/* Image Section */}
        <div className="relative w-full h-44 sm:h-56">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <h3 className="absolute bottom-4 left-4 font-serif text-2xl text-white">
            {event.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#FF5A58]" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#FF5A58]" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#FF5A58]" />
            <span>{event.location}</span>
          </div>

          {/* Maps */}
          {event.mapLink && (
            <a
              href={event.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#FF5A58] font-medium"
            >
              View on Map <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {(event.brideLocation || event.groomLocation) && (
            <div className="space-y-2">
              {event.brideLocation && (
                <a
                  href={event.brideLocation}
                  target="_blank"
                  className="block text-sm text-[#FF5A58]"
                >
                  Bride’s Location →
                </a>
              )}

              {event.groomLocation && (
                <a
                  href={event.groomLocation}
                  target="_blank"
                  className="block text-sm text-[#FF5A58]"
                >
                  Groom’s Location →
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
