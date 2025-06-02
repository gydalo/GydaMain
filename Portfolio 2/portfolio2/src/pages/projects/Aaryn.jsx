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

function ProjectPage() {
  return (
    <>
      <Layout>
        <div className="projectpage-container">
          <MediaGallery media={media} />
          <h1>Aaryn - Fake Online Store</h1>

          <p>
            Aaryn is a simple fake online store web application built with
            React. It allows users to browse products, add items to their cart,
            and proceed to checkout or clear the cart entirely. The project uses
            CSS Modules for component-based styling.
          </p>

          <h2>Description</h2>
          <p>
            Aaryn simulates the basic functionality of an online shopping
            experience. Users can interact with the product catalog, add
            products to a cart, view the cart, remove all items, and initiate a
            fake checkout process.
          </p>

          <h2>Design Phase</h2>
          <p>
            The layout was styled using CSS Modules, scoped to each component
            for better organization and maintainability. I focused on a clean,
            minimal design.
          </p>

          <h2>Development Phase</h2>
          <p>This project was built using:</p>
          <ul>
            <li>React (JavaScript)</li>
            <li>CSS Modules</li>
          </ul>
          <p>
            React’s state management was used to handle cart functionality and
            dynamic rendering of the UI across product, cart, and checkout
            pages.
          </p>

          <h2>Features</h2>
          <ul>
            <li>Product listing page</li>
            <li>Add to cart functionality</li>
            <li>View and clear cart</li>
            <li>Proceed to checkout view</li>
          </ul>

          <h2>Target Audience</h2>
          <p>
            Aaryn was created as a learning project to demonstrate a basic
            e-commerce flow. It's ideal for anyone exploring how online stores
            work or wanting to see a simplified shopping cart system in action.
          </p>

          <h2>How to Use</h2>
          <p>
            Simply browse the products, add items to your cart, and either clear
            the cart or head to checkout. No login is required.
          </p>
        </div>
      </Layout>
    </>
  );
}

export default ProjectPage;
