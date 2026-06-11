"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#founders", label: "Owner" },
  { href: "#story", label: "Tentang" },
  { href: "#blends", label: "Produk" },
  { href: "#locations", label: "Kontak" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [waLink, setWaLink] = useState("https://api.whatsapp.com/send?phone=6281224251104&text=Halo%20Soul%20Coffee!");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
        const res = await fetch(`${API_URL}/api/settings`);
        if (res.ok) {
          const data = await res.json();
          if (data.whatsapp_number) {
            setWaLink(`https://api.whatsapp.com/send?phone=${data.whatsapp_number}&text=Halo%20Soul%20Coffee!`);
          }
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    let idleTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsIdle(false);
      
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        if (window.scrollY > 20) {
          setIsIdle(true);
        }
      }, 2500); // 2.5 seconds of idle time
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50 flex justify-center pointer-events-none">
        <nav 
          onMouseEnter={() => setIsIdle(false)}
          className={`pointer-events-auto w-full max-w-6xl h-[72px] sm:h-20 rounded-3xl sm:rounded-full flex items-center justify-between px-4 lg:px-6 transition-all duration-500 ${
            !isScrolled 
              ? "bg-transparent border border-transparent shadow-none"
              : isIdle
                ? "bg-soul-blue/30 backdrop-blur-md shadow-lg shadow-soul-blue/5 border border-white/5"
                : "bg-soul-blue/95 backdrop-blur-md shadow-xl shadow-soul-blue/20 border border-white/10"
          }`}
        >
          
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Soul Coffee Home">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 bg-white shadow-md transition-colors duration-300 flex-shrink-0 ${isScrolled ? 'border-white/20' : 'border-white/50'}`}>
              <Image 
                src="/images/soul_coffee_logo.jpeg" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-black text-base sm:text-lg tracking-wider leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                SOUL COFFEE
              </span>
              <span className="text-blue-200 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase leading-tight">
                Premium Roastery
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-white/90 hover:text-blue-300 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-bold rounded-full hover:brightness-110 transition-all duration-300 shadow-md shadow-black/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 left-4 right-4 z-40 md:hidden bg-soul-blue/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/90 font-medium py-2 hover:text-blue-300 transition-colors text-center text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] text-white font-bold rounded-full hover:brightness-110 transition-colors text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
