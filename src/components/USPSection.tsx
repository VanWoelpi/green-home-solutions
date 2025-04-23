import {
  Sun,
  PiggyBank,
  Zap,
  ShieldCheck,
  Leaf,
  Building2,
} from "lucide-react";

const usps = [
  {
    icon: <Sun className="text-green-400 w-8 h-8" />,
    title: "Unabhängig mit Sonnenstrom",
    description: "Erzeuge deinen eigenen Strom – sauber, leise & kostenlos von der Sonne.",
  },
  {
    icon: <PiggyBank className="text-green-400 w-8 h-8" />,
    title: "Ab 98 € pro Monat",
    description: "Günstiger als viele Stromtarife – inklusive Planung & Montage.",
  },
  {
    icon: <Zap className="text-green-400 w-8 h-8" />,
    title: "440 Wp Hochleistungs-Module",
    description: "Maximale Effizienz mit modernster Solartechnik – auch bei wenig Sonne.",
  },
  {
    icon: <ShieldCheck className="text-green-400 w-8 h-8" />,
    title: "Langfristige Sicherheit",
    description: "Langlebige Komponenten mit bis zu 25 Jahren Garantie.",
  },
  {
    icon: <Leaf className="text-green-400 w-8 h-8" />,
    title: "Klimafreundlich",
    description: "Reduziere deinen CO₂-Fußabdruck nachhaltig und mach mit beim Klimaschutz.",
  },
  {
    icon: <Building2 className="text-green-400 w-8 h-8" />,
    title: "Wertsteigerung für dein Zuhause",
    description: "Mach dein Haus zukunftsfähig & attraktiv für Käufer oder Mieter.",
  },
];

const USPSection = () => {
  return (
      <section className="section-default">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Deine Vorteile auf einen Blick
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {usps.map((usp, index) => (
                <div
                    key={index}
                    className="bg-gray-800 rounded-2xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                  <div className="mb-4">{usp.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                  <p className="text-gray-300 text-sm">{usp.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default USPSection;
