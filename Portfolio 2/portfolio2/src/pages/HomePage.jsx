import { Layout, Home, Experience, Contact, Projects, About  } from "../components";
import React from "react";


function HomePage() {
    return (
      <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    );
  }

  export default HomePage;