import Header from "@/components/header"
import ProductCarousel from "@/components/product-carousel"
import ProductInfo from "@/components/product-info"
import RelatedProducts from "@/components/related-products"
import PromoSection from "@/components/promo-section"
import Footer from "@/components/footer"

const productData = {
  id: 1,
  name: "Ração Premium Golden para Cães Adultos",
  price: 89.9,
  description:
    "Ração super premium desenvolvida especialmente para cães adultos de todas as raças. Rica em proteínas de alta qualidade, vitaminas e minerais essenciais para manter seu pet saudável e cheio de energia.",
  images: [
    "https://res.cloudinary.com/dl2earg2m/image/upload/v1753585161/pixa_3_gcmtoh.jpg",
    "https://res.cloudinary.com/dl2earg2m/image/upload/v1753585160/pixa_1_fuzjhw.jpg",
    "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_5_nhxuoo.jpg",
    "https://res.cloudinary.com/dl2earg2m/image/upload/v1753585452/aaaa_vcbs7s.png",
  ],
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductCarousel images={productData.images} />
          <ProductInfo product={productData} />
        </div>
        <RelatedProducts />
        <PromoSection />
      </main>
      <Footer />
    </div>
  )
}
