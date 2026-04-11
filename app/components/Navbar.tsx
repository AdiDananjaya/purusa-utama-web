"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, toggleLanguage, dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#reviews", label: dict.nav.reviews },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-playfair text-2xl font-bold tracking-wide transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-white drop-shadow-md'}`}>
          PURUSA UTAMA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm tracking-widest uppercase hover:text-brand-gold transition-colors duration-200 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              {link.label}
            </a>
          ))}

          {/* Actions */}
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-400">
            <button onClick={toggleLanguage} className={`text-sm font-semibold uppercase hover:text-brand-gold transition px-2 py-1 border rounded ${scrolled ? 'text-brand-dark border-brand-dark hover:border-brand-gold' : 'text-white border-white hover:border-brand-gold drop-shadow-sm'}`}>
              {language === "id" ? "ID" : "EN"}
            </button>
            <a href="#contact" className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition shadow-lg">
              {dict.nav.contact}
            </a>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button className={`md:hidden p-2 rounded-md ${scrolled ? 'text-brand-dark' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-6"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-brand-dark text-lg font-medium hover:text-brand-gold transition">
                {link.label}
              </a>
            ))}
            <button onClick={toggleLanguage} className="text-brand-dark text-lg font-bold border-2 border-brand-dark px-4 py-1 rounded">
              {language === "id" ? "Switch to English" : "Ganti ke Indonesia"}
            </button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-gold text-white px-8 py-3 rounded-full text-lg font-medium shadow-md">
              {dict.nav.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
