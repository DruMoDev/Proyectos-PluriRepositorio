import Image from "next/image";

const cardDetails = [
  {
    imgUrl: `/prisma.svg`,
    title: "Prisma.io",
  },

  {
    imgUrl: "/firebase.svg",
    title: "Firebase",
  },

  {
    imgUrl: "/shopify.svg",
    title: "Shopify",
  },

  {
    imgUrl: "/nextjs.svg",
    title: "Next.js",
  },

  {
    imgUrl: "/redux.svg",
    title: "Redux",
  },

  {
    imgUrl: "/html.svg",
    title: "HTML5",
  },

  {
    imgUrl: "/css.svg",
    title: "CSS3",
  },
  {
    imgUrl: "/javascript.svg",
    title: "JavaScript",
  },
  {
    imgUrl: "/react.svg",
    title: "React.js",
  },
  {
    imgUrl: "/tailwind.svg",
    title: "Tailwind.css",
  },
];

const CarouselPrueba = () => {
  return (
    <section className=" ">
      <div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-[250px] mx-[calc((100%-250px)/2)] md:w-[750px] md:mx-[calc((100%-750px)/2)] lg:w-[1000px] lg:mx-[calc((100%-1000px)/2)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none infinite-scroll">
          {cardDetails.map((card) => (
            <li key={card.title}>
              <Image
                src={card.imgUrl}
                alt={card.title}
                height={100}
                width={100}
                className="size-7 md:size-16 lg:size-20 "
              />
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none infinite-scroll">
          {cardDetails.map((card) => (
            <li key={card.title}>
              <Image
                src={card.imgUrl}
                alt={card.title}
                height={100}
                width={100}
                className="size-7 md:size-16 lg:size-20 "
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default CarouselPrueba;
