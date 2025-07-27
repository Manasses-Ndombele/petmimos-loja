export default function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#ff6f61] to-[#FFD600]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">🎉 Estamos em promoção!</h2>
          <p className="text-xl text-white/90 mb-6">
            20% OFF nos mimos preferidos dos pets! Aproveite essa oportunidade única para deixar seu amiguinho ainda
            mais feliz.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-2xl font-bold text-white">
              Use o cupom: <span className="bg-white text-[#ff6f61] px-3 py-1 rounded font-mono">PETMIMOS20</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
