import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Partenar"
                width={120}
                height={26}
                className="h-5 w-auto filter brightness-0 invert flex-shrink-0 -mt-0.5"
              />
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm font-light">|</span>
                <span className="text-sm font-normal text-gray-300">Blog</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="https://partenar.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                En savoir plus sur Partenar
              </a>
              <span className="text-gray-500">© {new Date().getFullYear()} Partenar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
