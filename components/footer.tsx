import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#FFD600] rounded-full flex items-center justify-center">
                <span className="text-[#333333] font-bold">🐾</span>
              </div>
              <span className="text-xl font-bold">PetMimos</span>
            </div>
            <p className="text-gray-300">Cuidando do seu pet com amor e carinho desde 2020.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 (11) 9999-8888</p>
              <p>✉️ contato@petmimos.com.br</p>
              <p>📍 São Paulo, SP</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                Sobre nós
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                Política de privacidade
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                Termos de uso
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                📘 Facebook
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                📷 Instagram
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                🐦 Twitter
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FFD600]">
                📺 YouTube
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 PetMimos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
