import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contactme.css"
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";

const Contactme = () => {
  return (
    <>
    <Navbar/>
       <div className="contact">
      <div className="contentents">
        <h2>contact us</h2>
        
      </div>

      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="text">
              <h3>address</h3>
              <p> 617 ,nitikhand - 3  , indirapuram ghaziabad</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text">
              <h3>phone</h3>
              <p>7011680391</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>email</h3>
              <p>rawatamit8282@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form>
            <h2>send Message</h2>
            <div className="inputbox">
              <input type="text" name="" />
              <span>fullname</span>
            </div>

            <div className="inputbox">
              <input type="text"  name = ""   />
              <span>email</span>
            </div>
            <div className="inputbox">
              <input type="text"  name = ""   />
              <span>type your message</span>
            </div>

            <div className="inputbox submit">
              <input type="submit"  name=""  placeholder="send" />
              
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
   
  );
};

export default Contactme;
