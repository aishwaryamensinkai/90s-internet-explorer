import Image from "next/image";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-blue-900 flex flex-col items-center justify-center">
      <Image
        src="/ie-logo.png"
        alt="Internet Explorer Logo"
        width={100}
        height={100}
        className="animate-bounce"
      />
      <div className="mt-4 text-white font-bold text-xl">Loading...</div>
      <div className="mt-2 w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-load"></div>
      </div>
    </div>
  );
}
