import React from "react";
import Person from "../assets/PersonalData";

const About = () => {
  return (
    <div className="container-fluid padding" id="about">
      <div className="row headers padding">
        <div className="col-12 text-center">
          <h1 className="display-4 animated wow slideInLeft">About Me</h1>
        </div>
        <hr />
        <div className="col-xs-12 col-sm-12 col-md-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-4 padding">
          <figure className="figure">
            <img
              src={Person.about.profilepic}
              width="100%"
              alt="profile"
              className="rounded-circle"
            />
            <figcaption className="figure-caption text-center p-3">
              {Person.about.name}
            </figcaption>
          </figure>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-12 ml-4">
          <ul>
            {Person.experience.map((bg, index) => (
              <li key={index} className="lead">
                {`${bg.brief} `}
                <a
                  href={bg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education"
                >
                  {bg.school}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
