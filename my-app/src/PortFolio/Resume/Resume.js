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
                  <span className="text">9999569851</span>
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
                  <span className="text"> Indirapuram, Ghaiziabad</span>
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
                  <h6>2010 - 2013</h6>
                  <h6>Master Degree i computer</h6>
                  <h6>university name</h6>
                </li>

                <li>
                  <h6>2010 - 2013</h6>
                  <h6>Master Degree i computer</h6>
                  <h6>university name</h6>
                </li>

                <li>
                  <h6>2010 - 2013</h6>
                  <h6>Master Degree i computer</h6>
                  <h6>university name</h6>
                </li>
              </ul>
            </div>

            <div className="contactInfo language">
              <h5 className="title">LANGUAGEs</h5>
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
              <h4 className="title2">Profile</h4>              <p>
                This simple Lorem Ipsum generator tool generates Lorem Ipsum
                according to the variety of parameters you may wish to set.
                Lorem Ipsum is essentially placeholder text that is often used
                by designers to test how their product will look once text has
                been inputted. Ipsum in its current form has been around since
                the 1960's and today is a cornerstone of dummy text for
                designers. Of course in the age of the web text is often
                formatted in an array of ways by HTML tags. This tool allows you
                to experiment with a variety of important HTML elements that
                your web page is most likely to employ; ones you may have
                overlooked. I can't tell you how many sites I have come across
                which don't use basic styling rules for elements such as which
                is just one of many reasons why front-end developers should be
                using a Lorem Ipsum generator like the one above religiously.
              </p>
            </div>

            <div  className="about skills">
              <h4 className="title2">Professional skills</h4>
              <div className="box">
                <h6>JAVA SCRIPT</h6>
                <div className="percentage">
                  <div style={{width : "86%"}}></div>
                </div>
              </div>

              <div className="box">
                <h6>HTML</h6>
                <div className="percentage">
                <div style={{width : "90%"}}></div>
                </div>
              </div>


              <div className="box">
                <h6>CSS</h6>
                <div className="percentage">
                <div style={{width : "85%"}}></div>
                </div>
              </div>

              <div className="box">
                <h6>NODE JS</h6>
                <div className="percentage">
                <div style={{width : "75%"}}></div>
                </div>
              </div>

              <div className="box">
                <h6>REACT</h6>
                <div className="percentage">
                <div style={{width : "89%"}}></div>
                </div>
              </div>


              <div className="box">
                <h6>MONGO DB</h6>
                <div className="percentage">
                <div style={{width : "70%"}}></div>
                </div>
              </div>

              <div className="box">
                <h6>SQL</h6>
                <div className="percentage">
                <div style={{width : "67%"}}></div>
                </div>
              </div>


            </div>

            <div  className="interest">
            <h4 className="title2">Interest</h4>
            <ul>
              <li><FontAwesomeIcon className="icon" icon={faHeadset}/>gameing</li>
              <li><FontAwesomeIcon className="icon" icon={faMusic}/> singing</li>
              <li><FontAwesomeIcon className="icon" icon={faTv} />webseries </li>
              <li><FontAwesomeIcon className="icon" icon={faTv} /> webseries </li>
            </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
