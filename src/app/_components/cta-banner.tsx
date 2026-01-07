import Link from "next/link";

const CtaBanner = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#0061FF] to-[#60EFFF] px-6 py-10 shadow-2xl sm:rounded-xl sm:px-12 lg:flex lg:items-center lg:gap-x-16 lg:px-16 lg:py-12">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 opacity-20 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="white" fillOpacity="0.3" />
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
              Vous êtes prêts ?
            </h2>
            <p className="mt-4 text-base text-pretty text-white/90">
              Commencez à suivre les partenariats dès maintenant et voyez comment Partenar peut vous aider.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="https://app.partenar.com/register"
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0061FF] shadow-sm hover:bg-gray-50 transition-all"
              >
                Essayer Partenar
              </Link>
              <Link href="https://partenar.com/contact" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
                Demander une démo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 lg:flex-shrink-0">
            <img
              alt="Partenar dashboard"
              src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
              width={1824}
              height={1080}
              className="w-[40rem] max-w-none rounded-md bg-white/10 ring-1 ring-white/20 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
