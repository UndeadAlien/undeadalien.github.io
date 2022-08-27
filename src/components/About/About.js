import React from "react";
import "./style/About.scss";

const About = () => {
  return (
    <>
      <div className="about__container" id="about">
        <div className="wrapper">
          <div className="project__header">
            <h1>About</h1>
          </div>
          <div className="about__content">
            <div className="about__information">
              <p>Hello! I'm Connor from Chicago, IL.</p>

              <p>
                I created things on the internet from websites to applications.
                I aspire to be the programmer I can be.
              </p>

              <p>
                Being a self-taught software programmer has presented its
                difficulties. Learning as much as I can through videos, docs,
                and repositories.
              </p>

              <p>Some technologies I have been working with:</p>

              <div className="list__container">
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>HTML & (S)CSS</li>
                </ul>
                <ul>
                  <li>Firebase</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>

            <div
              className="profile__picture"
              style={{ backgroundImage: "url(/images/information/photo.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
