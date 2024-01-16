import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { PortafolioProvider } from "./context/PortafolioProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio | Roger Morera",
  description: "Portafolio de Roger Morera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" text-white">
      <body className={`${inter.className}`}>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <PortafolioProvider>
          <Navbar />
          {children}
        </PortafolioProvider>
      </body>
    </html>
  );
}
