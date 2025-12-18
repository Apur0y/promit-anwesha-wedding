"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function IntroductionSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 shadow-xl">
            <Image src="/handsome-groom-formal-portrait-wedding-suit.jpg" alt="Ahmed - The Groom" fill className="object-cover" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#FF5A58]">Promit Biswas</h2>
          <p className="text-muted-foreground text-center md:text-left leading-relaxed">
            Son of Debashish Biswas and Provati Rani Biswas. A software engineer with a passion for technology and innovation. Promit
            loves traveling, photography, and spending quality time with family and friends.
          </p>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 shadow-xl">
            <Image src="/beautiful-bride-portrait-elegant-wedding-dress.jpg" alt="Sarah - The Bride" fill className="object-cover" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#FF5A58]">Anwesha Mondal Proma </h2>
          <p className="text-muted-foreground text-center md:text-right leading-relaxed">
            Daughter of her Father and Mother. A talented botanist who brings creativity and elegance to every project.
            Anwesha enjoys reading, painting, and creating beautiful spaces for people to live and love.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
