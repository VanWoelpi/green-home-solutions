import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="hidden md:flex items-center justify-center flex-1 space-x-6 relative">
        <Link
            to="/photovoltaik"
            className="text-white text-xl font-medium hover:text-green-400 transition"
        >
          Photovoltaik
        </Link>

        <Link
            to="/waermepumpen"
            className="text-white text-xl font-medium hover:text-green-400 transition"
        >
          Wärmepumpen
        </Link>

        <a
            href="#kontakt"
            className="text-white text-xl font-medium hover:text-green-400 transition"
        >
          Kontakt
        </a>

        <a
            href="/public/files/Qualifizierungsnachweis.pdf"
            target="_blank"
            className="text-white text-xl font-medium hover:text-green-400 transition"
        >
          VDI Qualifizierungsnachweis
        </a>
      </nav>
  );
};

export default Navbar;
