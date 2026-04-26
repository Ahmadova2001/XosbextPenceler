import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";


const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Paws - Adopting",
  description: "Happy Paws, Happy Hearts",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-quicksand">
        <Navbar />
          <Main />
          {children}
          <Footer />
      </body>
    </html>
  );
}