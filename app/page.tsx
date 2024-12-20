"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DownloadButton } from "./components/DownloadButton";
import { WebCounter } from "./components/WebCounter";
import { Guestbook } from "./components/Guestbook";
// import { SoundEffect } from "./components/SoundEffect";
import { LoadingScreen } from "./components/LoadingScreen";
import { PixelBorder } from "./components/PixelBorder";
import { MarqueeText } from "./components/MarqueeText";
import { CRTEffect } from "./components/CRTEffect";
import { DialUpAnimation } from "./components/DialUpAnimation";
import { NavigationBar } from "./components/NavigationBar";
import { AddressBar } from "./components/AddressBar";
import { StatusBar } from "./components/StatusBar";
import { SecurityWarning } from "./components/SecurityWarning";
import { WeatherWidget } from "./components/WeatherWidget";
import { NewsTickerWidget } from "./components/NewsTickerWidget";
import { BannerAd } from "./components/BannerAd";
import { SearchEngine } from "./components/SearchEngine";
import { StockTicker } from "./components/StockTicker";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { Clippy } from "./components/Clippy";
import { HiddenGame } from "./components/HiddenGame";
import { FavoritesManager } from "./components/FavoritesManager";
import { WelcomePopup } from "./components/WelcomePopup";
import { BlinkingText } from "./components/BlinkingText";
import { SiteOfTheDay } from "./components/SiteOfTheDay";
import { ChatRoom } from "./components/ChatRoom";
import { EmailNotification } from "./components/EmailNotification";
import { WebDirectory } from "./components/WebDirectory";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSecurityWarning, setShowSecurityWarning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <CRTEffect>
      <div className="space-y-4 p-4">
        {/* <SoundEffect /> */}
        <DialUpAnimation />
        <WelcomePopup />
        <EmailNotification />

        <NavigationBar />
        <AddressBar />

        {/* Header Section */}
        <PixelBorder>
          <div className="text-center space-y-4 bg-blue-100 p-4">
            <h1 className="text-4xl font-bold text-blue-800 blink text-shadow-retro">
              Welcome to Internet Explorer
            </h1>
            <p className="text-lg">
              Surf the information superhighway with the worlds most popular
              browser!
            </p>
          </div>
        </PixelBorder>

        {/* Main Content */}
        <FavoritesManager />
        <SearchEngine />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StockTicker />
          <UpcomingEvents />
        </div>

        <BannerAd />

        {/* Main Content Table */}
        <PixelBorder>
          <table className="w-full bg-gray-100">
            <thead>
              <tr>
                <th className="p-4 bg-blue-200" colSpan={2}>
                  <Image
                    src="/new.gif"
                    alt="New!"
                    width={30}
                    height={15}
                    className="inline mr-2"
                  />
                  What is New in Internet Explorer 4.0
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Faster browsing experience with JScript</li>
                    <li>Enhanced security features (SSL 3.0, TLS 1.0)</li>
                    <li>
                      Customizable toolbars and flexible component integration
                    </li>
                    <li>Dynamic HTML for interactive web pages</li>
                  </ul>
                </td>
                <td className="p-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Seamless integration with Windows 98 Active Desktop</li>
                    <li>Improved Java Virtual Machine performance</li>
                    <li>Support for CSS and XML</li>
                    <li>Outlook Express email and news client included</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </PixelBorder>

        {/* Download Section */}
        <PixelBorder>
          <div className="text-center space-y-4 bg-yellow-200 p-4">
            <MarqueeText text="New! Download Internet Explorer 4.0 now for the best web experience! Compatible with Windows 95, 98, and NT!" />
            <DownloadButton onDownload={() => setShowSecurityWarning(true)} />
          </div>
        </PixelBorder>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SiteOfTheDay />
          <ChatRoom />
        </div>

        {/* Web Buttons */}
        <div className="flex justify-center space-x-4 my-6">
          <Image
            src="/best-viewed-ie.gif"
            alt="Best viewed with IE"
            width={88}
            height={31}
          />
          <Image
            src="/netscape-now.gif"
            alt="Netscape Now"
            width={88}
            height={31}
          />
          <Image src="/geocities.gif" alt="GeoCities" width={88} height={31} />
        </div>

        {/* Cool Links Section */}
        <PixelBorder>
          <div className="p-4 bg-gray-300">
            <h2 className="text-xl font-bold mb-2 bg-blue-800 text-white p-1">
              Cool Links
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="https://www.spacejam.com/1996/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Space Jam
                </a>
              </li>
              <li>
                <a
                  href="https://archive.org/web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Wayback Machine
                </a>
              </li>
              <li>
                <a
                  href="https://www.windows93.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Windows 93
                </a>
              </li>
              <li>
                <a
                  href="https://www.cameronsworld.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Cameron&apos;s World
                </a>
              </li>
            </ul>
          </div>
          <WebDirectory />
        </PixelBorder>

        {/* News Section */}
        <NewsTickerWidget />

        {/* Counter and Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WebCounter />
          <WeatherWidget />
        </div>

        {/* Guestbook */}
        <Guestbook />

        {/* Under Construction */}
        <div className="text-center mt-8">
          <Image
            src="/under-construction.gif"
            alt="Under Construction"
            width={1000}
            height={100}
            className="mx-auto"
          />
          <BlinkingText
            text="This site is under construction. Please check back soon!"
            className="text-2xl mt-2"
          />
        </div>

        <StatusBar />

        {/* Clippy and HiddenGame */}
        <Clippy />
        <HiddenGame />
      </div>
      {showSecurityWarning && (
        <SecurityWarning onClose={() => setShowSecurityWarning(false)} />
      )}
    </CRTEffect>
  );
}
