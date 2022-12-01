import React from "react";

const Footer = () => {
  return (
    <footer className="navbar fixed-bottom navbar-light footer">
      <div className="container-fluid d-flex justify-content-center">
        <p href="" className="text-light">
          Made with ❤️ by{" "}
          <span>
            <a
              href="mailto:rrakhmadani@gmail.com"
              className="text-decoration-none font-monospace  footer-link"
            >
              rrakhmadani@gmail.com
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
