import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const relatedProducts = [
  {
    id: 2,
    name: "Petisco Natural Cães",
    price: 15.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753585161/pixa_3_gcmtoh.jpg",
  },
  {
    id: 3,
    name: "Vitamina para Pets",
    price: 45.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753585160/pixa_1_fuzjhw.jpg",
  },
  {
    id: 4,
    name: "Comedouro Inox",
    price: 29.9,
    image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753585160/pixa_2_mcqp5r.png",
  },
]

export default function RelatedProducts() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-[#333333] mb-8">Produtos semelhantes a este</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-[#333333] mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-[#ff6f61] mb-4">R$ {product.price.toFixed(2).replace(".", ",")}</p>
              <div className="flex space-x-2">
                <Link href={`/produto/${product.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#FFD600] text-[#333333] hover:bg-[#FFD600] bg-transparent"
                  >
                    Ver produto
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
