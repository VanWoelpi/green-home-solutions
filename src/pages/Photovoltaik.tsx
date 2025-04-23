import Layout from "@/components/Layout";
import { Check } from "lucide-react";
import HeroWithImage from "@/components/HeroWithImage";
import USPSection from "@/components/USPSection.tsx";
import ContactForm from "@/components/ContactForm.tsx";


const Photovoltaik = () => {
  return (
      <Layout>
        {/* Hero mit responsive Image Layer */}
        <HeroWithImage
            title="Deine eigene Solaranlage"
            description="Mit Photovoltaik-Hochleistungsmodulen eigenen Strom erzeugen – effizient & unabhängig."
            backgroundImage="/images/hero-pv.jpg"
        >
          <div className="flex flex-wrap gap-4">
            <a
                href="#kontakt"
                className="px-8 py-3 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition duration-300 font-semibold text-base tracking-wide"
            >
              Jetzt Beratung anfragen
            </a>
          </div>
        </HeroWithImage>


        {/* USPs */}
        <USPSection />

        <section className="section-default">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Bildbereich – jetzt links */}
            <div>
              <img
                  src="/images/power-of-sun.jpg"
                  alt="Photovoltaik nutzt Sonnenenergie"
                  className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
              />
            </div>

            {/* Textbereich – jetzt rechts */}
            <div data-aos="fade-up" data-aos-delay="200">
      <span className="text-green-400 font-bold uppercase tracking-wide">
        Deine eigene Energiequelle
      </span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
                Nutze die Kraft der Sonne – jeden Tag
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Die Sonne liefert unendlich viel Energie – leise, sauber und kostenlos. Mit deiner eigenen Solaranlage verwandelst du Sonnenstrahlen in Strom für dein Zuhause – ganz ohne Abhängigkeit von fossilen Energien oder steigenden Preisen.
              </p>
            </div>
          </div>
        </section>

        {/* Info + Bild Section */}
        <section className="section-default">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Textbereich */}
            <div data-aos="fade-up" data-aos-delay="100">
      <span className="text-green-400 font-bold uppercase tracking-wide">
        Unabhängig & smart
      </span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
                Keine Lust mehr auf hohe Strompreise?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                In den letzten zwei Jahrzehnten sind die Strompreise kontinuierlich gestiegen.
                Mit deiner eigenen Solaranlage schützt du dich vor weiteren Kostensteigerungen,
                senkst deine monatlichen Ausgaben und machst dich unabhängig vom Strommarkt.
              </p>
            </div>

            {/* Bildbereich */}
            <div>
              <img
                  src="/images/mann-montiert-anlage.jpg"
                  alt="Strom sparen mit Photovoltaik"
                  className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
              />
            </div>
          </div>
        </section>

        <section className="section-default">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Bild links */}
            <div >
              <img
                  src="/images/solaranlage-auf-dach.png"
                  alt="Solaranlage als smarte Investition"
                  className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
              />
            </div>

            {/* Text rechts */}
            <div data-aos="fade-left" data-aos-delay="200">
      <span className="text-green-400 font-bold uppercase tracking-wide">
        Clever investieren
      </span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
                Smarte Lösungen, die sich lohnen
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mit einer eigenen Photovoltaikanlage produzierst du nicht nur sauberen Strom,
                sondern senkst auch dauerhaft deine Stromkosten. Die Anlage amortisiert sich über
                die Jahre – und schützt dich zuverlässig vor zukünftigen Preissprüngen.
              </p>
            </div>
          </div>
        </section>


        <section id="kontakt">
          <ContactForm />
        </section>
      </Layout>
  );
};

export default Photovoltaik;
