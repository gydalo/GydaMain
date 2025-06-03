import React from "react";
import profileImg from "../../public/assets/images/Gyda.jpeg";
import githubLogo from "../../public/assets/images/github.png";
import linkedinLogo from "../../public/assets/images/linkedin.png";
import cvPdf from "../../public/assets/images/CV-engelsk.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="text-profile-pic">
        <div className="text">
          <h1>Hi, my</h1>
          <h1>name is</h1>
          <h1>Gyda</h1>
        </div>
        <div className="profile-pic">
          <img src={profileImg} alt="Image of me" />
        </div>
      </div>

      <div className="button-home">
        <button
          className="btn-gray"
          onClick={() => window.open(cvPdf, "_blank")}
        >
          Download CV
        </button>
        <button
          className="btn-white"
          onClick={() => (window.location.href = "#contact")}
        >
          Contact info
        </button>
      </div>

      <div className="logo-home">
        <img
          className="logo-github"
          src={githubLogo}
          alt="Github logo"
          onClick={() => window.open("https://github.com/gydalo", "_blank")}
        />
        <img
          className="logo-link"
          src={linkedinLogo}
          alt="Linkedin logo"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/gyda-lofthus-301069291/",
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
};

export default Home;
