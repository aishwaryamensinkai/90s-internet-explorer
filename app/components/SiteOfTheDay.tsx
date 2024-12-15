import Image from "next/image";
import { PixelBorder } from "./PixelBorder";

export function SiteOfTheDay() {
  return (
    <PixelBorder>
      <div className="bg-blue-100 p-4">
        <h2 className="text-xl font-bold mb-4 bg-blue-600 text-white p-1 text-center">
          Site of the Day
        </h2>
        <div className="text-center">
          <Image
            src="/hamsterdance.gif"
            alt="Hamster Dance"
            width={120}
            height={90}
            className="mx-auto mb-2"
          />
          <a
            href="https://web.archive.org/web/19990224191201/http://www.hamsterdance.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            The Hamster Dance
          </a>
          <p className="text-sm mt-2">
            Dance along with these adorable animated hamsters!
          </p>
        </div>
      </div>
    </PixelBorder>
  );
}
