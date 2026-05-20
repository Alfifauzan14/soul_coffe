"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const WA_URL = "https://api.whatsapp.com/send?phone=6281224251104&fbclid=PAb21jcAR4w-NleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAae64Qm8EC0E0neY0zLwxwnrDKwNTaXjopH97dQ8Uhf7aijObOl41Rd4bqLUWA_aem_WomppjmZkSe0vLd1bF5q8g&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const products = [
  {
    id: "black-soul",
    name: "Black Soul",
    description:
      "Kopi hitam pekat dengan cita rasa otentik yang kuat dan khas. Diseduh dari biji kopi pilihan untuk memberikan dorongan energi maksimal di setiap tegukannya.",
    price: "Rp 15.000",
    image: "/images/product_black.png",
    badge: "New Product",
    badgeColor: "bg-amber-500",
  },
  {
    id: "white-soul",
    name: "White Soul",
    description:
      "Paduan sempurna antara racikan kopi premium dan susu segar yang creamy. Menghadirkan rasa lembut dengan manis yang pas, sangat nikmat disajikan dingin.",
    price: "Rp 13.000",
    image: "/images/product_white.png",
    badge: "Best Seller",
    badgeColor: "bg-rose-600",
  },
  {
    id: "white-soul-1l",
    name: "White Soul 1L",
    description:
      "Varian White Soul favorit Anda kini hadir dalam kemasan 1 Liter! Ukuran lebih besar yang sangat cocok untuk dinikmati bersama teman, keluarga, atau stok di kulkas.",
    price: "Rp 90.000",
    image: "/images/product_white1l.png",
    badge: "Popular",
    badgeColor: "bg-purple-600",
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const waMessage = `Halo Soul Coffee! Saya ingin memesan ${product.name}. Mohon bantuannya `;
  const waLink = `${WA_URL}&text=${encodeURIComponent(waMessage)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group flex flex-col rounded-3xl overflow-hidden bg-soul-blue shadow-xl shadow-soul-blue/10 border border-white/5 hover:-translate-y-1 transition-all duration-300"
      id={`product-${product.id}`}
    >
      {/* Product image area */}
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        {/* Badge */}
        <span
          className={`absolute top-4 left-4 z-10 px-3 py-1 ${product.badgeColor} text-white text-[11px] font-bold rounded-full tracking-wide shadow-sm`}
        >
          {product.badge}
        </span>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        
        {/* Subtle dark overlay at bottom of image to blend with card */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-soul-blue/30 to-transparent" />
      </div>

      {/* Info box */}
      <div className="flex-1 flex flex-col p-6">
        <div className="mb-2">
          <h3
            className="text-white text-lg font-bold flex items-center gap-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {product.name}
          </h3>
        </div>

        <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-bold text-lg tracking-wide">{product.price}</span>
          
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            id={`order-${product.id}`}
            aria-label={`Order ${product.name} via WhatsApp`}
            className="px-6 py-2 border border-white/20 text-white font-medium text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Pesan
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="blends"
      className="py-24 lg:py-32 px-6 bg-white"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-soul-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Jelajahi Menu
          </p>
          <h2
            id="products-heading"
            className="text-4xl md:text-5xl font-black text-gray-900"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Racikan <span className="text-soul-blue">Khas Kami</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-soul-blue rounded-full" />
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-base">
            Setiap racikan adalah cerita yang dirangkai dengan saksama dalam sebotol kopi —
            bersumber etis, diseduh perlahan, dan disajikan segar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
