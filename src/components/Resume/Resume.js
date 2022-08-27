import React from "react";
import { FaBars } from "react-icons/fa";
import { CgArrowLeftR } from "react-icons/cg";

import { Link as LinkR } from "react-router-dom";

import "./style/Resume.scss";

const Resume = () => {
  return (
    <>
      <div className="mobile__navbar">
        <p>
          <FaBars />
        </p>
      </div>

      <header>
        <nav>
          <ul>
            <li>
              <LinkR to="/" className="go__back">
                <CgArrowLeftR />
              </LinkR>
            </li>
          </ul>
        </nav>
      </header>

      <div className="resume__container">
        <div className="wrapper">
          <div className="resume__content">
            <img src="/images/information/resume.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
