
import { ArrowUpRight, Clock, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ArrowUpRight className="w-10 h-10 mx-auto text-green-400" />,
      title: "Beratung & Planung",
      description: "Individuelle Konzepte für deine Energielösung – nachhaltig und effizient."
    },
    {
      icon: <Settings className="w-10 h-10 mx-auto text-green-400" />,
      title: "Installation",
      description: "Fachgerechte und schnelle Umsetzung durch unser geschultes Team."
    },
    {
      icon: <Clock className="w-10 h-10 mx-auto text-green-400" />,
      title: "Wartung & Service",
      description: "Langfristige Betreuung für eine störungsfreie und effiziente Nutzung."
    }
  ];

  return (
    <section id="leistungen" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 animate-fade-up">Unsere Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
