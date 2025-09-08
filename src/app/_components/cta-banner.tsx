import Link from "next/link";

const CtaBanner = () => {
  return (
    <div className="bg-primary relative overflow-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)'
        }}
      />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Prêt à suivre les partenariats ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100">
            Découvrez comment Partenar peut vous aider à identifier, analyser et suivre 
            les partenariats entre les marques et les créateurs de contenu.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href="mailto:julien@partenar.com"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="https://partenar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;