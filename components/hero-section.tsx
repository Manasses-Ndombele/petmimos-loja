"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const heroProducts = [
  "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_6_xcpc4m.jpg",
  "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_5_nhxuoo.jpg",
  "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584159/pexels_2_x20i6f.jpg",
  "https://res.cloudinary.com/dl2earg2m/image/upload/v1753584158/pexels_n0qqwd.jpg",
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gradient-to-r from-[#B2DFFC] to-[#FFD600] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
              Tudo que seu pet precisa, com muito amor e carinho
            </h1>
            <p className="text-lg text-[#333333]/80 leading-relaxed">
              Na PetMimos, oferecemos os melhores produtos para cães, gatos e outros pets. Ração premium, brinquedos,
              acessórios e muito mais para deixar seu amiguinho feliz e saudável.
            </p>
            <Button size="lg" className="bg-[#ff6f61] text-white hover:bg-[#ff6f61]/90">
              Explorar produtos
            </Button>
          </div>

          <div className="relative">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-white shadow-xl">
              {heroProducts.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Produto em destaque ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#333333]" : "bg-[#333333]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
