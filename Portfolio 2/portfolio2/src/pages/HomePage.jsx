import {
  Layout,
  Home,
  Experience,
  Contact,
  Projects,
  About,
  ScrollToTopButton,
} from "../components";
import React from "react";

function HomePage() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
      <ScrollToTopButton />
    </>
  );
}

export default HomePage;
