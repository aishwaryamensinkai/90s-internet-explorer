"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ICONS = [
  "/ie-logo.png",
  "/netscape.png",
  "/aol.png",
  "/geocities.png",
  "/napster.png",
];

export function HiddenGame() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(ICONS[0]);

  useEffect(() => {
    const konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setIsVisible(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const moveIcon = () => {
        setPosition({
          x: Math.random() * (window.innerWidth - 50),
          y: Math.random() * (window.innerHeight - 50),
        });
        setCurrentIcon(ICONS[Math.floor(Math.random() * ICONS.length)]);
      };
      moveIcon();
      const interval = setInterval(moveIcon, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleClick = () => {
    setScore(score + 1);
    if (score + 1 >= 10) {
      alert(`Congratulations! You've caught 10 '90s icons! You win!`);
      setIsVisible(false);
      setScore(0);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute text-white top-4 left-4">Score: {score}</div>
      <Image
        src={currentIcon}
        alt="90s Icon"
        width={150}
        height={150}
        className="absolute cursor-pointer"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onClick={handleClick}
      />
    </div>
  );
}
