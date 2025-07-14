import "./globals.css";

import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plexMono.className}>
      <body>
        <div className="flex justify-center items-center min-w-screen min-h-screen">
          {children}
          <div className="absolute bottom-0 mb-6  text-[#818181] text-xs font-semibold">
            made with ❤️ by <a href="https://github.com/notalhanz" className="underline hover:text-[#aaaaaa] duration-300">alhanz</a>
          </div>
        </div>
      </body>
    </html>
  );
}
