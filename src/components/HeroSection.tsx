"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/video/video_hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-20 max-w-5xl mx-auto w-full">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-white text-sm font-semibold tracking-widest uppercase shadow-sm">
            Racikan Cianjur
          </span>
        </motion.div>

        {/* Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8 relative"
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-black/50 bg-white flex items-center justify-center">
            <Image
              src="/images/soul_coffee_logo.jpeg"
              alt="SOUL COFFEE Logo"
              width={208}
              height={208}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-125 -z-10" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          One Liter Of
          <br />
          <span className="text-blue-300">Soulful</span>
          <br />
          Coffee
        </motion.h1>

        {/* Italic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base md:text-lg text-gray-300 mb-10 italic drop-shadow-md"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          &ldquo;Segelas kopi untuk menenangkan jiwa&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#blends"
            id="hero-order-now"
            className="group flex items-center gap-2 px-8 py-4 bg-soul-blue text-white font-bold text-base rounded-full shadow-xl shadow-black/30 hover:bg-soul-blue-dark hover:-translate-y-1 transition-all duration-300"
          >
            Pesan Sekarang
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#story"
            id="hero-our-story"
            className="px-8 py-4 border-2 border-white/50 text-white font-semibold text-base rounded-full hover:bg-white hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-300"
          >
            Cerita Kami
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/70 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
