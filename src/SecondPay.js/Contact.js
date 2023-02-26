import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt,FaPhoneSquareAlt, FaMailBulk } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact1">
        <div className="content1">
          <h2>Contact us</h2>
          <p className="contact-heading">Take the first step by contacting us and give us the opportunity to grow your business with our experts.</p>
        </div>
        <div className=" main-container">
          <div className="contactInfo">
            <div className="box1">
              <div className="icon1"><FaMapMarkerAlt /></div>
              <div className="text1">
                <h3>Address</h3>
                <p>4676 sugar camp road <br /> oyrhjk ,fjgrytrtr <br /> g67890</p>
              </div>
            </div>

            <div className="box1">
              <div className="icon1"><FaPhoneSquareAlt/></div>
              <div className="text1">
                <h3>Phone</h3>
                <p>4676990000</p>
              </div>
            </div>

            <div className="box1">
              <div className="icon1"><FaMailBulk /></div>
              <div className="text1">
                <h3>Email</h3>
                <p>4676 sugar camp road </p>
              </div>
            </div>
          </div>
          {/* customer detail */}
          <div className="contactForm">
            <from>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Full name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="send" />

              </div>
            </from>
          </div>


        </div>
      </div>

    </>
  );
};
export default Contact;