'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12 py-20 md:py-0">
      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 md:mb-12">
            About
          </h2>

          <div className="space-y-6 md:space-y-8 text-foreground/70 leading-relaxed">
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              EM Architecture is a high-end architectural design studio based in Brasschaat and Antwerp,
              dedicated to creating exceptional spaces that balance timeless sophistication with contemporary vision.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With a meticulous attention to detail and a deep understanding of materiality, light, and form,
              we craft architectural solutions that are both beautiful and enduring.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
