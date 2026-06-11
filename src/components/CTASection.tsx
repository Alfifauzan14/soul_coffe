"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// Instagram icon — removed from lucide-react v0.511
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function CTASection() {
  const [waNumber, setWaNumber] = useState("6281224251104");
  const [igLink, setIgLink] = useState("https://www.instagram.com/soulco.id");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/settings`);
        if (res.ok) {
          const data = await res.json();
          if (data.whatsapp_number) setWaNumber(data.whatsapp_number);
          if (data.instagram_link) setIgLink(data.instagram_link);
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      }
    };
    fetchSettings();
  }, []);

  const waLink = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(
    "Halo Soul Coffee! Saya ingin mengetahui lebih lanjut tentang produk Anda"
  )}`;

  return (
    <section
      id="locations"
      className="py-24 lg:py-32 px-6 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-soul-gradient" />

      {/* Background decorative blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-48 h-48 rounded-full bg-purple-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
            Tetap Terhubung
          </span>
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Mari Terhubung{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Bersama Kami
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <em>
            Ikuti perjalanan kami, temukan racikan baru, dan bergabunglah dengan komunitas pencinta kopi sejati.
          </em>
        </motion.p>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Instagram */}
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-instagram"
            aria-label="Follow Soul Coffee on Instagram"
            className="group flex items-center gap-3 px-8 py-4 glass text-white font-bold text-base rounded-2xl hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 min-w-[240px] justify-center border border-white/30"
          >
            <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            @soulco.id
          </a>

          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp"
            aria-label="Chat with Soul Coffee on WhatsApp"
            className="group flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-bold text-base rounded-2xl hover:brightness-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 min-w-[240px] justify-center"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Hubungi Kami
          </a>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-16 mx-auto w-24 h-px bg-white/20"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-white/40 text-sm tracking-wider uppercase"
        >
          Cianjur dan Sekitarnya
        </motion.p>
      </div>
    </section>
  );
}
