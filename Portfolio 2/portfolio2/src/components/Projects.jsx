import React from "react";
import { Link } from "react-router-dom";
import biddarooImg from "../../public/assets/images/Biddaroo.png";
import holidazeImg from "../../public/assets/images/Holidaze.png";
import aarynImg from "../../public/assets/images/Aaryn.png";

const projects = [
  {
    title: "Biddaroo",
    image: biddarooImg,
    alt: "Auction website",
    description:
      "Biddaroo is a fictional auction website where users can bid on items, as well as create and manage their own auctions...",
    liveUrl: "https://gydalo.github.io/biddaroo/",
    githubUrl: "https://github.com/gydalo/biddaroo",
  },
  {
    title: "Holidaze",
    image: holidazeImg,
    alt: "Holidaze fictional booking page",
    description:
      "Holidaze is a fictional booking page for a venue rental company. Where users can book or make a venue for their events...",
    liveUrl: "https://holidazegydalo.netlify.app/",
    githubUrl: "https://github.com/gydalo/holidaze",
  },
  {
    title: "Aaryn",
    image: aarynImg,
    alt: "Aaryn, Online Store",
    description:
      "Aaryn is a website for a fictional store. The users can browse products, add them to their cart, and proceed to checkout...",
    liveUrl: "https://aaryn.netlify.app/",
    githubUrl: "https://github.com/gydalo/Online-Store",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="project-flex">
        {projects.map((project) => {
          const route = `/projects/${project.title}`;
          return (
            <div className="project-card" key={project.title}>
              <div className="title-h2">
                <Link to={route}>
                  <h2>{project.title}</h2>
                </Link>
              </div>
              <Link to={route} className="image-projects">
                <img src={project.image} alt={project.alt} />
              </Link>
              <div className="text-projects">
                <p>
                  <Link to={route} className="read-more-link">
                    {project.description}
                  </Link>
                </p>
              </div>
              <div className="btn-projects">
                <button
                  className="btn-gray"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  Live demo
                </button>
                <button
                  className="btn-white"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  Github
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
