"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthModal from "./auth-modal"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FFD600] rounded-full flex items-center justify-center">
                <span className="text-[#333333] font-bold text-xl">🐾</span>
              </div>
              <span className="text-2xl font-bold text-[#333333]">PetMimos</span>
            </Link>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="border-[#FFD600] text-[#333333] hover:bg-[#FFD600] hover:text-[#333333]"
              >
                Login
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FFD600] text-[#333333] hover:bg-[#FFD600]/90"
              >
                Registrar-se
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
