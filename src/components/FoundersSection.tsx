"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Raka Putra",
    role: "Owner & Barista",
    imageSrc: "/images/owner_cowo.jpeg",
    initials: "RP",
    bio: "Sebagai pencinta kopi sejati dan barista berpengalaman, Raka mendedikasikan dirinya untuk mengeksplorasi biji kopi lokal dan menyeduh secangkir kopi yang sempurna untuk setiap pelanggan.",
  },
  {
    name: "Syavina Aprilia",
    role: "Owner & Creative Director",
    imageSrc: "/images/owner_cewe.jpeg",
    initials: "SA",
    bio: "Otak kreatif di balik identitas visual Soul Coffee. Syavina merangkai cerita dan estetika desain yang menghubungkan setiap tegukan kopi dengan pengalaman yang berkesan.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="py-24 lg:py-32 bg-white px-6"
      aria-labelledby="founders-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-soul-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Tim Kami
          </p>
          <h2
            id="founders-heading"
            className="text-4xl md:text-5xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Jiwa di Balik <span className="text-soul-blue">Secangkir Kopi</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-soul-blue rounded-full" />
        </motion.div>

        {/* Founders grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={cardVariants}
              className="flex flex-col items-center text-center group max-w-xs w-full"
            >
              {/* Avatar with double border */}
              <div className="relative mb-6">
                {/* Outer ring */}
                <div className="w-48 h-48 rounded-full border-4 border-soul-blue/20 p-1.5">
                  {/* Inner ring */}
                  <div className="w-full h-full rounded-full border-2 border-soul-blue/40 overflow-hidden bg-soul-lavender group-hover:border-soul-blue transition-colors duration-300">
                    {founder.imageSrc ? (
                      <Image
                        src={founder.imageSrc}
                        alt={`${founder.name}, ${founder.role}`}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Fallback SVG avatar */
                      <div className="w-full h-full bg-gradient-to-br from-soul-blue/20 to-soul-blue/40 flex items-center justify-center">
                        <span
                          className="text-soul-blue text-5xl font-black"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {founder.initials}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-soul-blue/10 blur-xl scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3
                className="text-2xl font-bold text-gray-900 mb-1"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {founder.name}
              </h3>
              <p className="text-soul-blue text-sm font-semibold tracking-wide mb-3">
                {founder.role}
              </p>
              <p
                className="text-gray-500 text-sm leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
