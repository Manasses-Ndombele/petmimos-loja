import Header from "@/components/header"
import CheckoutForm from "@/components/checkout-form"
import Footer from "@/components/footer"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#333333] mb-8 text-center">Finalizar Compra</h1>
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
