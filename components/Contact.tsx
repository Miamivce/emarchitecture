'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-12 overflow-y-auto py-20 md:py-12">
      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6 md:mb-8 text-center">
            Contact
          </h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 md:space-y-6 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/50 font-light mb-2 sm:mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-foreground/10 text-foreground text-sm sm:text-base placeholder-foreground/30 focus:outline-none focus:border-accent transition-colors duration-300 font-light"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/50 font-light mb-2 sm:mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-foreground/10 text-foreground text-sm sm:text-base placeholder-foreground/30 focus:outline-none focus:border-accent transition-colors duration-300 font-light"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/50 font-light mb-2 sm:mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-foreground/10 text-foreground text-sm sm:text-base placeholder-foreground/30 focus:outline-none focus:border-accent transition-colors duration-300 resize-none font-light"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm font-light disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-accent"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600"
                >
                  {errorMessage}
                </motion.p>
              )}
            </div>
          </motion.form>

          <div className="space-y-6 md:space-y-8">
            <motion.div
              className="text-center space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/50 font-light">
                Email
              </p>
              <a
                href="mailto:info@em-architecture.com"
                className="block text-sm sm:text-base text-foreground/80 hover:text-accent transition-colors duration-300 active:text-accent"
              >
                info@em-architecture.com
              </a>
            </motion.div>

            <motion.div
              className="text-center space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/50 font-light">
                Location
              </p>
              <p className="text-sm sm:text-base text-foreground/80 font-light">
                Brasschaat · Antwerp
                <br />
                Belgium
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
