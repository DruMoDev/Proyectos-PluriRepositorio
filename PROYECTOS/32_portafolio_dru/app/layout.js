import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio | Roger Morera",
  description: "Portafolio de Roger Morera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
