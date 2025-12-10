'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArchitecturalGrid from '@/components/ArchitecturalGrid';
import MenuNavigation from '@/components/MenuNavigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero key="home" />;
      case 'about':
        return <About key="about" />;
      case 'portfolio':
        return <Portfolio key="portfolio" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Hero key="home" />;
    }
  };

  return (
    <>
      <MenuNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
