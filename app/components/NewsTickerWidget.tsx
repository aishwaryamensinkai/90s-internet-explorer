import { PixelBorder } from "./PixelBorder";
import { MarqueeText } from "./MarqueeText";

export function NewsTickerWidget() {
  const news =
    "Breaking: Microsoft releases Windows 98 | Apple unveils iMac | Google founders incorporate company";

  return (
    <PixelBorder>
      <div className="bg-gray-100 p-4">
        <h3 className="text-lg font-bold mb-2">Latest News</h3>
        <div className="bg-blue-800 text-white p-2">
          <MarqueeText text={news} />
        </div>
      </div>
    </PixelBorder>
  );
}
