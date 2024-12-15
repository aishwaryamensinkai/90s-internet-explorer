"use client";

import { useState } from "react";
import Image from "next/image";

export function Guestbook() {
  const [entries, setEntries] = useState<string[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.trim() && name.trim()) {
      setEntries([`${name}: ${newEntry}`, ...entries]);
      setNewEntry("");
      setName("");
    }
  };

  return (
    <div className="win98-window p-4">
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <Image
          src="/guestbook.gif"
          alt="Guestbook"
          width={32}
          height={32}
          className="mr-2"
        />
        Guestbook
      </h3>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300"
        />
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Leave a message"
          className="w-full p-2 border border-gray-300 h-20"
        />
        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        >
          Sign Guestbook
        </button>
      </form>
      <div className="max-h-40 overflow-y-auto text-lg bg-white p-2 border border-gray-300">
        {entries.map((entry, index) => (
          <p key={index} className="mb-1">
            <Image
              src="/smiley.gif"
              alt="Smiley"
              width={70}
              height={70}
              className="inline mr-2"
            />
            {entry}
          </p>
        ))}
      </div>
    </div>
  );
}
