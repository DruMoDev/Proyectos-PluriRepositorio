"use client";
import Badge from "@/app/components/Badge";
import usePortafolio from "@/app/hooks/usePortafolio";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = ({ params }) => {
  const { proyectosState } = usePortafolio();
  const proyectoObjetivo = proyectosState.filter(
    (proyecto) => proyecto.id.toString() === params.proyectoId
  );
  const { titulo, descripcion, img, url, id, tecnologias } = proyectoObjetivo[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20 ">
      <div className="container flex flex-col items-center lg:w-2/4 md:w-3/4 ">
        <h1 className="mb-5 lg:mb-0 2xl:mb-3 text-center text-3xl 2xl:text-5xl">
          {titulo}
        </h1>

        <article className="relative lg:p-7 p-4 rounded-2xl w-full">
          <Image
            className="mx-auto rounded-lg w-full 2xl:w-[600px]"
            height={100}
            width={500}
            src={img}
            alt={`Imagen del proyecto ${titulo}`}
          />

          <p className="text-[#adadad] px-2 lg:px-0 mb-5 mt-7 text-pretty">
            {descripcion}
          </p>

          {tecnologias.map(tec => <Badge key={tec}>{tec}</Badge>)}

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="float-end hover:text-primary transition-all duration-300"
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
        </article>
      </div>
    </div>
  );
};

export default Home;
