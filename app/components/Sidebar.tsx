import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-300 p-4 border-r-2 border-gray-400">
      <div className="win98-window">
        <h2 className="text-xl font-bold mb-4 bg-blue-800 text-white p-1">
          Quick Links
        </h2>
        <ul className="space-y-2 pl-2">
          <li>
            <a
              href="https://www.msn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MSN.com
            </a>
          </li>
          <li>
            <a
              href="https://outlook.live.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hotmail
            </a>
          </li>
          <li>
            <Link
              href="/windows-update"
              className="text-blue-600 hover:underline"
            >
              Windows Update
            </Link>
          </li>
          <li>
            <Link href="/office" className="text-blue-600 hover:underline">
              Microsoft Office
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4 space-y-2 items-center text-black">
        <div className="text-sm text-center mt-2">Last updated: 12/14/1998</div>
      </div>
    </aside>
  );
}
