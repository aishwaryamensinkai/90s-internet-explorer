import Image from "next/image";

export default function FrameLeft() {
  return (
    <div className="p-2 bg-yellow-200 h-full overflow-auto">
      <h2 className="text-xl font-bold mb-2 text-purple-700">Cool Links</h2>
      <ul className="list-disc list-inside">
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
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://www.geocities.ws/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GeoCities
          </a>
        </li>
      </ul>
      <div className="mt-4">
        <Image
          src="/best-viewed-ie.gif"
          alt="Best viewed with Internet Explorer"
          width={88}
          height={31}
        />
      </div>
    </div>
  );
}
