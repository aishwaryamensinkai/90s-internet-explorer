"use client";

import { useState, useEffect } from "react";

export function StatusBar() {
  const [status, setStatus] = useState("Done");

  useEffect(() => {
    const messages = [
      "Connecting...",
      "Sending request...",
      "Receiving data...",
      "Done",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setStatus(messages[index]);
      index = (index + 1) % messages.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-300 p-1 text-xs border-t border-gray-400 flex justify-between items-center">
      <span>{status}</span>
      <span>{new Date().toLocaleTimeString()}</span>
    </div>
  );
}
