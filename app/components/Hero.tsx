"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark">
      {/* Background Image (Placeholder) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-playfair text-5xl md:text-7xl font-bold max-w-4xl leading-tight mb-6"
        >
          {dict.hero.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl font-light max-w-2xl text-gray-200 mb-10"
        >
          {dict.hero.subheadline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a 
            href="#contact"
            className="bg-brand-gold text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-yellow-600 transition shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            {dict.hero.cta}
          </a>
          <a 
            href="https://purusa-pos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-dark px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-lg border border-transparent flex items-center justify-center text-center"
          >
            {dict.hero.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
