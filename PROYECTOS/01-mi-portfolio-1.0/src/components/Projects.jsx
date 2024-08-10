import React from "react";
import Project from "./Project";
import film_finder_img from "../assets/film-finder.png";

function Projects() {
  const projects = [
    {
      title: "Film Finder",
      description:
        "This is a app where you can find any film by it's name, and then you can filter them by year or title",
      img: film_finder_img,
    },
    {
      title: "Film Finder",
      description:
        "This is a app where you can find any film by it's name, and then you can filter them by year or title",
      img: film_finder_img,
    },
    {
      title: "Film Finder",
      description:
        "This is a app where you can find any film by it's name, and then you can filter them by year or title",
      img: film_finder_img,
    },
    {
      title: "Film Finder",
      description:
        "This is a app where you can find any film by it's name, and then you can filter them by year or title",
      img: film_finder_img,
    },
  ];

  return (
    <div
      id='projects'
      className=' w-10/12 flex flex-col items-center justify-center gap-10 lg:gap-20 mx-auto mb-20'
    >
      <h2 className='text-dru_white text-3xl text-center'>
        Here are some of my projects.
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3 gap-8 mx-auto'>
        {projects.map(({ img, description, title }, index) => {
          return (
            <Project
              key={index}
              img={img}
              description={description}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
