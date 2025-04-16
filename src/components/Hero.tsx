
const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-gray-900">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/videos/Mann-auf-dem-Dach-eines-Einfamilienhauses.mp4" type="video/mp4" />
        Dein Browser unterstützt kein HTML5-Video.
      </video>

      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-gray-900 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Nachhaltige Energie<br />für dein Zuhause
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Effiziente Wärmepumpen & Solaranlagen für eine grüne Zukunft.
        </p>
        <a
          href="#kontakt"
          className="inline-block px-6 py-3 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition duration-300 text-lg font-semibold"
        >
          Beratung anfragen
        </a>
      </div>
    </section>
  );
};

export default Hero;
