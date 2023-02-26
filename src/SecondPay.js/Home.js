import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import SayAboutUs from "./SayAboutUs";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Coin from "./Coin";
const Home = () => {
    return (
        <>
            <div className="content-itme">
                <h3>Dive Into the digital world with us</h3>

                <div className="maindiv">
                    <div className="content">

                        <p className="para">Get the seamless and rewarding payment experience like Apes, Billpayment, Dmt, Matm, Pancard AdharPay and AdharPay Verification with Pay2need</p>
                        <NavLink to="/about" activeClassName="active" className="" >
                            <button className=" home-button">join us</button>
                        </NavLink>

                        <NavLink to="/about" activeClassName="active" className="" >
                            <button className=" home-button">Live Chat</button>
                        </NavLink>

                    </div>
                </div>
                
            </div>
            <Counter/>
            <Services />
            <SayAboutUs />
            <Coin />
            <About />
            <Contact />
            {/* <Coin /> */}
        </>
    )
};
export default Home;