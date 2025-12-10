'use client';

import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 right-0 z-50 p-8 md:p-12"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex flex-col items-end gap-6 text-sm tracking-[0.2em] uppercase">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-foreground/60 hover:text-foreground transition-colors duration-300 font-light relative group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <span className="relative">
              {item.label}
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
