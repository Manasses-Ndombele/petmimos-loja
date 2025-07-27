import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import ProductsSection from "@/components/products-section"
import PromoSection from "@/components/promo-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <PromoSection />
      </main>
      <Footer />
    </div>
  )
}
