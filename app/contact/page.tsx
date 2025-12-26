"use client"

import { BottomNav } from "@/components/bottom-nav"
import { ContactCard } from "@/components/contact-card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactPage() {
const contacts = [
  {
    name: "Debashish Biswas",
    relationship: "Groom's Father",
    mobile: "+880 1867-189172",
  },
  {
    name: "Provati Rani Biswas",
    relationship: "Groom's Mother",
    mobile: "+880 1916-673646",
  },
  {
    name: "Diganta Biswas",
    relationship: "Groom's Brother",
    mobile: "+880 1861-477332",
  },
  {
    name: "Tapon Kumar",
    relationship: "Bride's Father",
    mobile: "+880 1716-464250",
  },
  {
    name: "Milota Rani Pramanick",
    relationship: "Bride's Mother",
    mobile: "+880 1919-462055",
  },
];


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

      <div className="flex justify-center items-center m-20 ">
           <Image height={500} width={500} src="/me.jpg" alt="Ahmed - The Groom"  className="object-cover" />

      </div>


    </main>
  )
}
