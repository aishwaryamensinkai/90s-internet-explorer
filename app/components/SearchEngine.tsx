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
    // If the item has nested topics, render them recursively
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
      <a href={item.FirstURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {item.Text}
      </a>
    </li>
  );
}

export function SearchEngine() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const searchSound = new Audio("/dialup.mp3");
    searchSound.play().catch(err => console.error("Sound playback failed:", err));

    try {
      const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&pretty=1`);
      const data = await response.json();
      setResults(data.RelatedTopics); // Store all topics directly
    } catch (error) {
      console.error("Search failed:", error);
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
