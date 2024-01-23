import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { PortafolioProvider } from "./context/PortafolioProvider";
import Head from "next/head";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roger Morera, Programador y Desarrollador Web Full-Stack | Barcelona",
  description:
    "Explora el portafolio de Roger Morera, experto en desarrollo web Full-Stack con sede en Barcelona. Descubre sus habilidades y proyectos que destacan su dedicación y experiencia en el mundo del desarrollo web.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="text-white scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <body className={`${inter.className} `}>
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <PortafolioProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            autoClose="2000"
            closeOnClick
            pauseOnHover={false}
            pauseOnFocusLoss={false}
          />
        </PortafolioProvider>
      </body>
    </html>
  );
}
