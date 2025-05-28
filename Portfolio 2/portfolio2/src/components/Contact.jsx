import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-container">
        <div className="mail">
          <h2>Mail</h2>
          <p>gydalofthus@hotmail.com</p>
        </div>
        <div className="linkedin">
          <h2>LinkedIn</h2>
          <p
            className="linkedin-link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/gyda-lofthus-301069291/",
                "_blank"
              )
            }
          >
            Gyda Lofthus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
