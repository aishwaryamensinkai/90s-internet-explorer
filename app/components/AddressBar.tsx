"use client";

import { useState } from "react";
import Image from "next/image";

export function AddressBar() {
  const [address, setAddress] = useState("https://www.microsoft.com/ie/");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Ensure the URL starts with http:// or https://
  const fullUrl = address.startsWith('http://') || address.startsWith('https://') ? address : `https://${address}`;
  window.open(fullUrl, '_blank');
};


  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 bg-white p-2 border-2 border-gray-400"
    >
      <Image src="/globe-icon.gif" alt="Address" width={16} height={16} />
      <span className="font-bold">Address:</span>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="flex-grow p-1 border border-gray-400"
      />
      <button type="submit" className="win98-btn px-4">
        Go
      </button>
    </form>
  );
}
