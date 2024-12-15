"use client"
import Image from "next/image";
import { PixelBorder } from "../components/PixelBorder";
import { useState } from "react";

export default function WindowsUpdate() {
  const [updating, setUpdating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);

  const startUpdate = () => {
    setUpdating(true);
    setProgress(0);
    setUpdateComplete(false);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setUpdating(false);
          setUpdateComplete(true);
          return 100;
        }
        return prevProgress + 10; // Increment progress
      });
    }, 1000); // Update progress every second
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Windows Update</h1>
      <PixelBorder>
        <div className="bg-gray-100 p-4">
          <div className="flex items-center mb-4">
            <Image
              src="/windows-update-logo.gif"
              alt="Windows Update"
              width={50}
              height={50}
              className="mr-4"
            />
            <p className="text-lg">
              Keep your Windows 98 system up to date with the latest patches and
              security updates.
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2">Available Updates:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Internet Explorer 5.0 (Recommended)</li>
            <li>Windows Media Player 6.4</li>
            <li>DirectX 7.0</li>
            <li>Security Update for Windows 98 (KB123456)</li>
          </ul>
          <div className="mt-4">
            <button
              onClick={startUpdate}
              className="win98-btn px-4 py-2"
              disabled={updating}
            >
              {updating ? `Updating... ${progress}%` : "Start Update"}
            </button>
          </div>
          {updateComplete && (
            <p className="text-green-500 mt-2">Update Complete!</p>
          )}
        </div>
      </PixelBorder>
      <div className="mt-4 flex space-x-4">
        <Image
          src="/windows-logo.gif"
          alt="Windows Logo"
          width={88}
          height={31}
        />
        <Image src="/ms-logo.gif" alt="Microsoft Logo" width={88} height={31} />
      </div>
    </div>
  );
}
