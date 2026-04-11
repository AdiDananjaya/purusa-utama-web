"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const { dict } = useLanguage();

  return (
    <section id="reviews" className="py-24 bg-brand-dark text-white relative">
      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{dict.testimonials.title}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.testimonials.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800/80 p-8 rounded-2xl border border-zinc-700 hover:border-brand-gold transition-colors"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              <h4 className="font-bold text-white">- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
