import React from "react";
import Typical from "react-typical";
import Person from "../assets/PersonalData";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="contain">
        <img
          className="d-block w-100"
          src={Person.about.backg}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>
            Hello Everyone{" "}
            <span role="img" aria-label="smiling face with smiling eyes">
              😊
            </span>
          </h3>
          <h4>
            I'm A{" "}
            <Typical steps={Person.about.profession} loop={1} wrapper="span" />
          </h4>
          <a href="#contact">
            <button type="button" className="btn btn-outline-light btn-lg">
              Contact Me
            </button>
          </a>
          <a href="#projects">
            <button type="button" className="btn btn-warning btn-lg ml-3">
              See Projects
            </button>
          </a>
          <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
            <a href="#about">
              <i className="fas fa-arrow-alt-circle-down" />
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="contain">
        <img
          className="d-block w-100"
          src={Person.about.bg1}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Follow Me!</h3>
          <ul className="col-12 media d-flex justify-content-center list-inline">
            {Person.socialMedias.map((media, index) => (
              <li key={index} className="list-inline-item">
                <a href={media.url} target="_blank" rel="noopener noreferrer">
                  <i className={media.icon} />
                </a>
              </li>
            ))}
          </ul>
          <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
            <a href="#about">
              <i className="fas fa-arrow-alt-circle-down" />
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="contain">
        <img
          className="d-block w-100"
          src={Person.about.bg2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
