"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Badge from "./Badge";

const Proyecto = ({ proyecto }) => {
  const { titulo, descripcion, img, url, id, tecnologias } = proyecto;
  const router = useRouter();

  return (
    <article className="border flex flex-col bg-quaternary border-secondary lg:p-7 p-4 rounded-2xl w-full hover:-translate-y-1 transition-transform duration-200 transform hover:scale-[1.025]">
      <Image
        className="mx-auto rounded-lg w-full"
        height={100}
        width={500}
        src={img}
        alt={`Imagen del proyecto ${titulo}`}
      />
      <h3 className="lg:my-4 my-2 mt-7 lg:text-3xl text-xl lg:text-left  font-bold tracking-wide overflow-hidden line-clamp-1 text-white">
        {titulo}
      </h3>
      <p className="text-[#adadad] mb-3   overflow-hidden line-clamp-3 text-pretty">
        {descripcion}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-wrap  gap-y-2">
          {tecnologias.map((tec) => (
            <Badge key={tec} className={"md:px-1.5 px-1 text-white bg-primary"}>
              {tec}
            </Badge>
          ))}
        </div>
        <div className="gap-4 lg:gap-6 flex flex-row place-self-start items-center ">
          <Link
            className="hover:text-primary cursor-pointer transition-all duration-300 text-nowrap"
            href={`/proyectos/${id}`}
          >
            Ver Más
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className=" hover:text-primary transition-all duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6"
            >
              <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Proyecto;
