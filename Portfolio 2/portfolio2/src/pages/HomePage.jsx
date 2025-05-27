import { Layout, Home  } from "../components";
import React from "react";


function HomePage() {
    return (
      <Layout>
        <Home />
        {/* You can add other components like About, Experience, Projects, Contact here */}
      </Layout>
    );
  }

  export default HomePage;