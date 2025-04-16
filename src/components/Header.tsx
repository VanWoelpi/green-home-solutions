
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-10xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src="https://woelper-photovoltaik-waermepumpen.de/wp-content/uploads/2024/12/wpw_logo.png" alt="ecoEnergy Logo" className="h-12" />
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#leistungen" className="hover:text-green-400 transition">Leistungen</a>
          <a href="#produkte" className="hover:text-green-400 transition">Produkte</a>
          <a href="#kontakt" className="hover:text-green-400 transition">Kontakt</a>
          <a href="/public/files/Qualifizierungsnachweis.pdf" target="_blank" className="hover:text-green-400 transition">
            VDI Qualifizierungsnachweis
          </a>
        </nav>

        <a href="#kontakt" className="hidden md:block px-4 py-2 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition duration-300">
          Anfrage
        </a>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#leistungen" className="hover:text-green-400 transition" onClick={() => setIsMenuOpen(false)}>
                Leistungen
              </a>
              <a href="#produkte" className="hover:text-green-400 transition" onClick={() => setIsMenuOpen(false)}>
                Produkte
              </a>
              <a href="#kontakt" className="hover:text-green-400 transition" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </a>
              <a href="/qualifizierungsnachweis.pdf" target="_blank" className="hover:text-green-400 transition">
                VDI Qualifizierungsnachweis
              </a>
              <a href="#kontakt" className="inline-block px-4 py-2 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition duration-300 text-center">
                Anfrage
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
