import { PixelBorder } from "./PixelBorder";

export function UpcomingEvents() {
const events = [
    { date: "July 15, 1998", event: "Windows 98 Launch Event" },
    { date: "August 5, 1998", event: "Apple iMac Release" },
    { date: "September 4, 1998", event: "Google Incorporation" },
    { date: "October 1, 1998", event: "Internet Explorer 5.0 Beta Release" },
    { date: "November 10, 1998", event: "Sega Dreamcast Release in Japan" },
    { date: "December 1, 1998", event: "MP3 standard officially published" },
    { date: "January 7, 1999", event: "The Bluetooth 1.0 specification is released" },
    { date: "February 17, 1999", event: "Napster peer-to-peer service goes live" }
  ];

  return (
    <PixelBorder>
      <div className="bg-green-100 p-4">
        <h3 className="text-lg font-bold mb-2">Upcoming Tech Events</h3>
        <ul className="space-y-2">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between">
              <span className="font-bold">{event.date}:</span>
              <span>{event.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </PixelBorder>
  );
}
