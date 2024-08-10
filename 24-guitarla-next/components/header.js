import Image from "next/image";
import styles from "../styles/header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="imagen logotipo"
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link
            className={`${styles.enlace} ${
              router.pathname === "/" ? styles.active : ""
            }`}
            href={"/"}
          >
            Inicio
          </Link>
          <Link
            className={`${styles.enlace} ${
              router.pathname === "/nosotros" ? styles.active : ""
            }`}
            href={"/nosotros"}
          >
            Nosotros
          </Link>
          <Link
            className={`${styles.enlace} ${
              router.pathname === "/tienda" ? styles.active : ""
            }`}
            href={"/tienda"}
          >
            Tienda
          </Link>
          <Link
            className={`${styles.enlace} ${
              router.pathname === "/blog" ? styles.active : ""
            }`}
            href={"/blog"}
          >
            Blog
          </Link>
          <Link href={"/carrito"}>
            <Image
              width={30}
              height={25}
              src="/img/carrito.png"
              alt="Carrito"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
