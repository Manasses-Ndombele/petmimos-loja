"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const categories = [
  { name: "Cães", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels-chevanon-1108099_arpame.jpg" },
  { name: "Gatos", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584160/pexels-pixabay-104827_jcuvap.jpg" },
  { name: "Peixes", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584160/pexels-crisdip-35358-128756_xmdmhd.jpg" },
  { name: "Pássaros", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584161/pexels-pixabay-326900_wuqpbc.jpg" },
  { name: "Hamsters", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584158/pexels-sharon-snider-2339082-4520484_i8unpj.jpg" },
  { name: "Coelhos", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584160/pexels-pixabay-255387_elmgeg.jpg" },
  { name: "Répteis", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584160/pexels-pixabay-34426_jl1x99.jpg" },
  { name: "Outros", image: "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584164/pexels-didsss-2334005_phiht6.jpg" },
]

export default function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const getVisibleCategories = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % categories.length
      visible.push(categories[index])
    }
    return visible
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Categorias</h2>

        <div className="relative overflow-hidden">
          <div className="flex justify-center space-x-8">
            {getVisibleCategories().map((category, index) => (
              <div key={`${category.name}-${currentIndex}-${index}`} className="flex flex-col items-center space-y-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FFD600] shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#333333] font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
