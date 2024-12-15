import Image from "next/image";
import Link from "next/link";
import { PixelBorder } from "./components/PixelBorder";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#008080] flex items-center justify-center">
      <PixelBorder>
        <div className="bg-gray-200 p-8 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            404 - Page Not Found
          </h1>
          <Image
            src="/404.gif"
            alt="404 Error"
            width={200}
            height={150}
            className="mx-auto mb-4"
          />
          <p className="text-lg mb-4">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="mb-4">It might have been moved or deleted.</p>
          <Link href="/" className="win98-btn inline-block px-4 py-2">
            Return to Homepage
          </Link>
        </div>
      </PixelBorder>
    </div>
  );
}
