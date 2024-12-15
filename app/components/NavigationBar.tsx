import Image from "next/image";
import { useRouter } from 'next/navigation';

export function NavigationBar() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleForward = () => {
    router.forward();
  };

  const handleRefresh = () => {
    router.refresh();
  };

  const handleHome = () => {
    router.push('/');
  };

  const handleSearch = () => {
    router.push('/search');
  };

  const handleFavorites = () => {
    alert('Favorites feature coming soon!');
  };

  const handleHistory = () => {
    router.push('/history');
  };

  const handleMail = () => {
    window.open('https://outlook.live.com', '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-300 p-2 mb-4">
      <button className="win98-btn" title="Back" onClick={handleBack}>
        <Image src="/back.gif" alt="Back" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Forward" onClick={handleForward}>
        <Image src="/forward.gif" alt="Forward" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Refresh" onClick={handleRefresh}>
        <Image src="/refresh.gif" alt="Refresh" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Home" onClick={handleHome}>
        <Image src="/home.gif" alt="Home" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Search" onClick={handleSearch}>
        <Image src="/search.gif" alt="Search" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Favorites" onClick={handleFavorites}>
        <Image src="/favorites.gif" alt="Favorites" width={20} height={20} />
      </button>
      <button className="win98-btn" title="History" onClick={handleHistory}>
        <Image src="/history.gif" alt="History" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Mail" onClick={handleMail}>
        <Image src="/mail.gif" alt="Mail" width={20} height={20} />
      </button>
      <button className="win98-btn" title="Print" onClick={handlePrint}>
        <Image src="/print.gif" alt="Print" width={20} height={20} />
      </button>
    </div>
  );
}


