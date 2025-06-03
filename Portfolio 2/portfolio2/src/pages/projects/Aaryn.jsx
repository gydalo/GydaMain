import React from "react";
import { Layout } from "../../components";
import MediaGallery from "../../components/MediaGallery";

const media = [
  { type: "video", url: "/public/assets/videos/Aaryn - video.mp4" },
  {
    type: "image",
    url: "/public/assets/images/aaryn-screenshot1.png",
    alt: "Screenshot 1",
  },
  {
    type: "image",
    url: "/public/assets/images/aaryn-screenshot2.png",
    alt: "Screenshot 2",
  },
  {
    type: "image",
    url: "/public/assets/images/aaryn-screenshot3.png",
    alt: "Screenshot 3",
  },
  {
    type: "image",
    url: "/public/assets/images/aaryn-screenshot4.png",
    alt: "Screenshot 4",
  },
];

const project = {
  liveUrl: "https://aaryn.netlify.app/",
  githubUrl: "https://github.com/gydalo/Online-Store",
};

function ProjectPage() {
  return (
    <>
      <Layout>
        <div className="projectpage-container">
          <MediaGallery media={media} />

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

          <div className="project-description">
            <h1 className="title">Aaryn - JavaScript Frameworks</h1>

            <p>
              Aaryn is a simple fake online store web application built with
              React. It allows users to browse products, add items to their
              cart, and proceed to checkout or clear the cart entirely. The
              project uses CSS Modules for component-based styling.
            </p>

            <br />

            <h2>Description</h2>
            <p>
              Aaryn is a fictional shopping site that provides users with a
              simple, interactive shopping experience. Users can:
            </p>
            <ul>
              <li>Browse a catalog of items</li>
              <li>Add products to their cart</li>
              <li>View the cart contents</li>
              <li>Remove all items with one click</li>
              <li>Continue to a checkout screen</li>
            </ul>
            <p>
              There is no login or registration required. The app is meant to
              demonstrate the shopping cart experience in an easy and
              approachable way.
            </p>

            <br />

            <h2>Design Phase</h2>
            <p>
              The design was first designed using Figma. When I was happy with
              the design I started the project in Visual Studio Code. The layout
              was styled using CSS Modules, for better organization and
              maintainability. I focused on a clean, minimal design.
            </p>

            <br />

            <h2>Development Phase</h2>
            <p>
              Aaryn was developed using plain React with JavaScript. React’s
              state management was used to handle cart functionality and dynamic
              rendering of the UI across product, cart, and checkout pages.
            </p>

            <br />

            <h3>Built With</h3>
            <ul>
              <li>React (JavaScript)</li>
              <li>CSS Modules</li>
            </ul>

            <br />

            <h2>Features</h2>
            <ul>
              <li>Product listing page</li>
              <li>Add to cart functionality</li>
              <li>View and clear cart</li>
              <li>Proceed to checkout view</li>
            </ul>

            <br />

            <h2>Target Audience</h2>
            <p>
              Aaryn was created as a learning project to demonstrate a basic
              e-commerce flow. It's ideal for anyone exploring how online stores
              work or wanting to see a simplified shopping cart system in
              action.
            </p>

            <br />

            <h2>How to Use</h2>
            <p>
              Simply browse the products, add items to your cart, and either
              clear the cart or head to checkout. No login is required.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProjectPage;
