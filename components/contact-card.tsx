"use client"

import { motion } from "framer-motion"
import { Phone, User } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ContactCardProps {
  contact: {
    name: string
    relationship: string
    mobile: string
  }
  index: number
}

export function ContactCard({ contact, index }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#FF5A58]/10 flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-[#FF5A58]" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-1">{contact.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{contact.relationship}</p>
            <a
              href={`tel:${contact.mobile.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[#FF5A58] hover:underline group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{contact.mobile}</span>
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
