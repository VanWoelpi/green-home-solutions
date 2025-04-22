import { Handshake } from 'lucide-react';

const partners = [
  {
    name: "Link3",
    href: "https://link3.at/",
    img: "/images/link.webp",
    alt: "Partner Link3",
  },
  {
    name: "Daikin",
    href: "https://www.daikin.de/de_de/privatkunden.html",
    img: "/images/daikin.webp",
    alt: "Daikin Logo",
  },
  {
    name: "Energiereform",
    href: "https://www.energiereform.de/",
    img: "/images/energiereform.webp",
    alt: "Energiereform Logo",
  },
  {
    name: "NIBE",
    href: "https://www.nibe.eu/de-de",
    img: "/images/nibe.webp",
    alt: "Nibe Logo",
  },
  {
    name: "Lambda",
    href: "https://lambda-wp.at/",
    img: "/images/lambda.webp",
    alt: "Lambda Logo",
  },
];

const PartnerLogos = () => {
  return (
      <section className="section-default py-20">
        <div className="container text-center">
          {/* Überschrift */}
          <h2
              className="text-3xl font-semibold mb-4"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
          >
            Unsere Partnerunternehmen
          </h2>

          {/* Trennlinie mit Icon */}
          <div
              className="flex items-center justify-center mb-10"
              data-aos="zoom-in"
              data-aos-delay="200"
          >
            <div className="w-16 h-px bg-white"></div>
            <Handshake className="mx-4 text-green-400" />
            <div className="w-16 h-px bg-white"></div>
          </div>

          {/* Grid mit Logos + Animation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
            {partners.map((partner, index) => (
                <a
                    key={index}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={partner.name}
                    className="transition-transform hover:scale-105"
                    data-aos="flip-left"
                    data-aos-delay={200 + index * 100}
                    data-aos-duration="800"
                    data-aos-easing="ease-out-cubic"
                >
                  <img
                      src={partner.img}
                      alt={partner.alt}
                      className="h-20 w-auto object-contain"
                      loading="lazy"
                  />
                </a>
            ))}
          </div>
        </div>
      </section>
  );
};

export default PartnerLogos;
