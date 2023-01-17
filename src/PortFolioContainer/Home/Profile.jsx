import React from "react";
import Typical from "react-typical";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="Profile-container">
      <div className="Profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#" className="fa fa-github"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Shubham</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiatic Dev ",
                    5000,
                    "Front End Developer",
                    5000,
                    "Cross PlatForm Dev",
                    5000,
                  ]}
                ></Typical>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire ME{" "}
            </button>
            <a href="ehizcv.pdf" download="ehizcv.pdf">
              {" "}
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

export default Profile;
