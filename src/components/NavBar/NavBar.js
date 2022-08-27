import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

import "./style/NavBarStyle/NavBar.scss";

const NavBar = () => {
  return (
    <>
      <header>
        <LinkS activeClass="active" to="hero" spy={true} smooth={true}>
          <div className="navbar__logo">
            <span>C</span>
          </div>
        </LinkS>

        {/* <MobileNavBar /> */}

        <nav>
          <ul>
            <li>
              <LinkS
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                exact="true"
                offset={-150}
              >
                Projects
              </LinkS>
            </li>
          </ul>
        </nav>

        {/* ~~~~~ TODO ~~~~~~ */}
        {/* Insert downloadable version of my resume */}

        {/* <LinkR to="/resume">
          <div className="navbar__button">Resume</div>
        </LinkR> */}

        <a href="https://LinkedIn.com/in/hello-connor/" target="_blank">
          <div className="navbar__button">Resume</div>
        </a>
      </header>
    </>
  );
};

export default NavBar;
