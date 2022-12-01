import React from "react";
import profilePict from "../assets/EKI.jpg";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center pt-5 mt-5">
      <div className="d-flex">
        {/* Profile Picture */}
        <div>
          <img
            src={profilePict}
            className="rounded"
            alt=""
            style={{ width: "250px" }}
          />
        </div>

        {/* User Info */}
        <div className="user-container ps-5 ms-5 ">
          {/* Fullname */}
          <p className="h1 text-dark text-uppercase">
            Rizki Rakhmadani Rufendi
          </p>
          <p className="h4 text-muted">Frontend Web Developer</p>
          <p className="h5 text-muted">
            <a
              className="userInfo text-muted text-decoration-none"
              href="mailto:rrakhmadani@gmail.com"
            >
              rrakhmadani@gmail.com
            </a>{" "}
            |{" "}
            <a
              className="userInfo text-muted text-decoration-none"
              href="https://wa.me/6281284737635?"
            >
              081284737635
            </a>{" "}
            |{" "}
            <a
              className="text-decoration-none"
              href="https://www.linkedin.com/in/rizki-rakhmadani/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>

          <div className="pt-4 mt-4">
            <p className="h5 text-dark text-justify fst-italic">
              Hardworking person seeking for employment, have experience in the
              field of Information and Technology Department. Interested in
              programming, website development, software development, software
              and hardware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
