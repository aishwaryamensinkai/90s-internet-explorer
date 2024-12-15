"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-200 border-2 border-gray-400 p-4 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Welcome to the World Wide Web!</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="win98-btn px-2 py-1"
          >
            X
          </button>
        </div>
        <Image
          src="/ie-logo.png"
          alt="Internet Explorer Logo"
          width={64}
          height={64}
          className="mx-auto mb-4"
        />
        <p className="mb-4">
          Welcome to the exciting world of the Internet! Here are some tips to
          get you started:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Click on blue, underlined text to follow links</li>
          <li>Use the Back and Forward buttons to navigate</li>
          <li>Bookmark your favorite sites for easy access</li>
          <li>Stay safe online and do not share personal information</li>
        </ul>
        <button
          onClick={() => setIsVisible(false)}
          className="win98-btn px-4 py-2 mx-auto block"
        >
          Start Surfing!
        </button>
      </div>
    </div>
  );
}
