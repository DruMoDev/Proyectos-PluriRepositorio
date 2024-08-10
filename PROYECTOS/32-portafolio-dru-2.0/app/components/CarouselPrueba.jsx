import Image from "next/image";

const cardDetails = [
  {
    imgUrl: `https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592709/Portafolio/prisma_fiaoys.svg`,
    title: "Prisma.io",
  },

  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592712/Portafolio/firebase_bg8n0w.svg",
    title: "Firebase",
  },

  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592730/Portafolio/shopify_adtiu3.svg",
    title: "Shopify",
  },

  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592709/Portafolio/nextjs_mucajc.svg",
    title: "Next.js",
  },

  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592710/Portafolio/redux_jgfup0.svg",
    title: "Redux",
  },

  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592713/Portafolio/html_ngqxhs.svg",
    title: "HTML5",
  },

  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592710/Portafolio/css_snxkm7.svg",
    title: "CSS3",
  },
  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592708/Portafolio/javascript_th4mma.svg",
    title: "JavaScript",
  },
  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592710/Portafolio/react_cgowjn.svg",
    title: "React.js",
  },
  {
    imgUrl: "https://res.cloudinary.com/dpjbtovxz/image/upload/v1715592731/Portafolio/tailwind_nwyf13.svg",
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
