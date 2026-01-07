import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <Link href="https://partenar.com/cgu" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">CGU</Link>
            <Link href="https://partenar.com/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Confidentialité</Link>
            <Link href="https://partenar.com/legal" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Mentions légales</Link>
            <Link href="https://partenar.com/contact" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Contact</Link>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Blog</Link>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Partenar
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
