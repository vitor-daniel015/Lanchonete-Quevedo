import { Dispatch, SetStateAction } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  scrolled: boolean;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen, scrolled }: NavbarProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-amber-100 shadow-lg opacity-100 pointer-events-auto'
          : 'bg-transparent shadow-none opacity-0 pointer-events-none'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/images/logo2.png" alt="Logo" className='h-8 w-32' />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-amber-800 hover:text-yellow-600 transition-colors font-semibold">Início</a>
            <a href="#specialties" className="text-amber-800 hover:text-yellow-600 transition-colors font-semibold">Especialidades</a>
            <a href="#menu" className="text-amber-800 hover:text-yellow-600 transition-colors font-semibold">Cardápio</a>
            <a href="#location" className="text-amber-800 hover:text-yellow-600 transition-colors font-semibold">Localização</a>
            <a href="#delivery" className="text-amber-800 hover:text-yellow-600 transition-colors font-semibold">Delivery</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-800 hover:text-yellow-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-100 border-t border-amber-200">
            <div className="py-4 space-y-2">
              <a href="#home" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Início</a>
              <a href="#specialties" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Especialidades</a>
              <a href="#menu" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Cardápio</a>
              <a href="#location" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Localização</a>
              <a href="#delivery" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Delivery</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}