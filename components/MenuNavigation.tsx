'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 right-0 z-50 p-6 md:p-12 hidden md:block"
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

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center p-6">
          {/* Logo/Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-lg tracking-tight text-foreground"
          >
            EM
          </motion.div>

          {/* Menu Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-px bg-foreground transition-all duration-300"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 6 : 0,
                width: mobileMenuOpen ? 24 : 20,
              }}
            />
            <motion.span
              className="w-6 h-px bg-foreground transition-all duration-300"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="w-6 h-px bg-foreground transition-all duration-300"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -6 : 0,
                width: mobileMenuOpen ? 24 : 20,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-background/98 backdrop-blur-sm z-40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-2xl tracking-[0.2em] uppercase font-light transition-colors duration-300 ${
                      activeSection === item.id ? 'text-foreground' : 'text-foreground/40'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="relative">
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute -bottom-2 left-0 right-0 h-px bg-accent"
                          layoutId="mobile-active-indicator"
                        />
                      )}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
