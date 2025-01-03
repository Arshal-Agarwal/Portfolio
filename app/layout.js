import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google"; // Import Roboto Mono
import "./globals.css";
import Navbar from "./components/navbar";

// Load Geist and Geist Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load Roboto Mono font
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Arshal Agarwal's Portfolio Website developed using NextJS ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Arshal Agarwal, portfolio, software engineer, developer, CSE student, Next.js" />
        <meta name="google-site-verification" content="_oDRibaBUDZaRSx8IuKLDE23lNXRPzG-PbHxYT8ztfk" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} antialiased`} // Add Roboto Mono variable here
      >
        <main className="font-roboto-mono"> {/* Apply Roboto Mono globally to main content */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
