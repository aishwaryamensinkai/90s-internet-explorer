"use client";
import { useEffect, useState } from "react";

export function SoundEffect() {
  // State to manage the audio and playback status
  const [audio] = useState(new Audio("/dialup.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Event listeners for playing and stopping the audio
    const playAudio = () => {
      audio.play().catch((error) => console.error("Error playing the sound:", error));
    };

    const stopAudio = () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start
    };

    if (isPlaying) {
      playAudio();
    } else {
      stopAudio();
    }

    // Cleanup function to stop audio when the component unmounts or audio state changes
    return () => {
      stopAudio();
    };
  }, [isPlaying, audio]);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)} className="win98-btn">
        {isPlaying ? "Stop Sound" : "Play Dial-Up Sound"}
      </button>
    </div>
  );
}
