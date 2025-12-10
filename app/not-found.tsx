'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12">
      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif font-light text-6xl md:text-8xl tracking-tight text-foreground mb-6">
            404
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light mb-8">
            Page not found
          </p>
          <p className="text-base md:text-lg text-foreground/60 font-light mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-[0.2em] uppercase text-sm font-light"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
