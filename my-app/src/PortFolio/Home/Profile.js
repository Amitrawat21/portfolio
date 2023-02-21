import React from "react";
import Typical from "react-typical"
import Navbar from "../Navbar/Navbar";

import "./Profile.css"



const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="profile_container">

   
      <div className="profile_parent">
        <div className="profile_detail">
          <div className="colz">
            <div className="colz-icon">
               
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook-square"></i>
            </a>

            <a href="https://www.google.com/">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
       
        <div className="profile-details-name">
          <span  className="primary-text">
            { " "}
            Hello i am Amit rawat
          </span>
        </div>
        <div className="profile-details-role">
          <span  className="primary-text">
            { " "}
            <h1>
              {" "}
              <Typical
              loop = {Infinity}
              steps = {[
            
                "full stack developer",
                1000,
                "mern stack developer",
                1000,
                "React",
                1000
              ]}
              
              ></Typical>
            </h1>
            <span  className="profile-role-tag-line">
              this is not india this is brazil and this is my confitunity
            </span>
          </span>
        </div>

        <div  className="profile-option">
          <button className="btn primary-btn">
            { " "}
            Hire Me
          </button >
          <a href="RESUME PDF.pdf"  download  = "RESUME PDF.pdf">
            <button className=" btn highlighted-btn">Get Resume</button>
          </a>
        </div>
        </div>
        <div  className="profile-picture">
          <div  className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>

   
  
    </>

  )
};

export default Profile;
