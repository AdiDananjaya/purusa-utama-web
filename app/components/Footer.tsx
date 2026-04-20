"use client";

import { useLanguage } from "../context/LanguageContext";
import { ShoppingCart } from "lucide-react";

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-dark border-t border-zinc-800 pt-16 pb-8 text-white relative">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="font-playfair text-3xl font-bold mb-8">PURUSA UTAMA</h2>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a 
            href="https://wa.me/6285933809333" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-[#1ebe57] transition-colors shadow-lg flex items-center justify-center space-x-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z" />
            </svg>
            <span>{dict.footer.cta}</span>
          </a>
          
          <a 
            href="https://pos.purusautama.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-yellow-600 transition-colors shadow-lg flex items-center justify-center space-x-3"
          >
            <ShoppingCart className="w-6 h-6" />
            <span>{dict.footer.cta2}</span>
          </a>
        </div>

        <div className="w-full max-w-4xl mb-8 rounded-xl overflow-hidden shadow-2xl border border-zinc-700 bg-zinc-800">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.805228222723!2d114.93903067594512!3d-8.2223328825284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd183d3dbaec55f%3A0x880e89fcf16f550e!2sPurusa%20Utama%20Dekorasi%20%26%20Tenda%20Pernikahan!5e0!3m2!1sen!2sid!4v1775872768504!5m2!1sen!2sid" 
            className="w-full h-64 md:h-96" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-gray-400 mb-12">
          <p>{dict.footer.address}</p>
        </div>

        <div className="border-t border-zinc-800 w-full pt-8 flex justify-center">
          <p className="text-sm text-gray-500">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
