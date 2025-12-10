'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12 py-20 md:py-0">
      <div className="relative z-10 max-w-4xl text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 md:mb-12">
            Portfolio
          </h2>

          <motion.div
            className="border border-foreground/10 p-8 sm:p-12 md:p-16 lg:p-24"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl font-light text-foreground/60 leading-relaxed">
              We're currently working on some exceptional projects.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              More information and images coming soon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
