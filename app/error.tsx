'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12">
      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-foreground mb-6">
            Something went wrong
          </h1>
          <p className="text-base md:text-lg text-foreground/60 font-light mb-12">
            We apologize for the inconvenience. Please try again.
          </p>
          <button
            onClick={reset}
            className="inline-block px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-[0.2em] uppercase text-sm font-light"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    </div>
  );
}
