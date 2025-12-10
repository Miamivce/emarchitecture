'use client';

import { useState } from 'react';
import MenuNavigation from '@/components/MenuNavigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <MenuNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative z-10">
        {/* All sections rendered in DOM for SEO - visibility controlled by CSS */}
        <section
          id="home"
          className={`transition-opacity duration-500 ${
            activeSection === 'home' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
          aria-hidden={activeSection !== 'home'}
        >
          <Hero />
        </section>

        <section
          id="about"
          className={`transition-opacity duration-500 ${
            activeSection === 'about' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
          aria-hidden={activeSection !== 'about'}
        >
          <About />
        </section>

        <section
          id="portfolio"
          className={`transition-opacity duration-500 ${
            activeSection === 'portfolio' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
          aria-hidden={activeSection !== 'portfolio'}
        >
          <Portfolio />
        </section>

        <section
          id="contact"
          className={`transition-opacity duration-500 ${
            activeSection === 'contact' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
          aria-hidden={activeSection !== 'contact'}
        >
          <Contact />
        </section>
      </main>
    </>
  );
}
