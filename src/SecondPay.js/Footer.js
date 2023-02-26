import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "../image/logo.png";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="grid-three">
                    <div className="footer-link">
                        <span>USEFUL LINKS</span>
                        <NavLink className="footer-link-main" to="/">Home</NavLink>
                        <NavLink className="footer-link-main" to="/about">About</NavLink>
                        <NavLink className="footer-link-main" to="/services">Services</NavLink>
                        <NavLink className="footer-link-main" to="/contact">Contact</NavLink>
                        <NavLink className="footer-link-main" to="/login"> Login</NavLink>
                    </div>
                    <div className="pay-need">
                        <span className="span2">Pay2need</span>
                       <span><img src={logo} className="footer-img" alt="pic" /></span>
                       <span className="span4"><input type="email" name="" required="required" placeholder="Your Email Address" /></span>
                        <NavLink to="/">
                            <button className="footer-btn">Join with us</button>
                        </NavLink>
                    </div>
                    <div className="footer-contact">
                        <span className="span3">CONTACT</span>
                        {/* <P className="footer-p">123,XYZ Road,bsk 3 kanpur,utter pardesh</P> */}
                        <div className="footer-icon">
                            <BsFacebook className="footer-icon-main"/>
                            <BsTwitter className="footer-icon-main" />
                            <BsInstagram className="footer-icon-main" />
                            <BsLinkedin className="footer-icon-main" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer;