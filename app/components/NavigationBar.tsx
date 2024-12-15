import Image from "next/image";

export function NavigationBar() {
  const handleButtonClick = (action: string) => {
    alert(`${action} button clicked!`);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-300 p-2 mb-4">
      <button
        className="win98-btn"
        title="Back"
        onClick={() => handleButtonClick("Back")}
      >
        <Image src="/back.gif" alt="Back" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Forward"
        onClick={() => handleButtonClick("Forward")}
      >
        <Image src="/forward.gif" alt="Forward" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Refresh"
        onClick={() => handleButtonClick("Refresh")}
      >
        <Image src="/refresh.gif" alt="Refresh" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Home"
        onClick={() => handleButtonClick("Home")}
      >
        <Image src="/home.gif" alt="Home" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Search"
        onClick={() => handleButtonClick("Search")}
      >
        <Image src="/search.gif" alt="Search" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Favorites"
        onClick={() => handleButtonClick("Favorites")}
      >
        <Image src="/favorites.gif" alt="Favorites" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="History"
        onClick={() => handleButtonClick("History")}
      >
        <Image src="/history.gif" alt="History" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Mail"
        onClick={() => handleButtonClick("Mail")}
      >
        <Image src="/mail.gif" alt="Mail" width={20} height={20} />
      </button>
      <button
        className="win98-btn"
        title="Print"
        onClick={() => handleButtonClick("Print")}
      >
        <Image src="/print.gif" alt="Print" width={20} height={20} />
      </button>
    </div>
  );
}
