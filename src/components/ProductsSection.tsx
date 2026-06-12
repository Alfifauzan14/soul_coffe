"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Package, X, ShoppingBag } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

function formatPrice(price: string | number): string {
  const cleaned = typeof price === "string" ? price.replace(/[^0-9]/g, "") : String(price);
  const num = parseInt(cleaned, 10);
  if (isNaN(num)) return String(price);
  return "Rp " + num.toLocaleString("id-ID");
}

function getImageSrc(image_url: string) {
  if (!image_url) return null;
  return image_url.startsWith("http") ? image_url : `${API_URL}${image_url}`;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image_url: string;
  badge: string;
  badge_color: string;
}

/* ─── Product Detail Modal ─── */
function ProductModal({
  product,
  waNumber,
  onClose,
}: {
  product: Product;
  waNumber: string;
  onClose: () => void;
}) {
  const waMessage = `Halo Soul Coffee! Saya ingin memesan ${product.name}. Mohon bantuannya `;
  const waLink = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waMessage)}`;
  const imgSrc = getImageSrc(product.image_url);

  // Tutup saat tekan Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        {/* Modal box — stop propagation agar klik isi tidak tutup modal */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.88, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(160deg,#1a1f6e 0%,#1e24a0 100%)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol tutup */}
          <button
            onClick={onClose}
            aria-label="Tutup detail produk"
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Gambar produk */}
          <div className="relative w-full h-64 bg-white/5 overflow-hidden">
            {imgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imgSrc}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <Package className="w-20 h-20" />
              </div>
            )}

            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-3 py-1 ${product.badge_color} text-white text-[11px] font-bold rounded-full tracking-wide shadow`}
              >
                {product.badge}
              </span>
            )}

            {/* Gradient bawah gambar */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a1f6e] to-transparent" />
          </div>

          {/* Konten */}
          <div className="px-7 pb-8 pt-4">
            <h2
              className="text-white text-2xl font-black mb-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {product.name}
            </h2>

            {/* Harga */}
            <p className="text-amber-400 font-bold text-xl mb-5">
              {formatPrice(product.price)}
            </p>

            {/* Divider */}
            <div className="w-10 h-0.5 bg-white/20 rounded-full mb-5" />

            {/* Deskripsi */}
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              {product.description || "Tidak ada deskripsi untuk produk ini."}
            </p>

            {/* Tombol pesan */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id={`modal-order-${product.id}`}
              aria-label={`Pesan ${product.name} via WhatsApp`}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300"
              style={{
                background: "linear-gradient(90deg,#25d366,#128c7e)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              Pesan via WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Product Card ─── */
function ProductCard({
  product,
  index,
  waNumber,
  onOpenModal,
}: {
  product: Product;
  index: number;
  waNumber: string;
  onOpenModal: (p: Product) => void;
}) {
  const imgSrc = getImageSrc(product.image_url);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group flex flex-col rounded-3xl overflow-hidden bg-soul-blue shadow-xl shadow-soul-blue/10 border border-white/5 hover:-translate-y-1 transition-all duration-300 w-[260px] sm:w-[300px] md:w-[320px] h-[400px] snap-center shrink-0 cursor-pointer"
      id={`product-${product.id}`}
      onClick={() => onOpenModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpenModal(product); }}
      aria-label={`Lihat detail ${product.name}`}
    >
      {/* Area gambar */}
      <div className="relative w-full h-[220px] overflow-hidden bg-white flex-shrink-0">
        {product.badge && (
          <span
            className={`absolute top-4 left-4 z-10 px-3 py-1 ${product.badge_color} text-white text-[11px] font-bold rounded-full tracking-wide shadow-sm`}
          >
            {product.badge}
          </span>
        )}

        {imgSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <Package className="w-12 h-12 opacity-50" />
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-soul-blue/30 to-transparent" />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col p-6">
        <h3
          className="text-white text-lg font-bold mb-2"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {product.name}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed mb-auto line-clamp-2 overflow-hidden">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-amber-400 font-bold text-lg tracking-wide">
            {formatPrice(product.price)}
          </span>

          <span className="px-5 py-1.5 border border-white/20 text-white font-medium text-sm rounded-full group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300">
            Detail
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Section ─── */
export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [waNumber, setWaNumber] = useState("6281224251104");
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCloseModal = useCallback(() => setSelectedProduct(null), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, settingsRes] = await Promise.all([
          fetch(`${API_URL}/api/products`),
          fetch(`${API_URL}/api/settings`),
        ]);

        if (productsRes.ok) setProducts(await productsRes.json());

        if (settingsRes.ok) {
          const s = await settingsRes.json();
          if (s.whatsapp_number) setWaNumber(s.whatsapp_number);
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
            <div className="w-10 h-10 border-4 border-soul-blue/30 border-t-soul-blue rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex items-start overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pt-4 px-4 -mx-4 hide-scrollbar">
            {products.length > 0 ? (
              products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  waNumber={waNumber}
                  onOpenModal={setSelectedProduct}
                />
              ))
            ) : (
              <div className="w-full text-center py-20 text-gray-400 font-medium">
                Belum ada produk yang tersedia.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          waNumber={waNumber}
          onClose={handleCloseModal}
        />
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
