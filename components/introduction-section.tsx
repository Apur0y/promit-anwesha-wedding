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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 shadow-xl border-4">
            <Image height={300} width={400} src="/guti.png" alt="Ahmed - The Groom"  className="" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-[#FF5A58]">Promit Biswas</h2>
          <p className="text-muted-foreground text-center text-sm md:text-base md:text-left leading-relaxed">
            Elder son of Debashish Biswas and Provati Rani Biswas. He is a passionate Lecturer in Computer Science and Engineering, driven by curiosity and a deep passion for researching emerging technologies. He believes in learning, teaching, and innovating with purpose—while finding joy in travel, photography, and meaningful moments with family and friends.
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 shadow-xl border-4">
            <Image src="/anwesha.jpeg" alt="Sarah - The Bride" fill className="object-cover" />
          </div>
          <h2 className="font-serif text-3xl text-center md:text-start md:text-4xl mb-3 text-[#FF5A58] ">Anwesha Mondal Proma</h2>
          <p className="text-muted-foreground text-sm md:text-base text-center md:text-right leading-relaxed">
            Only daughter of Tapon Kumar and Milota Rani Pramanick. She has completed her BSc and MSc from the University of Dhaka and works as an Executive in the English Version at Panjeree Publications. An extroverted, nature-loving individual, she enjoys traveling and embraces life with energy, warmth, and curiosity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
