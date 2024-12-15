import Image from "next/image";
import { PixelBorder } from "../components/PixelBorder";

export default function Favorites() {
  const favorites = [
    { name: "MSN", url: "https://www.msn.com", icon: "/msn-icon.gif" },
    {
      name: "Hotmail",
      url: "https://outlook.live.com",
      icon: "/hotmail-icon.gif",
    },
    { name: "Yahoo!", url: "https://www.yahoo.com", icon: "/yahoo-icon.gif" },
    {
      name: "AltaVista",
      url: "https://www.altavista.com",
      icon: "/altavista-logo.gif",
    },
    {
      name: "GeoCities",
      url: "https://www.geocities.ws/",
      icon: "/geocities.gif",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Favorites</h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <p className="mb-4">Here are your favorite websites:</p>
          <ul className="space-y-2">
            {favorites.map((favorite) => (
              <li key={favorite.name} className="flex items-center">
                <Image
                  src={favorite.icon}
                  alt={`${favorite.name} icon`}
                  width={70}
                  height={70}
                  className="mr-2"
                />
                <a
                  href={favorite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {favorite.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </PixelBorder>
    </div>
  );
}
