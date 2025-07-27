import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Ração Premium Golden",
    price: 89.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_6_xcpc4m.jpg",
  },
  {
    id: 2,
    name: "Brinquedo Interativo Gato",
    price: 34.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_5_nhxuoo.jpg",
  },
  {
    id: 3,
    name: "Coleira Ajustável Cão",
    price: 24.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_2_x20i6f.jpg",
  },
  {
    id: 4,
    name: "Cama Ortopédica Pet",
    price: 129.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584158/pexels_n0qqwd.jpg",
  },
  {
    id: 5,
    name: "Comedouro Automático",
    price: 199.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584158/pexels_4_zr5o7b.jpg",
  },
  {
    id: 6,
    name: "Shampoo Natural Pet",
    price: 19.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_3_czuk01.jpg",
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Nossos Produtos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#333333] mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-[#ff6f61] mb-4">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
                <div className="flex space-x-2">
                  <Link href={`/produto/${product.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-[#FFD600] text-[#333333] hover:bg-[#FFD600] bg-transparent"
                    >
                      Saiba mais
                    </Button>
                  </Link>
                  <Link href="/checkout" className="flex-1">
                    <Button className="w-full bg-[#ff6f61] hover:bg-[#ff6f61]/90">Comprar</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[#FFD600] text-[#333333] hover:bg-[#FFD600] bg-transparent"
          >
            Veja mais produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
