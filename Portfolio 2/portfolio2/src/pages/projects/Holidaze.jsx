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

function ProjectPage() {
  return (
    <>
      <Layout>
        <div className="projectpage-container">
          <MediaGallery media={media} />
          <h1>Holidaze - Semester Project 2</h1>

          <p>
            Holidaze is a fake Airbnb-style web application where users can test
            booking and hosting functionality by registering and logging in with
            a <code>@stud.noroff.no</code> email. The page is designed to
            simulate a vacation rental platform, allowing users to experience
            both booking and managing venues.
          </p>

          <h2>Description</h2>
          <p>
            Holidaze allows users to sign up either as regular users or as venue
            managers. Regular users can explore available venues and make
            bookings, while venue managers can additionally create, edit, and
            manage their own venues, as well as view bookings made by others on
            their listings.
          </p>
          <p>
            After creating a profile, users can customize it by uploading a
            banner, avatar, and writing a short bio. The profile page also gives
            users access to:
          </p>
          <ul>
            <li>Their own venue listings (if they are a venue manager)</li>
            <li>Bookings made on their venues</li>
            <li>Bookings they have made on other venues</li>
          </ul>

          <h2>Design Phase</h2>
          <p>
            The design started in Figma, focusing on a clean and minimal layout.
            I’m not super happy with how the design turned out, but it was okay.
            I would probably do it differently if I could start over. I tried to
            make the page intuitive and simple to navigate.
          </p>

          <h2>Development Phase</h2>
          <p>
            I tried using TypeScript for the first time in this project. I was a
            little scared at the beginning, thinking it would be overwhelming,
            but I found TypeScript to be nice to use.
          </p>

          <h3>Built With</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>

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

          <h2>Target Audience</h2>
          <p>
            While Holidaze is a fake service, it’s designed for anyone who wants
            to simulate an Airbnb-like experience. Whether you’re testing UI/UX
            workflows or exploring hosting and booking logic, Holidaze is a fun
            and functional demo platform.
          </p>

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
        </div>
      </Layout>
    </>
  );
}

export default ProjectPage;
