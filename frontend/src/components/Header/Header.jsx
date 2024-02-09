import React, { useState } from "react";
import "./Header.css";
import { Menu, XCircle } from "lucide-react";
const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Portfolio
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#blogs" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Blogs
              </a>
            </li>
          </ul>
          <XCircle onClick={() => showMenu(!Toggle)} className="nav__close" />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <Menu />
          {/* {username === undefined && <button>Create Portfolio</button>} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
