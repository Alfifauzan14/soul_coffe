"use client";

import { motion } from "framer-motion";


export default function StorySection() {
  return (
    <section
      id="story"
      className="py-24 lg:py-32 px-6 overflow-hidden bg-[#faf9f6]"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Tall Image */}
            <div className="relative h-[600px] w-full max-w-[450px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-soul-blue/10">
              <img
                src="/images/image.png"
                alt="Soul Coffee Ambience"
                className="w-full h-full object-cover"
              />
              {/* Glassmorphism Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl">
                <h4 className="text-white font-bold flex items-center gap-2 mb-1">
                  Dibuat dengan Passion
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Menyajikan cita rasa kopi berkualitas premium langsung dari rumah ke tangan Anda.
                </p>
              </div>
            </div>
            
            {/* Floating Top Right Element */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -top-6 -right-2 lg:-right-8 w-44 h-44 bg-white p-2.5 rounded-3xl shadow-xl rotate-6 hidden sm:block"
            >
               <img
                src="/images/product_white.png"
                alt="Signature Menu"
                className="w-full h-full object-cover rounded-2xl"
              />
              <span className="absolute -top-3 -right-3 bg-[#e65c00] text-white text-xs font-black tracking-wider px-4 py-2 rounded-full shadow-lg -rotate-12">
                MENU
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-soul-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
               <span className="w-8 h-px bg-soul-blue"></span>
               Cerita kami
            </p>
            
            <h2
              id="story-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tempat di Mana <br/>
              <span className="text-soul-blue italic">Waktu Berhenti</span>
            </h2>

            <p className="text-soul-blue/80 italic mb-8 text-sm md:text-base font-medium">
              "Sebuah hidden gem yang menawarkan ketenangan sesungguhnya"
            </p>

            <div className="text-gray-600 leading-relaxed text-sm md:text-base mb-10 space-y-4">
              <p>
                Awal mula berdirinya Soul dilatarbelakangi oleh pengalaman sang owner yang pernah bekerja sebagai barista serta memiliki hobi meracik kopi sendiri di rumah. Dari hobi tersebut, owner merasa puas dengan cita rasa kopi racikannya dan mulai muncul keinginan untuk menghadirkan kopi berkualitas melalui usaha kopi rumahan.
              </p>
              <p>
                Sebelum resmi launching, berbagai racikan kopi Soul terlebih dahulu dicoba oleh kerabat dan teman-teman terdekat. Ternyata, respon yang diberikan sangat positif. Banyak yang menyukai cita rasa kopi yang disajikan dan memberikan dukungan untuk mengembangkan usaha ini lebih jauh.
              </p>
              <p>
                Dari dukungan dan antusiasme tersebut, akhirnya Soul resmi hadir dan terus berkembang hingga sekarang sebagai usaha kopi yang lahir dari passion, pengalaman, dan kecintaan terhadap kopi.
              </p>
            </div>



            {/* Bottom Stats */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-gray-200">
               <div>
                 <div className="text-4xl font-black text-soul-blue" style={{ fontFamily: "var(--font-poppins)" }}>4.9</div>
                 <div className="text-[10px] font-bold text-gray-400 tracking-wider flex items-center gap-1 mt-2">
                    <span className="text-yellow-400 text-sm">⭐</span> RATING GOOGLE
                 </div>
               </div>
               <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
               <div>
                 <div className="text-4xl font-black text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>1.3K+</div>
                 <div className="text-[10px] font-bold text-gray-400 tracking-wider mt-2">
                    ULASAN
                 </div>
               </div>
               <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
               <div>
                 <div className="text-3xl font-bold text-blue-400 mb-1">💎</div>
                 <div className="text-[10px] font-bold text-gray-400 tracking-wider mt-2">
                    HIDDEN GEM
                 </div>
               </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
