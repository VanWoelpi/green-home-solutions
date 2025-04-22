import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navbar from './Navbar.tsx';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header className="bg-gray-900 sticky top-0 z-50 shadow-lg">
        <div className="container py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center mr-4 -ml-4 md:-ml-6">
            <img src="/images/wpw_logo.png" alt="wpw Logo" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <Navbar />
          </div>

          {/* CTA Button rechts (nur Desktop) */}
          <a
              href="#kontakt"
              className="hidden md:inline-block px-4 py-2 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition duration-300 text-sm font-semibold"
          >
            Anfrage
          </a>

          {/* Mobile menu button */}
          <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900 p-4 md:hidden z-50">
              <nav className="flex flex-col space-y-4">
                <Link
                    to="/photovoltaik"
                    className="text-gray-300 hover:text-green-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Photovoltaik
                </Link>
                <Link
                    to="/waermepumpen"
                    className="text-gray-300 hover:text-green-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Wärmepumpen
                </Link>
                <a
                    href="/public/files/Qualifizierungsnachweis.pdf"
                    target="_blank"
                    className="text-gray-300 hover:text-green-400 transition"
                >
                  VDI Qualifizierungsnachweis
                </a>
                <a
                    href="#kontakt"
                    className="inline-block px-4 py-2 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition duration-300 text-center"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Anfrage
                </a>
              </nav>
            </div>
        )}
      </header>
  );
};

export default Header;
