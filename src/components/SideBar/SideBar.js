import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiHackerrank, SiCodewars } from "react-icons/si";

import "./styles/SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="sidebar__container left">
        <ul>
          <li>
            <a
              href="https://github.com/UndeadAlien"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hello-connor/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.codewars.com/users/UndeadAlien"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodewars />
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/UndeadAlien"
              target="_blank"
              rel="noreferrer"
            >
              <SiHackerrank />
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar__container right">
        <h5>workhutchc@gmail.com</h5>
      </div>
    </>
  );
};

export default SideBar;
