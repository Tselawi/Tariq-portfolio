import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Umrella logo" />
          </a>
          {/* start the humburger menu*/}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-spy="scroll"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* End the humburger menu*/}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto d-flex align-items-center justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
