"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Package } from "lucide-react";
import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image_url: string;
  badge: string;
  badge_color: string;
}

function ProductCard({ product, index, waNumber }: { product: Product; index: number; waNumber: string }) {
  const waMessage = `Halo Soul Coffee! Saya ingin memesan ${product.name}. Mohon bantuannya `;
  const waLink = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waMessage)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group flex flex-col rounded-3xl overflow-hidden bg-soul-blue shadow-xl shadow-soul-blue/10 border border-white/5 hover:-translate-y-1 transition-all duration-300 min-w-[85vw] md:min-w-[350px] snap-center shrink-0"
      id={`product-${product.id}`}
    >
      {/* Product image area */}
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-4 left-4 z-10 px-3 py-1 ${product.badge_color} text-white text-[11px] font-bold rounded-full tracking-wide shadow-sm`}
          >
            {product.badge}
          </span>
        )}

        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <Package className="w-12 h-12 opacity-50" />
          </div>
        )}
        
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
  const [products, setProducts] = useState<Product[]>([]);
  const [waNumber, setWaNumber] = useState("6281224251104");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, settingsRes] = await Promise.all([
          fetch(`${API_URL}/api/products`),
          fetch(`${API_URL}/api/settings`)
        ]);

        if (productsRes.ok) {
          const productsData = await productsRes.json();
          setProducts(productsData);
        }

        if (settingsRes.ok) {
          const settingsData = await settingsRes.json();
          if (settingsData.whatsapp_number) {
            setWaNumber(settingsData.whatsapp_number);
          }
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="blends"
      className="py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
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

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-soul-blue/30 border-t-soul-blue rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pt-4 px-4 -mx-4 hide-scrollbar">
            {products.length > 0 ? (
              products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} waNumber={waNumber} />
              ))
            ) : (
              <div className="w-full text-center py-20 text-gray-400 font-medium">
                Belum ada produk yang tersedia.
              </div>
            )}
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
