import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Partenar"
                width={160}
                height={35}
                className="h-7 w-auto flex-shrink-0 -mt-0.5"
              />
              <div className="flex items-center space-x-3 h-8">
                <span className="text-gray-400 text-2xl font-thin leading-8">|</span>
                <Link href="/" className="text-lg font-normal text-gray-700 leading-8 hover:text-primary transition-colors">Blog</Link>
              </div>
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link 
              href="https://partenar.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              En savoir plus sur Partenar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
