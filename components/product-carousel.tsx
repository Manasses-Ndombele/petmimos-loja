"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductCarouselProps {
  images: string[]
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`Produto imagem ${currentImage + 1}`}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? "bg-[#FFD600]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
