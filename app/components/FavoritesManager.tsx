"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PixelBorder } from "./PixelBorder";

interface Favorite {
  name: string;
  url: string;
}

export function FavoritesManager() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = () => {
    if (newName && newUrl) {
      const updatedFavorites = [...favorites, { name: newName, url: newUrl }];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setNewName("");
      setNewUrl("");
    }
  };

  const removeFavorite = (index: number) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <PixelBorder>
      <div className="bg-gray-200 p-4 flex flex-col items-center justify-start">
        <h2 className="text-xl font-bold mb-4">Favorites Manager</h2>
        <div className="mb-4 flex items-center justify-center">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Website Name"
            className="win98-input mr-2"
          />
          <input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="URL"
            className="win98-input mr-2"
          />
          <button onClick={addFavorite} className="win98-btn">
            Add Favorite
          </button>
        </div>
        <ul className="space-y-2 w-full">
          {favorites.map((fav, index) => (
            <li key={index} className="flex items-center justify-center">
              <Image
                src="/star.gif"
                alt="Favorite"
                width={16}
                height={16}
                className="mr-2"
              />
              <a
                href={fav.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mr-2"
              >
                {fav.name}
              </a>
              <button
                onClick={() => removeFavorite(index)}
                className="win98-btn text-xs"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PixelBorder>
  );
}
