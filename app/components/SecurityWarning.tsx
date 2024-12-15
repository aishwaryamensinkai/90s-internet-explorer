import Image from "next/image";

export function SecurityWarning({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-200 p-4 border-2 border-gray-400 shadow-lg max-w-md">
        <div className="flex items-center mb-4">
          <Image
            src="/warning.gif"
            alt="Warning"
            width={32}
            height={32}
            className="mr-2"
          />
          <h2 className="text-xl font-bold">Security Warning</h2>
        </div>
        <p className="mb-4">
          This file type can harm your computer. Are you sure you want to
          download this file?
        </p>
        <div className="flex justify-end space-x-2">
          <button className="win98-btn px-4" onClick={onClose}>
            Cancel
          </button>
          <button className="win98-btn px-4" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
