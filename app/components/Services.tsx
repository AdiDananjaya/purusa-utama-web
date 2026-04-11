"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Tent, Airplay, Briefcase, Lightbulb } from "lucide-react";

export default function Services() {
  const { dict } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case "vip-tents": return <Tent size={40} className="text-brand-gold" />;
      case "standard-tents": return <Airplay size={40} className="text-brand-gold" />;
      case "furniture": return <Briefcase size={40} className="text-brand-gold" />;
      case "lighting-ac": return <Lightbulb size={40} className="text-brand-gold" />;
      default: return <Tent size={40} className="text-brand-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-dark mb-4">{dict.services.title}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.services.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-brand-gray group"
            >
              <div className="mb-6 p-4 bg-brand-gray inline-block rounded-xl group-hover:bg-yellow-50 transition-colors">
                {getIcon(item.id)}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
