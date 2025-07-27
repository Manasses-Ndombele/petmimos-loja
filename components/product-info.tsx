import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  description: string
}

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#333333] mb-4">{product.name}</h1>
        <p className="text-4xl font-bold text-[#ff6f61] mb-6">R$ {product.price.toFixed(2).replace(".", ",")}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#333333] mb-3">Descrição</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#333333]">Características:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Ingredientes naturais e selecionados</li>
          <li>• Rico em proteínas e vitaminas</li>
          <li>• Sem conservantes artificiais</li>
          <li>• Aprovado por veterinários</li>
          <li>• Embalagem sustentável</li>
        </ul>
      </div>

      <Button size="lg" className="w-full bg-[#FFD600] text-[#333333] hover:bg-[#FFD600]/90">
        Adicionar ao carrinho
      </Button>
    </div>
  )
}
