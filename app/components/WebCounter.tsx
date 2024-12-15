"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function WebCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    setCount(initialCount + 1);
    localStorage.setItem("visitorCount", (initialCount + 1).toString());
  }, []);

  return (
    <div className="win98-window p-4 text-center">
      <h3 className="text-lg font-bold mb-2">Visitor Counter</h3>
      <Image
        src="/counter.gif"
        alt="Visitor Counter"
        width={88}
        height={31}
        className="mx-auto mb-2"
      />
      <div className="bg-black text-green-400 font-mono px-2 py-1 inline-block">
        {count.toString().padStart(6, "0")}
      </div>
      <p className="text-sm mt-2">You are visitor number {count}!</p>
    </div>
  );
}
