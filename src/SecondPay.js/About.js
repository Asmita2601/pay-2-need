import React from "react";
// import HomeT from "./HomeT";
import onlinegif from "../image/onlinegif.gif";
import { FcConferenceCall, FcStatistics } from "react-icons/fc";
import "./About.css";
const About = () => {
    return (
        <>
            <div className="about-box">
                <div className="about-content">
                    <h2 className="about-page">About us</h2>
                    <p>Aeps,Digital & Micro Payment Service Pay2need of service excellence
                        in the digital business of micro payments of services and remittances in a ‘real time’ environment is India's Payments Solutions Provider. Its business involves service aggregation and distribution, utilizing mobile and web for online payment processing and money transfer services. It is built to service the nation's
                        Telecom/DTH multiple Services Providers and Banks, pan India.</p>
                    <div className="about-content2">
                        <div className="custumer">
                        <div className="icon">
                        <FcConferenceCall className="icon1" />
                            <h3 className="about-customer">Customer analysis</h3>
                            </div>
                            <p>Objectively exceptional via customized via expertise.</p>
                        </div>

                        <div className="real-time">
                        <div className="icon">
                        <FcStatistics  className="icon1"/>
                            <h3  className="about-customer">Real time transactions</h3>
                            </div>
                            <p>Interactively integrate extensible users resource.</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                <img  className="about-img" src={onlinegif} alt="pic" />
                </div>
                {/* <HomeT /> */}
                {/* <div className="about-img">
                    <img src={onlinegif} alt="pic" />
                </div> */}

            </div>
        </>
    )
};
export default About;