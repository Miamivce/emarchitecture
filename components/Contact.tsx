'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12">
      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-foreground mb-16 text-center">
            Contact
          </h2>

          <div className="space-y-12">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-foreground/50 font-light">
                Email
              </p>
              <a
                href="mailto:info@emarchitecture.be"
                className="block text-lg md:text-xl text-foreground/80 hover:text-accent transition-colors duration-300"
              >
                info@emarchitecture.be
              </a>
            </motion.div>

            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-foreground/50 font-light">
                Location
              </p>
              <p className="text-lg md:text-xl text-foreground/80 font-light">
                Brasschaat · Antwerp
                <br />
                Belgium
              </p>
            </motion.div>

            <motion.div
              className="pt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-24 h-px bg-foreground/20 mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
