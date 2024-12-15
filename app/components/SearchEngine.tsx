"use client";

import { useState } from "react";
import Image from "next/image";
import { PixelBorder } from "./PixelBorder";

interface Item {
  Name?: string;
  Topics?: Item[];
  Icon?: { URL: string };
  FirstURL?: string;
  Text?: string;
}

function RenderItem({ item }: { item: Item }) {
  if (item.Topics) {
    return (
      <div>
        <h3>{item.Name}</h3>
        <ul className="list-disc pl-5">
          {item.Topics.map((topic, index) => (
            <RenderItem key={index} item={topic} />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <li>
      <a
        href={item.FirstURL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {item.Text}
      </a>
    </li>
  );
}

export function SearchEngine() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const searchSound = new Audio("/dialup.mp3");
    searchSound
      .play()
      .catch((err) => console.error("Sound playback failed:", err));

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data.RelatedTopics || []);
    } catch (error) {
      console.error("Search failed:", error);
      setError("Search failed. Please try again later.");
      setResults([]);
    }
  };

  return (
    <PixelBorder>
      <div className="bg-yellow-100 p-4">
        <div className="flex items-center justify-center mb-2">
          <Image
            src="/altavista-logo.gif"
            alt="AltaVista"
            width={200}
            height={50}
            unoptimized
          />
        </div>
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the web"
            className="flex-grow p-2 border border-gray-400 win98-input"
          />
          <button type="submit" className="win98-btn px-4 py-2">
            Search
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div>
          {results.length > 0 && (
            <ul className="list-disc pl-5 mt-4">
              {results.map((item, index) => (
                <RenderItem key={index} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </PixelBorder>
  );
}
