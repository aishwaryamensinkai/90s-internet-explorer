"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CLIPPY_MESSAGES = [
  "It looks like you're trying to browse the web. Would you like help?",
  "Did you know you can add this page to your favorites?",
  "Having trouble finding what you're looking for? Try using the search bar!",
  "Remember to check your email! You've got mail!",
  "Why not try customizing your desktop? Right-click for options!",
];

export function Clippy() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showClippy = () => {
      if (Math.random() < 1) {
        // 10% chance of Clippy appearing
        setIsVisible(true);
        setMessage(
          CLIPPY_MESSAGES[Math.floor(Math.random() * CLIPPY_MESSAGES.length)]
        );
        setTimeout(() => setIsVisible(false), 5000); // Hide after 5 seconds
      }
    };

    const interval = setInterval(showClippy, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-400 p-4 rounded-lg shadow-lg z-50">
      <div className="flex items-start">
        <Image
          src="/clippy.gif"
          alt="Clippy"
          width={100}
          height={100}
          className="mr-2"
        />
        <div>
          <p className="text-lg">{message}</p>
          <button
            onClick={() => setIsVisible(false)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
