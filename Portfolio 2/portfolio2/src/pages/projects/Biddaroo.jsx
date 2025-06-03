import React from "react";
import { Layout } from "../../components";
import MediaGallery from "../../components/MediaGallery";

const media = [
  { type: "video", url: "/public/assets/videos/Biddaroo - video.mp4" },
  {
    type: "image",
    url: "/public/assets/images/biddaroo-screenshot1.png",
    alt: "Screenshot 1",
  },
  {
    type: "image",
    url: "/public/assets/images/biddaroo-screenshot2.png",
    alt: "Screenshot 2",
  },
  {
    type: "image",
    url: "/public/assets/images/biddaroo-screenshot3.png",
    alt: "Screenshot 3",
  },
  {
    type: "image",
    url: "/public/assets/images/biddaroo-screenshot4.png",
    alt: "Screenshot 4",
  },
];

const project = {
  liveUrl: "https://gydalo.github.io/biddaroo/",
  githubUrl: "https://github.com/gydalo/biddaroo",
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
            <h1 className="title">Biddaroo - Semester Project 2</h1>

            <h2>
              There is an issue with the profile not loading in, I will fix this
              soon
            </h2>

            <br />

            <p>
              For my semester project, I made an auction page for a fake auction
              site called Biddaroo. This auction site allows users to register,
              log in, and create their own auctions.
            </p>

            <br />

            <h2>Description</h2>
            <p>
              Biddaroo is an auction page for users to post fake auctions. When
              you create a new profile on the page, you automatically get 1000
              credits to use to bid on auctions. You can make an auction about
              anything you like and add up to eight pictures per auction. If the
              auction contains more than one image, there will be a carousel to
              scroll through the images. You can bid on auctions or view
              existing bids.
            </p>

            <br />

            <h2>Design Phase</h2>
            <p>
              I began by creating the design in Figma. I experimented a bit, but
              wanted a dark, elegant theme. I ended up with a very simple design
              using only a couple of colors and a clean start page with the
              login and register functions on the main page.
            </p>

            <br />

            <h2>Development Phase</h2>
            <p>
              The next phase was coding. I reserved three weeks for the
              JavaScript part as it would be the most time-consuming. Once I
              completed that, I started the CSS phase using Tailwind as a
              framework, which I spent one week on.
            </p>

            <br />

            <h2>Features</h2>
            <h3>Homepage</h3>
            <p>
              The homepage shows a list of all auctions with the shortest time
              left, making it easier to bid before time runs out. It also
              includes a search bar to help users find specific auctions.
            </p>

            <br />

            <h3>Logged In Users</h3>
            <p>
              Logged-in users get access to a separate page for creating and
              editing auctions. Users can also delete their own listings. The
              profile page shows remaining credits and allows profile editing
              (username, banner, avatar).
            </p>

            <br />

            <h2>Target Audience</h2>
            <p>
              If this were a real website, it would appeal to people wanting to
              auction valuable items. For now, it’s for anyone who wants to
              explore creating or bidding on auctions just for fun.
            </p>

            <br />

            <h2>Built With</h2>
            <ul>
              <li>HTML</li>
              <li>CSS (Tailwind)</li>
              <li>JavaScript</li>
            </ul>

            <br />

            <h2>How to Set Up</h2>
            <p>
              You can browse and view posts without registering. To bid or
              create auctions, register using an email with the
              "@stud.noroff.no" format. It doesn't need to be real, just follow
              the format. Then you can log in and join the fun.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProjectPage;
