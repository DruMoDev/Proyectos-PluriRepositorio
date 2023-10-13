import { formatearFecha } from "@/Helpers";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between mx-auto py-5 px-10 bg-black items-center lg:px-40 ">
      <Link href={"/"}>
        <Image
          src={"/img/logo-removebg.png"}
          width={100}
          height={100}
          alt="logo empresa goed"
        />
      </Link>

      <p className="text-white text-base lg:text-xl">{`Todos los derechos reservados ${new Date().getFullYear()}`}</p>
    </footer>
  );
};

export default Footer;
