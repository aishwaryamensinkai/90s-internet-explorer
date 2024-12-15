"use client";

import Image from "next/image";
import { DownloadButton } from "../components/DownloadButton";
import { WebCounter } from "../components/WebCounter";
import { Guestbook } from "../components/Guestbook";
// import { SoundEffect } from "../components/SoundEffect";

export default function FrameMain() {
  return (
    <div className="p-2 bg-white h-full overflow-auto">
      {/* <SoundEffect /> */}
      <h1 className="text-4xl font-bold mb-4 text-blue-800">
        Welcome to Internet Explorer
      </h1>
      <p className="mb-4">
        Surf the information superhighway with the worlds most popular browser!
      </p>
      <div className="mb-4 text-center">
        <Image
          src="/ie-logo.png"
          alt="Internet Explorer Logo"
          width={200}
          height={200}
          className="inline-block"
        />
      </div>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2" colSpan={2}>
              What is New in Internet Explorer 4.0
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Faster browsing</td>
            <td className="border border-gray-400 p-2">JScript support</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Enhanced security</td>
            <td className="border border-gray-400 p-2">SSL 3.0 and TLS 1.0</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Customizable toolbars
            </td>
            <td className="border border-gray-400 p-2">
              Active Desktop integration
            </td>
          </tr>
        </tbody>
      </table>
      <div className="bg-yellow-200 border border-yellow-400 p-2 mb-4">
        <div className="text-red-600 font-bold marquee1">
          New! Download Internet Explorer 4.0 now for the best web experience!
          Compatible with Windows 95, 98, and NT!
        </div>
      </div>
      <DownloadButton
        onDownload={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <WebCounter />
      <Guestbook />
    </div>
  );
}
