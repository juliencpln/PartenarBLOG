import Link from "next/link";
import Image from "next/image";
import { EyeIcon, HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/20/solid";

const BASE_URL = "https://partenar.com";

const CtaBanner = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden overflow-x-clip bg-gradient-to-br from-[#0061FF] to-[#60EFFF] px-6 pt-6 shadow-2xl rounded-xl sm:px-16 sm:pt-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 min-[480px]:pb-12 min-[560px]:pb-16 sm:pb-20 md:pb-16 lg:pb-0">
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
              Commencez aujourd&apos;hui.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-white/90">
              Pendant que vous lisez ceci, de nouveaux partenariats se signent dans votre secteur. Ne passez pas à côté. Inscription gratuite, en quelques secondes.
            </p>
            <div className="mt-10 flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                  href="https://app.partenar.com/register"
                  className="w-full sm:w-auto text-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-50 transition-all"
                >
                  Essayer gratuitement
                </Link>
                <Link href="https://partenar.com/contact" className="w-full sm:w-auto text-center rounded-lg ring-1 ring-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all">
                  Demander une démo
                </Link>
              </div>
              <p className="text-sm text-white italic">
                Aucune carte bancaire requise
              </p>
            </div>
          </div>

          {/* Dashboard Mockup - Fil d'activité */}
          <div className="relative -mt-24 min-[480px]:-mt-12 min-[560px]:-mt-6 sm:-mt-2 md:mt-2 lg:mt-6 flex justify-center lg:justify-start lg:items-center lg:-mr-96 mb-[-140px] min-[480px]:mb-[-140px] min-[560px]:mb-[-160px] sm:mb-[-180px] md:mb-[-160px] lg:mb-0">
            <div className="rounded-lg bg-white shadow-2xl overflow-hidden border border-slate-200/50 lg:ml-16 min-w-[700px] origin-center lg:origin-top-left scale-[0.46] min-[480px]:scale-[0.58] min-[560px]:scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-100">

              {/* App Layout */}
              <div className="flex h-[460px]">

                {/* Sidebar */}
                <div className="w-[160px] bg-white flex flex-col border-r border-slate-100">
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

                  {/* Nav */}
                  <nav className="flex-1 px-2 space-y-0.5">
                    {/* Fil d'activité - Active */}
                    <a className="flex items-center gap-2 px-2 py-1.5 bg-blue-50/80 rounded-md">
                      <svg className="w-3.5 h-3.5 text-[#279BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                      <span className="text-[10px] font-medium text-[#279BFF]">{"Fil d'activité"}</span>
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
                    <a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                      <span className="text-[10px]">Cartographie</span>
                      <span className="text-[7px] bg-blue-100 text-blue-600 px-1 py-px rounded font-medium">BETA</span>
                    </a>

                    {/* Campagnes Section */}
                    <div className="border-t border-slate-100 my-1.5 pt-1">
                      <div className="px-2 py-1 flex items-center justify-between">
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">Campagnes</span>
                        <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                      </div>
                      <a className="flex items-center gap-2 px-2 py-1 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span className="text-[10px]">Q1 2026</span>
                      </a>
                      <a className="flex items-center gap-2 px-2 py-1 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-[10px]">Sport</span>
                      </a>
                      <a className="flex items-center gap-2 px-2 py-1 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                        <span className="text-[10px]">Beauté</span>
                      </a>
                      <a className="flex items-center gap-2 px-2 py-1 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                        <span className="text-[10px]">Mode été</span>
                      </a>
                    </div>
                  </nav>

                  {/* Bottom links */}
                  <div className="p-2 border-t border-slate-100 space-y-0.5">
                    <a className="flex items-center gap-2 px-2 py-1 text-slate-500 text-[10px]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"/></svg>
                      Blog
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1 text-slate-500 text-[10px]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                      Contact
                    </a>
                    <a className="flex items-center gap-2 px-2 py-1 text-slate-500 text-[10px]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Right area: top bar + content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Top bar spanning full width */}
                  <div className="px-3 py-1.5 flex items-center justify-between bg-white border-b border-slate-100">
                    <h1 className="text-[11px] font-semibold text-slate-800">{"Fil d'activité"}</h1>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] text-slate-500">M. Dupont</span>
                      <div className="w-5 h-5 rounded-full bg-[#279BFF] flex items-center justify-center text-white text-[7px] font-medium">MD</div>
                    </div>
                  </div>

                  {/* Main + Right sidebar row */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Main content - Fil d'activité */}
                    <div className="flex-1 bg-white flex flex-col overflow-hidden">
                      {/* Content with rounded corner */}
                      <div className="flex-1 bg-[#f8fafc] rounded-tl-xl overflow-hidden">
                  <div className="p-3">
                    {/* Tabs + Actions */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-medium text-white bg-[#279BFF] px-2.5 py-0.5 rounded-full">Tout</span>
                      <span className="text-[10px] text-slate-500 px-2 py-0.5">Créateurs</span>
                      <span className="text-[10px] text-slate-500 px-2 py-0.5">Marques</span>
                      <div className="ml-auto flex items-center gap-3">
                        <span className="text-[8px] text-[#279BFF] font-medium cursor-pointer">Actualiser</span>
                        <span className="text-[8px] text-slate-400 cursor-pointer">Voir mes abonnements</span>
                      </div>
                    </div>

                    {/* Activity Feed Items */}
                    <div className="space-y-1.5">
                      {/* Item 1 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/fashion-1.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/clara-style.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">claaara</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/dior.png`} alt="" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Dior</span>
                            <span className="ml-auto text-[7px] text-slate-400">2h</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Mon look du jour avec la nouvelle collection Dior printemps</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />1.2M</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />89K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />1.4K</span>
                            <span className="text-[7px] font-medium text-emerald-500">7.4%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 2 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/gymshark-gym.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/hugo-fit.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">hug0_</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/gymshark-logo.png`} alt="" width={10} height={10} className="w-full h-full object-contain" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Gymshark</span>
                            <span className="ml-auto text-[7px] text-slate-400">5h</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Ma routine d&apos;entraînement avec le nouveau set Gymshark</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />340K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />24K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />890</span>
                            <span className="text-[7px] font-medium text-emerald-500">7.1%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 3 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/beauty-new.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/mia-beauty.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">mia.b</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/chanel.png`} alt="" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Chanel</span>
                            <span className="ml-auto text-[7px] text-slate-400">8h</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Get ready with me avec les nouveautés Chanel</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />567K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />42K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />2.1K</span>
                            <span className="text-[7px] font-medium text-emerald-500">7.8%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 4 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/adidas-sneakers.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/lucas-vlogs.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">lucas.vlogs</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/adidas.png`} alt="" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Adidas</span>
                            <span className="ml-auto text-[7px] text-slate-400">12h</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Unboxing des nouvelles Adidas Ultraboost, lien en bio</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />210K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />18K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />760</span>
                            <span className="text-[7px] font-medium text-amber-500">4.2%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 5 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/starbucks-coffee.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/emma-new.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">itsemma</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-[#00704A] flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/starbucks.png`} alt="" width={10} height={10} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Starbucks</span>
                            <span className="ml-auto text-[7px] text-slate-400">1j</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Mon café du matin avec le nouveau frappé Starbucks</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />234K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />15K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />890</span>
                            <span className="text-[7px] font-medium text-emerald-500">6.8%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 6 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/mercedes-new.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/flo-travel.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">flo.jpg</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-slate-800 flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/mercedes.png`} alt="" width={10} height={10} className="w-full h-full object-contain" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Mercedes</span>
                            <span className="ml-auto text-[7px] text-slate-400">1j</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Road trip sur la côte avec la nouvelle Mercedes EQS</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />1.8M</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />76K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />2.9K</span>
                            <span className="text-[7px] font-medium text-emerald-500">5.2%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 7 */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/spotify-music.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/mathis-v.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">mathis_music</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-black flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/spotify.png`} alt="" width={10} height={10} className="w-full h-full object-contain" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">Spotify</span>
                            <span className="ml-auto text-[7px] text-slate-400">2j</span>
                          </div>
                          <p className="text-[8px] text-slate-500 mt-0.5 line-clamp-1">Ma playlist été est dispo sur Spotify, lien dans ma bio</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><EyeIcon className="w-2 h-2" />567K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><HeartIcon className="w-2 h-2" />28K</span>
                            <span className="text-[7px] text-slate-400 flex items-center gap-0.5"><ChatBubbleLeftIcon className="w-2 h-2" />1.2K</span>
                            <span className="text-[7px] font-medium text-emerald-500">5.1%</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 8 - partially visible */}
                      <div className="bg-white rounded-md border border-slate-100 px-2 py-1.5 flex gap-2">
                        <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0 relative">
                          <Image src={`${BASE_URL}/content/playstation-gaming.jpg`} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative flex-shrink-0"><Image src={`${BASE_URL}/avatars/theo-gaming.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">theo.g</span>
                            <span className="text-[8px] text-slate-300">×</span>
                            <div className="w-3 h-3 rounded bg-blue-700 flex items-center justify-center p-px flex-shrink-0"><Image src={`${BASE_URL}/logos/playstation.png`} alt="" width={10} height={10} className="w-full h-full object-contain" unoptimized /></div>
                            <span className="text-[9px] font-medium text-slate-800">PlayStation</span>
                            <span className="ml-auto text-[7px] text-slate-400">2j</span>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>

                    {/* Right Sidebar */}
                    <div className="w-[170px] bg-[#f8fafc] border-l border-slate-100 overflow-hidden flex flex-col">
                      <div className="p-3 space-y-3 flex-1 overflow-hidden">
                    {/* Cette semaine */}
                    <div>
                      <h3 className="text-[9px] font-medium text-slate-500 mb-2">Cette semaine</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between bg-white rounded-md px-2 py-1.5 border border-slate-100">
                          <span className="text-[9px] text-slate-600">Créateurs</span>
                          <span className="text-[10px] font-semibold text-emerald-500">+10</span>
                        </div>
                        <div className="flex items-center justify-between bg-white rounded-md px-2 py-1.5 border border-slate-100">
                          <span className="text-[9px] text-slate-600">Partenariats</span>
                          <span className="text-[10px] font-semibold text-emerald-500">+216</span>
                        </div>
                        <div className="flex items-center justify-between bg-white rounded-md px-2 py-1.5 border border-slate-100">
                          <span className="text-[9px] text-slate-600">Marques</span>
                          <span className="text-[10px] font-semibold text-emerald-500">+102</span>
                        </div>
                      </div>
                    </div>

                    {/* Top partenariats */}
                    <div>
                      <h3 className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mb-2">Top partenariats</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold text-amber-500 w-2.5">1</span>
                          <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src={`${BASE_URL}/avatars/clara-style.jpg`} alt="" fill className="object-cover" unoptimized />
                          </div>
                          <span className="text-[9px] text-slate-700 truncate flex-1">Clara × Dior</span>
                          <span className="text-[8px] text-emerald-500 font-medium">7.4%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold text-slate-400 w-2.5">2</span>
                          <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src={`${BASE_URL}/avatars/hugo-fit.jpg`} alt="" fill className="object-cover" unoptimized />
                          </div>
                          <span className="text-[9px] text-slate-700 truncate flex-1">Hugo × Gymshark</span>
                          <span className="text-[8px] text-emerald-500 font-medium">7.1%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold text-amber-700 w-2.5">3</span>
                          <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src={`${BASE_URL}/avatars/mia-beauty.jpg`} alt="" fill className="object-cover" unoptimized />
                          </div>
                          <span className="text-[9px] text-slate-700 truncate flex-1">Mia × Chanel</span>
                          <span className="text-[8px] text-emerald-500 font-medium">7.8%</span>
                        </div>
                      </div>
                    </div>

                    {/* Top créateurs */}
                    <div>
                      <h3 className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mb-2">Top créateurs</h3>
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full overflow-hidden relative border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/avatars/clara-style.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                        <div className="w-5 h-5 rounded-full overflow-hidden relative border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/avatars/hugo-fit.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                        <div className="w-5 h-5 rounded-full overflow-hidden relative border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/avatars/mia-beauty.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                        <div className="w-5 h-5 rounded-full overflow-hidden relative border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/avatars/emma-new.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                        <div className="w-5 h-5 rounded-full overflow-hidden relative border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/avatars/lucas-vlogs.jpg`} alt="" fill className="object-cover" unoptimized /></div>
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[7px] text-slate-500 border-2 border-[#f8fafc]">+8</div>
                      </div>
                    </div>

                    {/* Top marques */}
                    <div>
                      <h3 className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mb-2">Top marques</h3>
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5 border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/logos/dior.png`} alt="" width={12} height={12} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                        <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5 border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/logos/chanel.png`} alt="" width={12} height={12} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                        <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5 border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/logos/adidas.png`} alt="" width={12} height={12} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                        <div className="w-5 h-5 rounded bg-[#00704A] flex items-center justify-center p-0.5 border-2 border-[#f8fafc]"><Image src={`${BASE_URL}/logos/starbucks.png`} alt="" width={12} height={12} className="w-full h-full object-contain brightness-0 invert" unoptimized /></div>
                        <div className="w-5 h-5 rounded bg-slate-200 flex items-center justify-center text-[7px] text-slate-500 border-2 border-[#f8fafc]">+12</div>
                      </div>
                    </div>

                    {/* Suggestions */}
                    <div>
                      <h3 className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mb-2">Suggestions</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src={`${BASE_URL}/avatars/naya-new.jpg`} alt="" fill className="object-cover" unoptimized />
                          </div>
                          <span className="text-[9px] text-slate-700 truncate flex-1">nayaaa</span>
                          <span className="text-[8px] text-[#279BFF] font-medium flex-shrink-0">Suivre</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src={`${BASE_URL}/avatars/flo-travel.jpg`} alt="" fill className="object-cover" unoptimized />
                          </div>
                          <span className="text-[9px] text-slate-700 truncate flex-1">flo_xplr</span>
                          <span className="text-[8px] text-[#279BFF] font-medium flex-shrink-0">Suivre</span>
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
