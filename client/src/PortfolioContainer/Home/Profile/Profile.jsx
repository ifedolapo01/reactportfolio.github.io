/* eslint-disable no-undef */
import React from "react";
// eslint-disable-next-line no-unused-vars
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";

import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#top">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#top">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#top">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#top">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#top">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Seun</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev✌",
                    1000,
                    "UI/UX Designer💻",
                    1000,
                    "Microsoft Office Expert😎",
                    1000,
                    "Problem Solver🌟",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack for designing websites and applications with UI/UX
              operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="SeunCV.pdf" download="Seun's CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
