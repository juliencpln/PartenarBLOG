import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://partenar.com";

const CtaBanner = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#0061FF] to-[#60EFFF] px-6 pt-16 shadow-2xl rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Dashed grid lines background */}
          <div className="absolute inset-0 -z-10">
            <svg className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <pattern id="ctaGridLines" width="120" height="120" patternUnits="userSpaceOnUse">
                  <line x1="60" y1="0" x2="60" y2="120" stroke="white" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.15" />
                  <line x1="0" y1="60" x2="120" y2="60" stroke="white" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGridLines)" />
            </svg>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 opacity-20 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="white" fillOpacity="0.3" />
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Vous êtes prêts ?
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-white/90">
              Commencez à suivre les partenariats dès maintenant. Inscrivez-vous aujourd&apos;hui et voyez comment Partenar peut vous aider dans votre stratégie.
            </p>
            <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-x-6">
                  <Link
                    href="https://app.partenar.com/register"
                    className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0061FF] shadow-sm hover:bg-gray-50 transition-all"
                  >
                    Essayer Partenar
                  </Link>
                  <Link href="https://partenar.com/contact" className="text-sm/6 font-semibold text-white hover:text-white/80 transition-colors">
                    Demander une démo
                  </Link>
                </div>
                <p className="text-sm text-white/70 italic">
                  Inscription rapide et gratuite
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup - Fidèle à Partenar */}
          <div className="relative -mt-40 lg:mt-6 flex justify-center lg:justify-start lg:items-center lg:-mr-96">
            <div className="rounded-lg bg-white shadow-2xl overflow-hidden border border-slate-200/50 lg:ml-16 min-w-[700px] origin-center lg:origin-top-left scale-[0.65] sm:scale-[0.75] lg:scale-100 translate-y-28 sm:translate-y-24 lg:translate-y-0">
              {/* App Layout */}
              <div className="flex h-[460px]">
                {/* Sidebar */}
                <div className="w-[160px] bg-white flex flex-col">
                  {/* Logo */}
                  <div className="pt-3 pb-2 px-3 flex items-center">
                    <Image src={`${BASE_URL}/logo.svg`} alt="Partenar" width={100} height={24} className="h-5 w-auto" unoptimized />
                  </div>

                  {/* Search */}
                  <div className="px-2 py-2">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-md border border-slate-100">
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-[10px] text-slate-400">Rechercher...</span>
                      <span className="ml-auto text-[8px] text-slate-300 bg-white px-1 py-0.5 rounded border border-slate-100">⌘K</span>
                    </div>
                  </div>

                  {/* Section divider */}
                  <div className="mx-2 border-t border-slate-100 mt-1 mb-2"></div>

                  {/* Nav */}
                  <nav className="flex-1 px-2 space-y-0.5">
                    <a className="flex items-center gap-2 px-2 py-1 border-l border-[#279BFF]/70 -ml-px">
                      <svg className="w-3.5 h-3.5 text-[#279BFF]" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
                      <span className="text-[10px] font-medium text-slate-800">Accueil</span>
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
                      <span className="text-[10px]">Partenariats</span>
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                      <span className="text-[10px]">Créateurs</span>
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
                      <span className="text-[10px]">Marques</span>
                    </a>
                    <div className="border-t border-slate-100 my-1"></div>
                    <a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/></svg>
                      <span className="text-[10px]">Campagnes</span>
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
                      <span className="text-[10px]">Demandes</span>
                    </a>
                  </nav>

                  {/* Bottom */}
                  <div className="p-2 border-t border-slate-100 space-y-0.5">
                    <a className="flex items-center gap-2 px-2 py-1 text-slate-500 text-[10px]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"/></svg>
                      Blog
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1 text-slate-500 text-[10px]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                      Contact
                    </a>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 bg-white flex flex-col overflow-hidden">
                  {/* Header */}
                  <div className="px-4 py-2.5 flex items-center justify-between bg-white">
                    <h1 className="text-sm font-semibold text-slate-800">Tableau de bord</h1>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500">Marie Dupont</span>
                      <div className="w-6 h-6 rounded-full bg-[#279BFF] flex items-center justify-center text-white text-[8px] font-medium">MD</div>
                    </div>
                  </div>

                  {/* Content with rounded corner */}
                  <div className="flex-1 bg-[#f8fafc] rounded-tl-xl overflow-hidden">
                    <div className="p-4">
                      {/* Section title */}
                      <div className="flex items-center justify-between mb-1.5">
                        <h2 className="text-[9px] font-medium text-slate-700">Derniers partenariats</h2>
                        <span className="text-[7px] text-[#279BFF] font-medium cursor-pointer">Voir tous →</span>
                      </div>

                      {/* Cards - 10 partnership cards */}
                      <div className="grid grid-cols-5 gap-2 mb-4">
                        {/* Card 1 - Lena_fit × Nike */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/workout-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                              <span>2.1M</span>
                              <svg className="w-[5px] h-[5px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>89k</span>
                              <span className="bg-green-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">3.2%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/lena-fit.jpg`} alt="Lena_fit" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Lena_fit</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-orange-500 flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/nike.webp`} alt="Nike" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Nike</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 2 - Noxxie × PlayStation */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/playstation-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>34k</span>
                              <span className="bg-amber-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">1.8%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/squeezie-avatar.jpg`} alt="Noxxie" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Noxxie</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/playstation.png`} alt="PlayStation" width={10} height={10} className="w-full h-full object-contain" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">PlayStation</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 3 - Mia.beauty × Dior */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/beauty-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                              <span>856k</span>
                              <svg className="w-[5px] h-[5px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>67k</span>
                              <span className="bg-green-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">6.4%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/mia-beauty.jpg`} alt="Mia.beauty" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Mia.beauty</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-white flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/dior.png`} alt="Dior" width={10} height={10} className="w-full h-full object-contain brightness-0" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Dior</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 4 - Hugo_tech × Apple */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/iphone-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                              <span>3.4M</span>
                              <svg className="w-[5px] h-[5px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>102k</span>
                              <span className="bg-amber-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">2.1%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/hugo-tech.jpg`} alt="Hugo_tech" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Hugo_tech</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/apple.png`} alt="Apple" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Apple</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 5 - Naya.style × H&M */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/fashion-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>42k</span>
                              <span className="bg-green-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">4.8%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/naya-new.jpg`} alt="Naya.style" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Naya.style</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-red-600 flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/hm.png`} alt="H&M" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">H&M</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 6 - Flo.travel × Mercedes */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/mercedes-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                              <span>1.8M</span>
                              <svg className="w-[5px] h-[5px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>76k</span>
                              <span className="bg-green-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">4.2%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/flo-travel.jpg`} alt="Flo.travel" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Flo.travel</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/mercedes.png`} alt="Mercedes" width={10} height={10} className="w-full h-full object-contain" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Mercedes</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 7 - Zeph.music × Spotify */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/music-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>28k</span>
                              <span className="bg-amber-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">2.5%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/max-gaming.jpg`} alt="Zeph.music" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Zeph.music</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/spotify.png`} alt="Spotify" width={10} height={10} className="w-full h-full object-contain" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Spotify</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 8 - Emma.b × Starbucks */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/coffee-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                              <span>2.3M</span>
                              <svg className="w-[5px] h-[5px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>118k</span>
                              <span className="bg-green-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">5.1%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/emma-new.jpg`} alt="Emma.b" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Emma.b</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded flex items-center justify-center p-0.5" style={{ backgroundColor: '#00704A' }}>
                                <Image src={`${BASE_URL}/logos/starbucks.png`} alt="Starbucks" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Starbucks</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 9 - Lucas_vlogs × Adidas */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/adidas-sneakers.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                              <span>1.5M</span>
                              <svg className="w-[5px] h-[5px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>57k</span>
                              <span className="bg-green-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">3.8%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/lucas-vlogs.jpg`} alt="Lucas_vlogs" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Lucas_vlogs</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/adidas.png`} alt="Adidas" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Adidas</div>
                            </div>
                          </div>
                        </div>

                        {/* Card 10 - Chloe.fit × Gymshark */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
                          <div className="h-12 relative">
                            <Image src={`${BASE_URL}/content/fitness-new.jpg`} alt="" fill className="object-cover" unoptimized />
                            <div className="absolute top-0.5 right-0.5 bg-black/60 rounded-full pl-1 flex items-center gap-px text-[4px] text-white">
                              <svg className="w-[5px] h-[5px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                              <span>23k</span>
                              <span className="bg-amber-500 ml-0.5 pl-0.5 pr-1 py-px rounded-r-full">2.9%</span>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="flex items-center gap-1 mb-1">
                              <Image src={`${BASE_URL}/avatars/chloe-fit.jpg`} alt="Chloe.fit" width={12} height={12} className="w-3 h-3 rounded-full object-cover" unoptimized />
                              <div className="text-[7px] font-medium text-slate-800">Chloe.fit</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/gymshark-logo.png`} alt="Gymshark" width={10} height={10} className="w-full h-full object-contain" unoptimized />
                              </div>
                              <div className="text-[6px] text-slate-500">Gymshark</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom sections - 2 colonnes */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Derniers créateurs - 4 cards */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <h3 className="text-[9px] font-medium text-slate-700">Derniers créateurs</h3>
                            <span className="text-[7px] text-[#279BFF]">Voir tous →</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {/* Creator 1 - Rafoo */}
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 p-1.5">
                              <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-100">
                                <Image src={`${BASE_URL}/avatars/alex-creator.jpg`} alt="Rafoo" width={20} height={20} className="w-5 h-5 rounded-full object-cover" unoptimized />
                                <div>
                                  <div className="text-[7px] font-medium text-slate-800">Rafoo</div>
                                  <div className="text-[6px] text-slate-400">8.2M abonnés</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-1.5">
                                <div>
                                  <div className="text-[8px] font-bold text-slate-700">12</div>
                                  <div className="text-[5px] text-slate-400">partenariats</div>
                                </div>
                                <div className="flex -space-x-1.5">
                                  <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-600 to-green-800 border border-white flex items-center justify-center p-0.5 z-[3]"><Image src={`${BASE_URL}/logos/gucci.png`} alt="Gucci" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                  <div className="w-5 h-5 rounded bg-gray-700 border border-white flex items-center justify-center p-0.5 z-[2]"><Image src={`${BASE_URL}/logos/mercedes.png`} alt="Mercedes" width={14} height={14} className="w-full h-full object-contain" unoptimized /></div>
                                  <div className="w-5 h-5 rounded bg-green-700 border border-white flex items-center justify-center p-0.5 z-[1]"><Image src={`${BASE_URL}/logos/starbucks.png`} alt="Starbucks" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                </div>
                              </div>
                            </div>
                            {/* Creator 2 - jess_xo */}
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 p-1.5">
                              <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-100">
                                <Image src={`${BASE_URL}/avatars/claire-creator.jpg`} alt="jess_xo" width={20} height={20} className="w-5 h-5 rounded-full object-cover" unoptimized />
                                <div>
                                  <div className="text-[7px] font-medium text-slate-800">jess_xo</div>
                                  <div className="text-[6px] text-slate-400">5.1M abonnés</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-1.5">
                                <div>
                                  <div className="text-[8px] font-bold text-slate-700">8</div>
                                  <div className="text-[5px] text-slate-400">partenariats</div>
                                </div>
                                <div className="flex -space-x-1.5">
                                  <div className="w-5 h-5 rounded bg-black border border-white flex items-center justify-center p-0.5 z-[3]"><Image src={`${BASE_URL}/logos/chanel.png`} alt="Chanel" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                  <div className="w-5 h-5 rounded border border-white flex items-center justify-center p-0.5 z-[2]" style={{ backgroundColor: '#5C4033' }}><Image src={`${BASE_URL}/logos/louisvuitton.png`} alt="Louis Vuitton" width={14} height={14} className="w-full h-full object-contain" unoptimized /></div>
                                  <div className="w-5 h-5 rounded bg-red-600 border border-white flex items-center justify-center p-0.5 z-[1]"><Image src={`${BASE_URL}/logos/hm.png`} alt="H&M" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                </div>
                              </div>
                            </div>
                            {/* Creator 3 - Thomzz */}
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 p-1.5">
                              <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-100">
                                <Image src={`${BASE_URL}/avatars/thomas-creator.jpg`} alt="Thomzz" width={20} height={20} className="w-5 h-5 rounded-full object-cover" unoptimized />
                                <div>
                                  <div className="text-[7px] font-medium text-slate-800">Thomzz</div>
                                  <div className="text-[6px] text-slate-400">3.8M abonnés</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-1.5">
                                <div>
                                  <div className="text-[8px] font-bold text-slate-700">6</div>
                                  <div className="text-[5px] text-slate-400">partenariats</div>
                                </div>
                                <div className="flex -space-x-1.5">
                                  <div className="w-5 h-5 rounded bg-blue-800 border border-white flex items-center justify-center p-0.5 z-[3]"><Image src={`${BASE_URL}/logos/playstation.png`} alt="PlayStation" width={14} height={14} className="w-full h-full object-contain" unoptimized /></div>
                                  <div className="w-5 h-5 rounded bg-red-500 border border-white flex items-center justify-center p-0.5 z-[2]"><Image src={`${BASE_URL}/logos/puma.png`} alt="Puma" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                  <div className="w-5 h-5 rounded border border-white flex items-center justify-center p-0.5 z-[1]" style={{ backgroundColor: '#264F36' }}><Image src={`${BASE_URL}/logos/mcdonalds.png`} alt="McDonalds" width={14} height={14} className="w-full h-full object-contain" unoptimized /></div>
                                </div>
                              </div>
                            </div>
                            {/* Creator 4 - Ninouchka */}
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 p-1.5">
                              <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-100">
                                <Image src={`${BASE_URL}/avatars/marie-creator.jpg`} alt="Ninouchka" width={20} height={20} className="w-5 h-5 rounded-full object-cover" unoptimized />
                                <div>
                                  <div className="text-[7px] font-medium text-slate-800">Ninouchka</div>
                                  <div className="text-[6px] text-slate-400">2.9M abonnés</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-1.5">
                                <div>
                                  <div className="text-[8px] font-bold text-slate-700">9</div>
                                  <div className="text-[5px] text-slate-400">partenariats</div>
                                </div>
                                <div className="flex -space-x-1.5">
                                  <div className="w-5 h-5 rounded bg-black border border-white flex items-center justify-center p-0.5 z-[3]"><Image src={`${BASE_URL}/logos/adidas.png`} alt="Adidas" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                  <div className="w-5 h-5 rounded bg-orange-500 border border-white flex items-center justify-center p-0.5 z-[2]"><Image src={`${BASE_URL}/logos/nike.webp`} alt="Nike" width={14} height={14} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                                  <div className="w-5 h-5 rounded bg-green-800 border border-white flex items-center justify-center p-0.5 z-[1]"><Image src={`${BASE_URL}/logos/lacoste.png`} alt="Lacoste" width={14} height={14} className="w-full h-full object-contain" unoptimized /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Dernières marques - liste de 4 */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <h3 className="text-[9px] font-medium text-slate-700">Dernières marques</h3>
                            <span className="text-[7px] text-[#279BFF]">Voir toutes →</span>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm border border-slate-100 divide-y divide-slate-50">
                            <div className="px-1.5 py-[7px] flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/nike.webp`} alt="Nike" width={16} height={16} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="flex-1">
                                <div className="text-[8px] font-medium text-slate-700">Nike</div>
                              </div>
                              <span className="text-[6px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">Sport</span>
                              <span className="text-[7px] text-slate-500">12 partenariats</span>
                            </div>
                            <div className="px-1.5 py-[7px] flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/dior.png`} alt="Dior" width={16} height={16} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="flex-1">
                                <div className="text-[8px] font-medium text-slate-700">Dior</div>
                              </div>
                              <span className="text-[6px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">Luxe</span>
                              <span className="text-[7px] text-slate-500">8 partenariats</span>
                            </div>
                            <div className="px-1.5 py-[7px] flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/spotify.png`} alt="Spotify" width={16} height={16} className="w-full h-full object-contain" unoptimized />
                              </div>
                              <div className="flex-1">
                                <div className="text-[8px] font-medium text-slate-700">Spotify</div>
                              </div>
                              <span className="text-[6px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">Musique</span>
                              <span className="text-[7px] text-slate-500">6 partenariats</span>
                            </div>
                            <div className="px-1.5 py-[7px] flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5">
                                <Image src={`${BASE_URL}/logos/apple.png`} alt="Apple" width={16} height={16} className="w-full h-full object-contain brightness-0 invert" unoptimized />
                              </div>
                              <div className="flex-1">
                                <div className="text-[8px] font-medium text-slate-700">Apple</div>
                              </div>
                              <span className="text-[6px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">Tech</span>
                              <span className="text-[7px] text-slate-500">5 partenariats</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
