import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Portfolio</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://instagram.com"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://github.com"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Pruthviraj Auti | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
