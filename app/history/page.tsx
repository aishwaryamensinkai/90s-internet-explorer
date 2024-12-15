"use client";
import { useState } from "react";
import Image from "next/image";
import { PixelBorder } from "../components/PixelBorder";

export default function History() {
  const initialHistoryItems = [
    {
      title: "Welcome to Internet Explorer",
      url: "/",
      date: "6/15/1998",
      description:
        "The gateway to the early internet, exploring the web starts here!",
    },
    {
      title: "Yahoo! - World's Largest Search Engine",
      url: "https://www.yahoo.com",
      date: "6/14/1998",
      description: "Your daily source of news, sports, finance, and more.",
    },
    {
      title: "AltaVista: The Most Powerful and Useful Guide to the Net",
      url: "https://www.altavista.com",
      date: "6/13/1998",
      description: "Search the web using the pioneer powerful search engine.",
    },
    {
      title: "GeoCities - Welcome to GeoCities!",
      url: "https://www.geocities.ws/",
      date: "6/12/1998",
      description: "Host your own web pages and join community interests.",
    },
    {
      title: "Microsoft Network (MSN) - The World Online",
      url: "https://www.msn.com",
      date: "6/11/1998",
      description:
        "Connect with the world and enjoy integrated Microsoft services.",
    },
  ];

  const [historyItems, setHistoryItems] = useState(initialHistoryItems);

  const clearHistory = () => {
    setHistoryItems([]); // Clears the history array
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">History</h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <p className="mb-4">Your browsing history:</p>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Title</th>
                <th className="border border-gray-400 p-2">URL</th>
                <th className="border border-gray-400 p-2">Description</th>
                <th className="border border-gray-400 p-2">Date Visited</th>
              </tr>
            </thead>
            <tbody>
              {historyItems.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="border border-gray-400 p-2">
                    <div className="flex items-center">{item.title}</div>
                  </td>
                  <td className="border border-gray-400 p-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.url}
                    </a>
                  </td>
                  <td className="border border-gray-400 p-2">
                    {item.description}
                  </td>
                  <td className="border border-gray-400 p-2">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PixelBorder>
      <div className="mt-4">
        <br />
        Click here!!
        <Image
          src="/clear-history.gif"
          alt="Clear History"
          width={88}
          height={31}
          onClick={clearHistory} // Add onClick event to clear history
        />
      </div>
    </div>
  );
}
