import React from "react";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="title">
        <h1>Experience</h1>
      </div>
      <h2>Education</h2>
      <div className="box-education">
        <p>
          Two year Frontend Development at Noroff <br />
          Bachelors degree in Social Work
        </p>
      </div>
      <div className="box-knowledge">
        <div className="box-1-knowledge">
          <div className="title-frontend">
            <h2>Frontend Development</h2>
          </div>
          <div className="grid-item">
            <p>HTML</p>
            <p className="smaller-text">Basic</p>
          </div>
          <div className="grid-item">
            <p>CSS</p>
            <p className="smaller-text">Basic</p>
          </div>
          <div className="grid-item">
            <p>Tailwind</p>
            <p className="smaller-text">Basic</p>
          </div>
          <div className="grid-item">
            <p>JavaScript</p>
            <p className="smaller-text">Basic</p>
          </div>
          <div className="grid-item">
            <p>TypeScript</p>
            <p className="smaller-text">Still learning</p>
          </div>
          <div className="grid-item">
            <p>React</p>
            <p className="smaller-text">Basic</p>
          </div>
        </div>

        <div className="box-2-knowledge">
          <div className="title-backend">
            <h2>Backend Development</h2>
          </div>
          <div className="grid-item">
            <p>Node JS</p>
            <p className="smaller-text">Still learning</p>
          </div>
          <div className="grid-item">
            <p>Express JS</p>
            <p className="smaller-text">Still learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
