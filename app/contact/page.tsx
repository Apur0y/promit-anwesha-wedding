"use client"

import { BottomNav } from "@/components/bottom-nav"
import { ContactCard } from "@/components/contact-card"
import { motion } from "framer-motion"

export default function ContactPage() {
  const contacts = [
    {
      name: "Father",
      relationship: "Groom's Father",
      mobile: "+880 1712-345678",
    },
    {
      name: "Mother",
      relationship: "Bride's Mother",
      mobile: "+880 1812-345678",
    },
    {
      name: "Brother",
      relationship: "Groom's Brother",
      mobile: "+880 1912-345678",
    },
    {
      name: "Brother",
      relationship: "Bride's Brother",
      mobile: "+880 1612-345678",
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
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-2 text-balance">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12">Feel free to reach out for any questions</p>

        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>
      </motion.div>
      <BottomNav activeTab="contact" />
    </main>
  )
}
