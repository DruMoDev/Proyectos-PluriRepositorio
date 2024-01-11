import Image from "next/image";
import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carousel-card">
      <Image src={imgUrl} alt={imgTitle} height={100} width={100} />
    </div>
  );
}
