import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="header-container">
            <div className="profile-image">
                <img src="./assets/images/bio.jpg" width="100%" alt="My picture"/>
            </div>
            <div className="profile-data">
                <h1>Roberto Dávila</h1>
                <h4>Fullstack Developer</h4>
            </div>
            <div className="profile-social">
                <nav role="navigation">
                    <ul>
                        <li>
                            <a href="https://twitter.com/robertpixelania" title="Twitter">
                                <i className="fab fa-twitter"></i>
                                <span className="menu-title sr-only">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/robertpixelania" title="Instagram">
                                <i className="fab fa-instagram"></i>
                                <span className="menu-title sr-only">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/robertodavila7" title="Github">
                                <i className="fab fa-github"></i>
                                <span className="menu-title sr-only">Github</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="profile-resume">
                <a href="./assets/files/resume.pdf" target="_blank">Download Resume</a>
            </div>
        </div>
    </div>
  );
};

export default Header;
