import React from "react";
import CarouselItem from "./CarouselItem";

const cardDetails = {
  0: {
    imgUrl: `/prisma.svg`,
    title: "Prisma.io",
  },

  1: {
    imgUrl: "/firebase.svg",
    title: "Firebase",
  },

  2: {
    imgUrl: "/shopify.svg",
    title: "Shopify",
  },

  3: {
    imgUrl: "/nextjs.svg",
    title: "Next.js",
  },

  4: {
    imgUrl: "/redux.svg",
    title: "Redux",
  },

  5: {
    imgUrl: "/html.svg",
    title: "HTML5",
  },

  6: {
    imgUrl: "/css.svg",
    title: "CSS3",
  },
  7: {
    imgUrl: "/javascript.svg",
    title: "JavaScript",
  },
  8: {
    imgUrl: "/react.svg",
    title: "React.js",
  },
  9: {
    imgUrl: "/tailwind.svg",
    title: "Tailwind.css",
  },
};

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              key={cardDetails[detailKey].title}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              key={cardDetails[detailKey].title}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
