"use client";

import { motion } from "framer-motion";
import { Coffee, MessageSquare, Mail } from "lucide-react";

// Instagram icon — removed from lucide-react v0.511, using inline SVG
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#founders", label: "Owner" },
  { href: "#story", label: "Tentang" },
  { href: "#blends", label: "Produk" },
  { href: "#locations", label: "Kontak" },
];

const WA_URL = "https://api.whatsapp.com/send?phone=6281224251104&fbclid=PAb21jcAR4w-NleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAae64Qm8EC0E0neY0zLwxwnrDKwNTaXjopH97dQ8Uhf7aijObOl41Rd4bqLUWA_aem_WomppjmZkSe0vLd1bF5q8g&utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const IG_URL = "https://www.instagram.com/soulco.id?igsh=OTYzNXgzenBncW5t";

const supportLinks = [
  { href: "mailto:hello@soulcoffee.id", label: "hello@soulcoffee.id" },
  { href: WA_URL, label: "WhatsApp Business" },
];

const socials = [
  {
    href: IG_URL,
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: WA_URL,
    icon: MessageSquare,
    label: "WhatsApp",
  },
  { href: "mailto:hello@soulcoffee.id", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="bg-gray-950 text-white pt-16 pb-8 px-6"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-soul-blue flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                SOUL <span className="font-light">COFFEE</span>
              </span>
            </div>
            <p
              className="text-gray-400 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <em>
                Kopi cold brew premium, diracik di jantung Indonesia. 
                Dari kebun hingga ke botol — setiap tegukan memiliki cerita.
              </em>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-soul-blue hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
              Menu Utama
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Soul Coffee. All rights reserved.
          </p>
          <p
            className="text-gray-600 text-xs italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Diramu dengan ☕ di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
