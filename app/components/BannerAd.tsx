import Image from "next/image";

export function BannerAd() {
  return (
    <div className="text-center">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("You clicked on an ad!");
        }}
      >
        <Image
          src="/banner-ad.gif"
          alt="Banner Ad"
          style={{ minWidth: "1000px" }}
          width={728}
          height={60}
        />
      </a>
    </div>
  );
}
