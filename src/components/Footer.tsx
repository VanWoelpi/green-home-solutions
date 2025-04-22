import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
      <footer className="section-default text-sm">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
          {/* Öffnungszeiten */}
          <div>
            <h5 className="text-xl font-semibold mb-2">Öffnungszeiten</h5>
            <p className="text-gray-400">Montag – Freitag, 8:00–18:00 Uhr</p>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h5 className="text-xl font-semibold mb-2">Kontakt</h5>

            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="text-green-400 w-5 h-5 mt-0.5" />
                <a href="mailto:christian.woelper@gmx.de" className="hover:text-white">
                  christian.woelper@gmx.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="text-green-400 w-5 h-5 mt-0.5" />
                <a href="tel:+49511357387511" className="hover:text-white">
                  +49 (0) 511 – 3573 875 – 11
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="text-green-400 w-5 h-5 mt-0.5" />
                <a href="tel:+4915164956976" className="hover:text-white">
                  +49 (0) 151 – 649 569 76
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-green-400 w-5 h-5 mt-0.5" />
                <a
                    href="https://goo.gl/maps/MSdBUpCoyAv4tyKQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                >
                  Von Droste Hülshoff Weg 7<br />30855 Langenhagen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="section-default text-gray-500 text-xs py-6">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} | Alle Rechte vorbehalten | Christian Wölper – Innovative Konzepte für zeitgemäße Energietechnik
            </p>

            <ul className="flex flex-wrap justify-center md:justify-end gap-4">
              <li>
                <a
                    href="https://woelper-photovoltaik-waermepumpen.de/impressum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                    href="https://woelper-photovoltaik-waermepumpen.de/datenschutzerklaerung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
