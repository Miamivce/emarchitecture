'use client';

import { motion } from 'framer-motion';

interface MenuNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function MenuNavigation({ activeSection, onSectionChange }: MenuNavigationProps) {
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
            onClick={() => onSectionChange(item.id)}
            className={`transition-colors duration-300 font-light relative group ${
              activeSection === item.id ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <span className="relative">
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent"
                  layoutId="active-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
