
const Products = () => {
  return (
    <section id="produkte" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 animate-fade-up">Unsere Produkte</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-left">
            <h3 className="text-2xl font-semibold mb-4">Wärmepumpen</h3>
            <p className="text-gray-300 mb-4">
              Moderne Wärmepumpen mit hoher Effizienz und geringer Umweltbelastung.
            </p>
            <a href="#kontakt" className="text-green-400 hover:underline">
              Jetzt informieren →
            </a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-left">
            <h3 className="text-2xl font-semibold mb-4">Solaranlagen</h3>
            <p className="text-gray-300 mb-4">
              Photovoltaik-Systeme für saubere und autarke Energieerzeugung.
            </p>
            <a href="#kontakt" className="text-green-400 hover:underline">
              Mehr erfahren →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
