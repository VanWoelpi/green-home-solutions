import Layout from "@/components/Layout";
import { Check } from "lucide-react";
import HeroWithImage from "@/components/HeroWithImage";


const Photovoltaik = () => {
  return (
      <Layout>
        {/* Hero mit responsive Image Layer */}
        <HeroWithImage
            title="Deine eigene Photovoltaikanlage"
            description="Mit 440 Wp Hochleistungsmodulen eigenen Strom erzeugen – effizient & unabhängig."
            backgroundImage="/images/hero-pv.jpg"
        >
          <div className="flex flex-wrap gap-4">
            <a
                href="#mehr-erfahren"
                className="px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition font-medium"
            >
              Mehr erfahren
            </a>
            <a
                href="#kontakt"
                className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition"
            >
              Beratung anfragen
            </a>
          </div>
        </HeroWithImage>


        {/* USPs */}
        <section className="section-default">
          <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "Eigene Stromproduktion",
              "440 Wp Hochleistungs-Module",
              "Ab 98 € pro Monat",
            ].map((usp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-400 mt-1" size={22} />
                  <span className="text-lg text-gray-100">{usp}</span>
                </div>
            ))}
          </div>
        </section>

        {/* TÜV oder Zertifikats-Badge */}
        <section className="bg-gray-900 py-12">
          <div className="container flex justify-center">
            <img
                src="/images/tuev-badge.svg"
                alt="Zertifiziert durch TÜV"
                className="h-20"
            />
          </div>
        </section>

        {/* Finaler CTA */}
        <section className="section-default py-16 text-center">
          <div className="container">
            <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg transition"
            >
              Jetzt unverbindlich beraten lassen
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M3.75 12H20.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </Layout>
  );
};

export default Photovoltaik;
