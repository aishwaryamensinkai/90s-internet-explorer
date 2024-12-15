"use client"
import { useState } from "react";
import { PixelBorder } from "../components/PixelBorder";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState(""); // State to hold the submit confirmation message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(`Thank you for your message, ${name}! We'll get back to you soon.`);
    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <p className="mb-4">
            Have a question or comment? Fill out the form below to get in touch
            with the Internet Explorer team!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-400 win98-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-400 win98-input"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-2 border border-gray-400 win98-input h-32"
              ></textarea>
            </div>
            <button type="submit" className="win98-btn px-4 py-2">
              Send Message
            </button>
          </form>
          {submitMessage && (
            <div className="mt-4 text-green-600 font-bold">
              {submitMessage}
            </div>
          )}
        </div>
      </PixelBorder>
      <div className="mt-4 text-center">
        <p className="text-sm">
          For immediate assistance, call our support hotline:
        </p>
        <p className="text-lg font-bold">1-800-INTERNET</p>
      </div>
    </div>
  );
}
