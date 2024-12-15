"use client";

import { useState } from "react";
import Image from "next/image";

interface SearchResult {
  pageid: number;
  title: string;
  snippet: string;
}

export function SearchEngine() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const searchSound = new Audio("/dialup.mp3");
    searchSound
      .play()
      .catch((err) => console.error("Sound playback failed:", err));

    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
          query
        )}&format=json&origin=*`
      );

      if (!response.ok) {
        throw new Error(
          `Wikipedia API responded with status: ${response.status}`
        );
      }

      const data = await response.json();
      const searchResults = data.query.search.map((item: { pageid: number; title: string; snippet: string }) => ({
        pageid: item.pageid,
        title: item.title,
        snippet: item.snippet,
      }));

      setResults(searchResults);
    } catch (error) {
      console.error("Search failed:", error);
      setError(
        `Search failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border-4 border-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <Image
          src="/altavista-logo.gif"
          alt="AltaVista"
          width={200}
          height={50}
          unoptimized
        />
      </div>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 mb-4"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the web"
          className="flex-grow p-2 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div>
        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((result) => (
              <li
                key={result.pageid}
                className="bg-white p-4 rounded-lg shadow"
              >
                <a
                  href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-lg font-semibold"
                >
                  {result.title}
                </a>
                <p
                  className="mt-2 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: result.snippet }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
