"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usePortafolio from "../../hooks/usePortafolio";
import Badge from "../../components/Badge";

const Home = ({ params }) => {
  const { proyectosState } = usePortafolio();
  const proyectoObjetivo = proyectosState.filter(
    (proyecto) => proyecto.id.toString() === params.proyectoId
  );
  const { titulo, descripcion, img, url, id, tecnologias, gitUrl } =
    proyectoObjetivo[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20 ">
      <div className="container flex flex-col items-center lg:w-2/4 md:w-3/4 ">
        <h1 className="mb-5 lg:mb-0 2xl:mb-3 text-center text-3xl 2xl:text-5xl">
          {titulo}
        </h1>

        <article className="relative lg:p-7 p-4 rounded-2xl w-full">
          <Image
            className="mx-auto rounded-lg w-full 2xl:w-[840px]"
            height={100}
            width={500}
            src={img}
            alt={`Imagen del proyecto ${titulo}`}
          />

          <p
            className="text-[#adadad] px-2 lg:px-0 mb-5 mt-7 text-pretty"
            dangerouslySetInnerHTML={{ __html: descripcion }}
          />

          {tecnologias.map((tec) => (
            <Badge key={tec}>{tec}</Badge>
          ))}
          <div className="mt-3 flex float-end gap-2 lg:mt-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={gitUrl}
              className="float-end hover:text-primary transition-all duration-300"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="size-6"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </Link>
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
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
