export function Intro() {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
          Blog
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl leading-relaxed text-gray-600 mb-6">
          Découvrez les dernières tendances, analyses et conseils sur l'écosystème des partenariats entre créateurs de contenu et marques.
        </p>
        <p className="text-gray-500">
          Par l'équipe{" "}
          <a
            href="https://app.partenar.com"
            className="text-primary hover:text-blue-700 font-medium transition-colors"
          >
            Partenar
          </a>
        </p>
      </div>
    </section>
  );
}
