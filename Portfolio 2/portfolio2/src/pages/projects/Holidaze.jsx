import React from "react";
import { Layout } from "../../components";
import MediaGallery from "../../components/MediaGallery";

const media = [
  { type: "video", url: "/public/assets/videos/holidaze - video.mp4" },
  {
    type: "image",
    url: "/public/assets/images/holidaze-screenshot1.png",
    alt: "Screenshot 1",
  },
  {
    type: "image",
    url: "/public/assets/images/holidaze-screenshot2.png",
    alt: "Screenshot 2",
  },
  {
    type: "image",
    url: "/public/assets/images/holidaze-screenshot3.png",
    alt: "Screenshot 3",
  },
  {
    type: "image",
    url: "/public/assets/images/holidaze-screenshot4.png",
    alt: "Screenshot 4",
  },
];

const project = {
  liveUrl: "https://holidazegydalo.netlify.app/",
  githubUrl: "https://github.com/gydalo/holidaze",
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
            <h1 className="title">Holidaze - Exam Project 2</h1>

            <p>
              Holidaze is a fake Airbnb-style web application where users can
              test booking and hosting functionality by registering and logging
              in with a <code>@stud.noroff.no</code> email. The page is designed
              to simulate a vacation rental platform, allowing users to
              experience both booking and managing venues.
            </p>

            <br />

            <h2>Description</h2>
            <p>
              Holidaze allows users to sign up either as regular users or as
              venue managers. Regular users can explore available venues and
              make bookings, while venue managers can additionally create, edit,
              and manage their own venues, as well as view bookings made by
              others on their listings.
            </p>
            <p>
              After creating a profile, users can customize it by uploading a
              banner, avatar, and writing a short bio. The profile page also
              gives users access to:
            </p>
            <ul>
              <li>Their own venue listings (if they are a venue manager)</li>
              <li>Bookings made on their venues</li>
              <li>Bookings they have made on other venues</li>
            </ul>

            <br />

            <h2>Design Phase</h2>
            <p>
              The design started in Figma, focusing on a clean and minimal
              layout. I’m not super happy with how the design turned out, but it
              was okay. I would probably do it differently if I could start
              over. I tried to make the page intuitive and simple to navigate.
            </p>

            <br />

            <h2>Development Phase</h2>
            <p>
              I tried using TypeScript for the first time in this project. I was
              a little scared at the beginning, thinking it would be
              overwhelming, but I found TypeScript to be nice to use.
            </p>

            <br />

            <h3>Built With</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>

            <br />

            <h2>Features</h2>
            <ul>
              <li>Homepage with searchable venue listings and date filters</li>
              <li>
                Booking System: Users can select dates, check availability, and
                get a full price breakdown before confirming a booking
              </li>
              <li>
                Profile Page: View/edit profile, see upcoming and past bookings
              </li>
              <li>
                Venue Creation: Venue managers can create/edit listings, upload
                images, and define amenities like Wi-Fi, pets, and parking
              </li>
              <li>
                Dynamic Calendar: Prevents double bookings and disables
                unavailable dates
              </li>
            </ul>

            <br />

            <h2>Target Audience</h2>
            <p>
              While Holidaze is a fake service, it’s designed for anyone who
              wants to simulate an Airbnb-like experience. Whether you’re
              testing UI/UX workflows or exploring hosting and booking logic,
              Holidaze is a fun and functional demo platform.
            </p>

            <br />

            <h2>How to Set Up</h2>
            <p>
              You can browse venues without an account, but to fully test the
              platform you can register with any email ending in{" "}
              <code>@stud.noroff.no</code>. After registering:
            </p>
            <ul>
              <li>Regular users can book venues</li>
              <li>
                Venue managers can also create and manage their own listings
              </li>
              <li>
                Both users can update their bio, avatar, and banner on their
                profile page
              </li>
            </ul>

            <br />

            <h2>Future Improvements</h2>
            <p>
              While I’m happy with how the project turned out, there are several
              areas I would like to improve going forward:
            </p>
            <ul>
              <li>Cleaner code structure</li>
              <li>Improved design</li>
            </ul>

            <br />

            <h3>Cleaner Code Structure</h3>
            <p>
              As I’ve learned more about React and component organization, I see
              opportunities to refactor parts of the code to improve readability
              and reusability. For instance, some logic could be moved into
              smaller, more focused components.
            </p>

            <br />

            <h3>Improved design</h3>
            <p>
              I often find myself struggling to feel fully satisfied with the
              final design of my projects. I tend to underestimate how much time
              the design phase will take, which sometimes leaves me without
              enough time to polish it the way I really want. In the future, I
              plan to set aside more time for design and aim to have a clear,
              complete design for all aspects of the page beforehand. I usually
              have a pretty solid general design idea, but I tend to overlook
              the smaller details. In this project I forgot to add both the
              venue managers own venues and the venues rented by the venue
              manager on the profile page, which made me have to design and
              implement that after the initial design should be done.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProjectPage;
