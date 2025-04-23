import Layout from "@/components/Layout";
import HeroWithImage from "@/components/HeroWithImage.tsx";
import ContactForm from "@/components/ContactForm.tsx";
import { CheckCircle } from "lucide-react";
import { PiggyBank, Flame, ShieldCheck } from "lucide-react";

const Waermepumpen = () => (
    <Layout>
      {/* Hero mit responsive Image Layer */}
      <HeroWithImage
          title="Wärmepumpen für dein Zuhause"
          description="Effizient heizen mit moderner Technologie – klimafreundlich, zuverlässig und zukunftssicher."
          backgroundImage="/images/hero-wp.png"
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

      {/* Wärmepumpen Argumente */}
      <section className="section-default">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Bildbereich mit neuer Badge */}
          <div className="relative">
            <img
                src="/images/wp-am-haus.png"
                alt="Moderne Wärmepumpe am Haus"
                className="rounded-xl shadow-xl w-full object-cover"
            />

            {/* Neue Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="text-sm font-medium text-green-600">100% grüne Wärme</span>
            </div>
          </div>

          {/* Text- & Kachelnbereich */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 leading-snug">
              Smarte Wärme für dein Zuhause
            </h2>
            <p className="text-green-400 text-lg font-medium mb-4">
              Nachhaltig heizen, clever sparen
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Mit einer modernen Wärmepumpe nutzt du die Energie aus Luft oder Erde – leise,
              umweltschonend und hocheffizient. So senkst du deine Heizkosten und schützt
              dich vor fossilen Energiepreissteigerungen.
            </p>

            {/* Highlight-Kacheln */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Förderung */}
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <PiggyBank className="text-green-400 w-8 h-8" />
                <span className="text-white">Bis zu 70 % staatliche Förderung sichern</span>
              </div>

              {/* Heizkosten sparen */}
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <Flame className="text-green-400 w-8 h-8" />
                <span className="text-white">Bis zu 40 % Heizkosten sparen</span>
              </div>

              {/* Unabhängigkeit */}
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg shadow-md sm:col-span-2">
                <ShieldCheck className="text-green-400 w-8 h-8" />
                <span className="text-white">Unabhängig von Öl- und Gaspreisen bleiben</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section id="kontakt">
        <ContactForm />
      </section>
    </Layout>
);

export default Waermepumpen;
