import React from "react";

import "./style/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="wrapper">
          <div className="footer__content">
            <div className="header__creator">
              <p>
                Created by <span>Connor Hutchinson</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
