"use client";

import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search the web"
        className="flex-grow p-2 border border-gray-400"
      />
      <button type="submit" className="win98-btn px-4">
        Search
      </button>
    </form>
  );
}
