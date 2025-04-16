
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-green-600 to-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Bereit für nachhaltige Energie?</h2>
        <p className="text-lg mb-8">
          Lass uns gemeinsam dein Zuhause in eine grüne Oase verwandeln.
        </p>
        <a
          href="#kontakt"
          className="inline-block px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-green-600 transition duration-300 font-semibold"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
};

export default CTA;
