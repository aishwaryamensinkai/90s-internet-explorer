import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-300 p-4 border-b-2 border-gray-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/ie-logo.png" alt="IE Logo" width={80} height={80} />
          <h1 className="text-3xl font-bold ml-2 text-blue-800">
            Internet Explorer
          </h1>
        </div>
        <nav className="win98-window p-1 text-lg">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/favorites" className="text-blue-600 hover:underline">
                Favorites
              </Link>
            </li>
            <li>
              <Link href="/history" className="text-blue-600 hover:underline">
                History
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-blue-600 hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
