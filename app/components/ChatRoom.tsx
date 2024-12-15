"use client";

import { useState } from "react";
import { PixelBorder } from "./PixelBorder";

export function ChatRoom() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <PixelBorder>
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4 bg-green-600 text-white p-1 text-center">
          Chat Room
        </h2>
        <div className="bg-white border border-gray-300 h-40 overflow-y-auto mb-4 p-2">
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>Guest{index + 1}:</strong> {msg}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-300"
            placeholder="Type your message..."
          />
          <button type="submit" className="win98-btn px-4 ml-2">
            Send
          </button>
        </form>
      </div>
    </PixelBorder>
  );
}
