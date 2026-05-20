# Persyaratan Keterampilan & Tumpukan Teknologi (Tech Stack)

Berdasarkan desain "SOUL COFFEE", berikut adalah keterampilan dan teknologi yang dibutuhkan, dengan fokus pada **Next.js** sebagai kerangka kerja (framework) utama:

## 1. Teknologi Utama (Core Stack)
* **Next.js (React Framework):** Digunakan untuk membangun antarmuka pengguna, perutean (routing), dan optimasi gambar. Direkomendasikan menggunakan *App Router* untuk struktur yang lebih modern.
* **TypeScript:** Sangat disarankan untuk pengetikan statis (static typing) agar kode lebih rapi, terstruktur, dan meminimalisir *bug* saat pengelolaan *props* pada komponen.

## 2. Penggayaan & Antarmuka Pengguna (Styling & UI)
* **Tailwind CSS:** Keterampilan utama yang dibutuhkan untuk menerjemahkan desain ini dengan cepat dan presisi. Desain minimalis, berbasis grid/flexbox, dan modifikasi warna khusus sangat cocok diimplementasikan menggunakan *utility classes* dari Tailwind.
* **CSS Variables / Tailwind Config:** Kemampuan untuk mengatur konfigurasi tema (warna primary blue, background, custom font-family) di `tailwind.config.js` atau `globals.css`.

## 3. Komponen & Animasi (Components & Animations)
* **Framer Motion (Opsional namun direkomendasikan):** Untuk menambahkan animasi masuk yang halus (fade-in/slide-up) saat menggulir (scroll) ke bagian *Founders*, *Story*, atau *Product Cards*. Juga berguna untuk mengatur rotasi gambar miring di bagian *Story*.
* **Lucide React / React Icons:** Pustaka ikon untuk menampilkan ikon-ikon seperti Instagram, WhatsApp, keranjang belanja, dan ikon kecil lainnya.
* **Komponen `next/image`:** Keterampilan wajib di Next.js untuk merender gambar botol kopi dan foto profil secara optimal dengan *lazy loading* dan perlindungan *layout shift* (CLS).

## 4. Tata Letak & Responsivitas (Layouting & Responsiveness)
* **CSS Flexbox & Grid:** Memahami cara membuat tata letak dua kolom (bagian Founders & Story) dan tata letak tiga kolom (kartu produk) yang dapat berubah menjadi satu kolom pada tampilan seluler (Mobile Responsive).
* **Mobile-First Design:** Kemampuan untuk memastikan bahwa desain yang luas ini dapat beradaptasi dengan baik di layar perangkat seluler (menggunakan prefix layar seperti `md:`, `lg:` di Tailwind).

## 5. Integrasi Pihak Ketiga (Third-Party Integrations)
* **WhatsApp API Link (`wa.me`):** Mengarahkan tombol pesanan di kartu produk langsung ke nomor WhatsApp bisnis dengan pesan yang sudah diformat sebelumnya (contoh: "Halo, saya ingin memesan House Blend 1 Liter...").

## 6. Praktik Terbaik Pengembangan (Best Practices)
* **Komponen Modular (Component-Driven):** Memecah desain menjadi komponen React yang dapat digunakan kembali untuk menjaga kebersihan kode (misalnya membuat komponen `<Button />`, `<ProductCard />`, `<SectionHeading />`, dan `<StatItem />`).
* **Aksesibilitas (Accessibility / a11y):** Menambahkan atribut `alt` pada semua gambar dan memastikan kontras warna antara teks dan latar belakang (terutama teks putih di atas latar biru) sudah cukup baik untuk dibaca.
