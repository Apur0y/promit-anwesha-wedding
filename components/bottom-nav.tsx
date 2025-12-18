"use client"

import { motion } from "framer-motion"
import { Home, Heart, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BottomNavProps {
  activeTab: "home" | "wedding" | "contact"
}

export function BottomNav({ activeTab }: BottomNavProps) {
  const pathname = usePathname()

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "wedding", label: "Wedding", icon: Heart, href: "/wedding" },
    { id: "contact", label: "Contact", icon: Phone, href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-md z-50"
    >
      <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-2xl border px-2 py-3">
        <div className="flex items-center justify-around gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-colors hover:bg-muted/50"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FF5A58]/10 rounded-xl"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <Icon
                  className={`w-6 h-6 relative z-10 transition-colors ${
                    isActive ? "text-[#FF5A58]" : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`text-xs font-medium relative z-10 transition-colors ${
                    isActive ? "text-[#FF5A58]" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
