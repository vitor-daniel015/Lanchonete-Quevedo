import React from 'react';
import { ChefHat, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold font-serif">Quevedo's Lanchonete</span>
            </div>
            <p className="text-amber-200">
              Sabores autênticos do interior paulista desde sempre.
              Tradição e qualidade em cada prato.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-amber-200">
              <p>Telefone: (15) 3267-1234</p>
              <p>WhatsApp: (15) 99999-9999</p>
              <p>Rua Principal, 123 - Centro</p>
              <p>Capela do Alto, SP</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <button className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors">
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; 2025 Quevedo's Lanchonete. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}