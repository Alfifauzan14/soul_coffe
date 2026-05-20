import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import StorySection from "@/components/StorySection";
import ProductsSection from "@/components/ProductsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FoundersSection />
      <StorySection />
      <ProductsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
