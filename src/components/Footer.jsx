import React from "react";
import Person from "../assets/PersonalData";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid padding">
        <div className="row text-center">
          <div className="col-md-4">
            <img
              src={Person.about.logo}
              className="mx-3"
              width="50"
              height="52"
              alt="logo"
            />
            <span>Tariq Selawi</span>
            <hr className="light" />
            <p>+32466-34-6060</p>
            <p>selawi.be@gmail.com</p>
          </div>
          <div className="col-md-4">
            <hr className="light" />
            <h5>Address</h5>
            <hr className="light" />
            <p>Avenue de l'observatoire 26</p>
            <p>Liège, Belgium</p>
          </div>
          <div className="col-md-4">
            <hr className="light" />
            <h5>Social Media</h5>
            <hr className="light" />
            {Person.socialMedias.map((media, index) => (
              <p key={index} className="footer-media">
                <a href={media.url} target="_blank" rel="noopener noreferrer">
                  {media.name}
                </a>
              </p>
            ))}
          </div>
          <div className="col-12">
            <hr className="light-100" />
            <h5 className="footer-media">
              &copy;2021{" "}
              <a
                href="https://tariqs-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tariq Selawi
              </a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
