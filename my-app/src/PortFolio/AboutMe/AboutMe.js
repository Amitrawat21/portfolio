import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import Typical from "react-typical";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="Container">
        <div className="sum-container">
          <h2>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "get to know about me",
                2000,
                "its amit rawat",
                2000,
                " i am full stack developer",
                2000,
              ]}
            ></Typical>
          </h2>
        </div>

        <div className="container-about_container">
          <div className="image">
            <div className="about-image"></div>
          </div>

          <div className="about_content">
            <div className="content">
              <h2>ABOUT</h2>
              <div className="content-detail">
                <h5>
                  this is amit rawat a full stack webdeveloper i love combining the worlds of
                  logic and creative desgin to make eye catching , accessible and user friendy website and application
                  . Seeking to leverage proficiency in React , node js, SQL, mongoose,
                  JavaScript , html and CSS in a full-time career as a full-stack
                  developer .
                </h5>

                <h5>
                   i am excited to make the leap and continue refining m skill with 
                   right company
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
