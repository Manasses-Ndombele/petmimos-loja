"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Pedido finalizado com sucesso! Obrigado pela compra.")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#333333]">Dados pessoais</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">CEP</Label>
                <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-[#FFD600] text-[#333333] hover:bg-[#FFD600]/90 mt-6">
              Finalizar compra
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#333333]">Resumo do pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-[#333333]">Ração Premium Golden</span>
              <span className="font-semibold">R$ 89,90</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-[#333333]">Frete</span>
              <span className="font-semibold text-green-600">Grátis</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-[#333333]">Desconto (PETMIMOS20)</span>
              <span className="font-semibold text-green-600">-R$ 17,98</span>
            </div>

            <div className="flex justify-between items-center py-4 text-xl font-bold text-[#333333] border-t-2">
              <span>Total</span>
              <span className="text-[#ff6f61]">R$ 71,92</span>
            </div>

            <div className="bg-[#B2DFFC] p-4 rounded-lg">
              <p className="text-sm text-[#333333]">🎉 Você economizou R$ 17,98 com o cupom PETMIMOS20!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
