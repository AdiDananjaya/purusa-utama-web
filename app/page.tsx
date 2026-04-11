"use client";

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar').then(mod => mod.default), { ssr: false });
const Hero = dynamic(() => import('./components/Hero').then(mod => mod.default), { ssr: false });
const Services = dynamic(() => import('./components/Services').then(mod => mod.default), { ssr: false });
const Gallery = dynamic(() => import('./components/Gallery').then(mod => mod.default), { ssr: false });
const Testimonials = dynamic(() => import('./components/Testimonials').then(mod => mod.default), { ssr: false });
const Footer = dynamic(() => import('./components/Footer').then(mod => mod.default), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
