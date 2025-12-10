'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12">
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-8">
            EM Architecture
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-base md:text-lg tracking-[0.3em] uppercase text-foreground/70 font-light">
            Architect
          </p>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-foreground/50 font-light">
            Brasschaat · Antwerp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <div className="w-24 h-px bg-foreground/20 mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
