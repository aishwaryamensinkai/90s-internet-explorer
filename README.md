# 🌐 90s Internet Explorer Recreation

A nostalgic journey back to the 1990s web browsing experience, created for the [Codédex Holiday Hackathon 2024](https://www.codedex.io/holiday-hackathon). This project recreates the classic Internet Explorer interface with period-accurate design elements and interactions.

![Internet Explorer Screenshot](/public/ie-banner.gif)


## 🎄 Codédex Holiday Hackathon 2024

This project is our entry for the Codédex Holiday Hackathon, taking place from December 13-15, 2024. The theme of the hackathon is to create a fun, holiday-themed project that showcases our coding skills and creativity.

### Hackathon Details:
- **Date**: December 13-15, 2024
- **Theme**: Holiday Coding Fun
- **Our Approach**: We've recreated the classic Internet Explorer experience with a holiday twist, combining nostalgia with modern web development techniques.

# 📖 Project Description

Step back in time to the dawn of the internet age with our faithful recreation of the classic Internet Explorer experience. This project aims to capture the essence of web browsing in the late 1990s, complete with all the quirks, charms, and limitations of the era. It's a nostalgic journey for those who lived through it and an educational experience for younger developers to understand the roots of web development.

## 🎮 Features

- 📟 Authentic Windows 98-style interface
- 🔊 Dial-up connection sound effect on page load
- 📝 Interactive guestbook for visitors to leave messages
- 📊 Live stock ticker featuring 90s tech companies
- 🌤 Weather widget with retro graphics
- 📰 News ticker with headlines from the 90s
- 📈 Visitor counter (because every 90s website had one!)
- 🎯 Functional search bar styled after AltaVista
- 💾 Download button with a progress bar for that authentic slow download experience
- 🖼 Abundant use of animated GIFs and retro web graphics
- 📱 Responsive design (ironically, as this wasn't a concern in the 90s)
- 🚧 "Under Construction" sections (eternally under construction, as was tradition)
- 🔗 Web rings and "Best viewed with Internet Explorer" badges

## 🛠 Technologies Used

- **Next.js 14**: For server-side rendering and optimal performance
- **TypeScript**: For type-safe code and improved developer experience
- **Tailwind CSS**: For rapid UI development with a 90s aesthetic twist
- **React Server Components**: For efficient, server-side rendered React components
- **Web Audio API**: For implementing the dial-up connection sound
- **LocalStorage**: For persisting the visitor count and guestbook entries

## 📂 Project Structure
```bash
.
├── README.md
├── app
│   ├── about
│   │   └── page.tsx
│   ├── components
│   │   ├── AddressBar.tsx
│   │   ├── BannerAd.tsx
│   │   ├── CRTEffect.tsx
│   │   ├── DialUpAnimation.tsx
│   │   ├── DownloadButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Guestbook.tsx
│   │   ├── Header.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MarqueeText.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── NewsTickerWidget.tsx
│   │   ├── PixelBorder.tsx
│   │   ├── SearchBar.tsx
│   │   ├── SearchEngine.tsx
│   │   ├── SecurityWarning.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SoundEffect.tsx
│   │   ├── StatusBar.tsx
│   │   ├── StockTicker.tsx
│   │   ├── UpcomingEvents.tsx
│   │   ├── WeatherWidget.tsx
│   │   └── WebCounter.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── favorites
│   │   └── page.tsx
│   ├── frame-left
│   │   └── page.tsx
│   ├── frame-main
│   │   └── page.tsx
│   ├── globals.css
│   ├── help
│   │   └── page.tsx
│   ├── history
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── office
│   │   └── page.tsx
│   ├── page.tsx
│   └── windows-update
│       └── page.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── 404.gif
│   ├── access-icon.gif
│   ├── altavista-logo.gif
│   ├── back.gif
│   ├── banner-ad.gif
│   ├── best-viewed-ie.gif
│   ├── clear-history.gif
│   ├── counter.gif
│   ├── dialup.mp3
│   ├── download-icon.gif
│   ├── excel-icon.gif
│   ├── favorites.gif
│   ├── forward.gif
│   ├── geocities.gif
│   ├── globe-icon.gif
│   ├── guestbook.gif
│   ├── help-icon.gif
│   ├── history.gif
│   ├── home.gif
│   ├── hotmail-icon.gif
│   ├── ie-banner.gif
│   ├── ie-logo.png
│   ├── mail.gif
│   ├── ms-logo.gif
│   ├── msn-icon.gif
│   ├── netscape-now.gif
│   ├── new.gif
│   ├── office-logo.gif
│   ├── outlook-icon.gif
│   ├── powerpoint-icon.gif
│   ├── print.gif
│   ├── refresh.gif
│   ├── search.gif
│   ├── smiley.gif
│   ├── star.gif
│   ├── support-icon.gif
│   ├── under-construction.gif
│   ├── warning.gif
│   ├── weather-icon.gif
│   ├── windows-logo.gif
│   ├── windows-update-logo.gif
│   ├── word-icon.gif
│   └── yahoo-icon.gif
├── tailwind.config.ts
└── tsconfig.json
```


## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/90s-internet-explorer.git
```

2. Install dependencies:
```bash
cd 90s-internet-explorer
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Create a .env.local file and add the API key in it NEXT_PUBLIC_WEATHER_API_KEY have used [openweather](https://api.openweathermap.org) for Real time weather details.

## 🎯 Key Components

- `AddressBar`: Simulates the classic IE address bar with URL input
- `DownloadButton`: Interactive download button with a progress bar for that authentic slow download feel
- `Guestbook`: Allow visitors to leave messages, stored in LocalStorage
- `NewsTickerWidget`: Scrolling news headlines from the 90s
- `StockTicker`: Simulated live stock prices for 90s tech companies
- `WeatherWidget`: A weather display widget with retro graphics
- `WebCounter`: Visitor counter, a staple of 90s web design
- `SoundEffect`: Plays the iconic dial-up connection sound on page load
- `SearchEngine.tsx`: Mimics the AltaVista search experience

## 🧠 Development Process

1. **Research**: Extensively studied the design and functionality of Internet Explorer from the late 90s.
2. **Planning**: Mapped out the key features and components that would best represent the 90s web experience.
3. **Design**: Created a design system that accurately reflects the Windows 98 and early web aesthetic.
4. **Development**: Built the application using modern tools while constantly referring back to our 90s inspiration.
5. **Testing**: Ensured compatibility across different browsers (ironically, something that wasn't always done in the 90s!).
6. **Refinement**: Added small details and Easter eggs to enhance the nostalgic experience.

## 🎨 Design Choices

- **Color Scheme**: Authentic Windows 98 colors (lots of grays, with splashes of vibrant blue and teal)
- **Typography**: System fonts like "MS Sans Serif" and "Times New Roman"
- **Icons**: Pixelated, 16-color icons reminiscent of the Windows 98 era
- **Animations**: Liberal use of marquee text and animated GIFs
- **Layout**: Fixed-width design, optimized for 800x600 resolution
- Implements pixel-perfect borders and buttons to mimic the Windows 98 UI
- Includes classic 90s web elements like marquee text, under construction GIFs, and web rings
- Features authentic system sounds and animations for a fully immersive experience

## 🔧 Technical Challenges

1. **Recreating 90s Elements**: Implementing marquee text, popup windows, and frames using modern web technologies.
2. **Audio Integration**: Adding authentic dial-up sounds without autoplaying (to comply with modern browser policies).
3. **State Management**: Simulating a browsing experience while using Next.js routing.
4. **Responsive Design**: Making a fixed-width design work on modern devices of various sizes.

## 📈 Performance Optimizations

Despite the 90s aesthetic, we've implemented several modern performance optimizations:

- Image optimization using Next.js Image component
- Code splitting and lazy loading for faster initial page loads
- Server-side rendering for improved SEO and performance
- Efficient styling with Tailwind's JIT compiler

## 🔮 Future Enhancements

- Implement a "Web Ring" feature to connect with other retro-styled websites
- Add more interactive elements like a guest poll or a primitive web game
- Create a "Netscape Navigator" theme toggle for the ultimate 90s browser wars experience
- Implement a "dial-up simulator" that randomly slows down page loading

## 🏆 Hackathon Goals

Our submission aims to:

1. Demonstrate proficiency in modern web development technologies
2. Showcase creative problem-solving by recreating old interfaces with new tools
3. Provide an educational experience about the history of web development
4. Spark nostalgia and appreciation for how far web technology has come

This project was created for the Codédex Holiday Hackathon 2024, aiming to recreate the nostalgic experience of 90s web browsing while implementing modern web development practices.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Thanks to Codédex for organizing the Holiday Hackathon
- All the wonderful 90s web designers who inspired this project
- Microsoft for creating Internet Explorer (RIP)
- Various creators of 90s web assets and GIFs used in this project

## 🎁 Easter Eggs

We've hidden several Easter eggs throughout the site. Can you find them all? Here's a hint: try clicking on seemingly non-interactive elements, or typing certain keywords in the search bar.

## 🤝 Contributing

We welcome contributions! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


Please ensure your code adheres to the 90s aesthetic while maintaining modern coding standards.

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/90s-internet-explorer/issues).

---

Made with 💾 for the Codédex Holiday Hackathon 2024
