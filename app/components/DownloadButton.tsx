import { useState, useEffect } from "react";
import Image from "next/image";

// Define a type for the props
type DownloadButtonProps = {
  onDownload: () => void; // Include the onDownload function in the prop types
};

export function DownloadButton({ onDownload }: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (downloading) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setDownloading(false);
            onDownload(); // Call onDownload when download is complete
            return 0;
          }
          return prevProgress + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [downloading, onDownload]); // Add onDownload to the dependency array

  const handleDownload = () => {
    setDownloading(true);
    setProgress(0);
  };

  return (
    <div className="win98-window p-4 inline-block">
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded disabled:opacity-50 flex items-center"
      >
        <Image
          src="/download-icon.gif"
          alt="Download"
          width={16}
          height={16}
          className="mr-2"
        />
        {downloading ? "Downloading..." : "Download Now!"}
      </button>
      {downloading && (
        <div className="mt-2">
          <div className="text-sm mb-1">Downloading: {progress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs mt-1">
            Estimated time remaining: {Math.ceil((100 - progress) / 10)} seconds
          </div>
        </div>
      )}
    </div>
  );
}
