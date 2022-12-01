import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header">
      <div className="container-fluid">
        <a className="link-hover navbar-brand header-link" href="#">
          My Portofolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center text-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="link-hover nav-link active text-uppercase header-link"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/work"
                className="link-hover nav-link text-uppercase  header-link"
              >
                Work Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="org"
                className="link-hover nav-link text-uppercase  header-link"
              >
                Organizational Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="link-hover nav-link text-uppercase  header-link"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="cer"
                className="link-hover nav-link text-uppercase  header-link"
              >
                Certificate
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="awards"
                className="link-hover nav-link text-uppercase  header-link"
              >
                Awards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
