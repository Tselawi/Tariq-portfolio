import React from "react";
import Person from "../assets/PersonalData";

const Skills = () => {
  return (
    <div>
      <div className="container-fluid padding" id="skills">
        <div className="row headers text-center padding">
          <div className="col-md-12">
            <h1 className="display-4 text-white">Skills</h1>
          </div>
          <hr />
        </div>
      </div>
      <div className="row text-center">
        <div className=" col-xs-10 col-sm-6 col-md-1"></div>
        <div className="row col-xs-12 col-sm-12 col-md-10 d-flex justify-content-center">
          {Person.skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="skill padding col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
              >
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
                <ul className="language list-inline">
                  {skill.language.map((lang, index) => (
                    <li key={index} className="list-inline-item">
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
