import React from "react";
import "./Resume.css";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/Home/amit.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="body">
        <div className="containers">
          <div className="left-side">
            <div className="profileText">
              <div className="imgBx">
                <img src={img} />
              </div>
              <h2>amit rawat </h2>
              <span>WEB DEVELOPER</span>
            </div>
            <div className="contactInfo">
              <h5 className="title">Contact Info</h5>
              <ul>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span className="text">7011680391</span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="text">rawatamit8285@gmail.com</span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faLocation} />
                  </span>
                  <span className="text"> NitiKhand-3,Indirapuram,gzb</span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <span className="text">https://github.com/Amitrawat</span>
                </li>
              </ul>
            </div>

            <div className="contactInfo education">
              <h5 className="title">EDUCATION</h5>
              <ul>
                <li>
                  <h6>2013- 2015</h6>
                  <h6>Secondary School</h6>
                  <h6>Ralli International School</h6>
                </li>

                <li>
                  <h6>2015 - 2017</h6>
                  <h6>High School</h6>
                  <h6>Ralli Internstional School</h6>
                </li>

                <li>
                  <h6>2017 - 2021</h6>
                  <h6>Mechanical Branch</h6>
                  <h6>Inderprastha Engineeing College</h6>
                </li>
              </ul>
            </div>

            <div className="contactInfo language">
              <h5 className="title">LANGUAGE</h5>
              <ul>
                <li>
                  <span className="text">hindi</span>
                  <span className="percentage">
                    <div style={{ width: "98%" }}></div>
                  </span>
                </li>

                <li>
                  <span className="text">englsh</span>
                  <span className="percentage">
                    <div style={{ width: "81%" }}></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <div className="about">
              <h4 className="title2">Profile</h4>{" "}
              <p>
              My Career Objective is to work with an organization that can
                  help me grow technically and professionally . I want to
                  fullfill utilize my skills to make significant contribute to
                  the success of the employer in addition to my individual
                  growth.Seeking a challenging and rewarding opportunity with an
                  organization which recognizes and utilizes my true potential.
              </p>
            </div>

            <div className="about skills">
              <h4 className="title2">Professional skills</h4>
              <div className="box">
                <h6>JAVA SCRIPT</h6>
                <div className="percentage">
                  <div style={{ width: "86%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>HTML</h6>
                <div className="percentage">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>CSS</h6>
                <div className="percentage">
                  <div style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>NODE JS</h6>
                <div className="percentage">
                  <div style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>REACT</h6>
                <div className="percentage">
                  <div style={{ width: "89%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>MONGO DB</h6>
                <div className="percentage">
                  <div style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>SQL</h6>
                <div className="percentage">
                  <div style={{ width: "67%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>JAVA</h6>
                <div className="percentage">
                  <div style={{ width: "50%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>DATA STRUCTURE AND ALOGO</h6>
                <div className="percentage">
                  <div style={{ width: "61%" }}></div>
                </div>
              </div>

              <div className="box">
                <h6>OOPS CONCEPT</h6>
                <div className="percentage">
                  <div style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            <div className="interest">
              <h4 className="title2">Interest</h4>
              <ul>
                <li>
                  <FontAwesomeIcon className="icon" icon={faHeadset} />
                  gameing
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faMusic} /> singing
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faTv} />
                  webseries{" "}
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
