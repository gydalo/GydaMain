import React from "react";
import dogImg from "../../public/assets/images/tur.jpg";
import poleImg from "../../public/assets/images/pole.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>Get to know me</h1>
      </div>
      <div className="box-about">
        <div className="box-1-about">
          <h2>About me</h2>
          <p>
            Hi, I'm Gyda, a 27-year-old woman and a Front-End Development
            student based in Stavanger, Norway.
          </p>
          <br />
          <p>
            I enjoy learning front-end development, particularly discovering the
            various ways to solve problems and create functional solutions.
          </p>
        </div>
        <div className="image-dog">
          <img src={dogImg} alt="Image of me and my dog Freddy" />
        </div>
      </div>
      <div className="box-interests">
        <div className="image-pole">
          <img src={poleImg} alt="Image of me hanging upside down on a pole" />
        </div>
        <div className="box-2-about">
          <h2>Interests</h2>
          <p>
            In my free time, I love going for walks and hikes, and I enjoy
            working out. I started pole dancing in the beginning of 2023, and
            recently picked up jogging. I also enjoy gaming when I find the
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
