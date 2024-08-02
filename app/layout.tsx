import { Instrument_Sans } from "next/font/google";
const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import { LinkProvider } from "./_context/LinkShareContext";

export const metadata = {
  title: {
    template: "%s / Lnkshare",
    default: "Welcome / Linkshare",
  },
  description: "Share and explore your favorite links.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadata can also be placed here */}
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" href="/inkshare.svg" />
      </head>
      <body className={`${instrument.className}`}>
        <LinkProvider>{children}</LinkProvider>
      </body>
    </html>
  );
}
