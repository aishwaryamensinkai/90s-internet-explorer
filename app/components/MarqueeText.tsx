export function MarqueeText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-red-600 font-bold">{text}</span>
      </div>
    </div>
  );
}
