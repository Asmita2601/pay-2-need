import React from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";
// import { FcMoneyTransfer, FcDocument } from "react-icons/fc";
import aadharpay from "../image/aadharpay.png";
import aeps from "../image/aeps.png"
import Microatm from "../image/Microatm.png";
import pancard from "../image/pancard.png";
import verification from "../image/verification.png";
import money from "../image/money.png";
import billpayment from "../image/billpayment.png";


const Services = () => {
    return (
        <>
            <div className="color-div">
                <div className="headline">
                    <h1>Services We Are Providing</h1>
                    <p>Pay2need is a one-stop-shop for multiple services like Aadhaar Enabled Payment System (AePS), Micro ATM, Money Transfer Services, Bill Payments, Recharge.</p>
                </div>
                {/* 1st services */}
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <img src={aeps} alt="img" />
                        </div>
                        <div className="content">
                            <h3>Aeps</h3>
                            <p>Aadhaar Enabled Payment System service enables the customer to use their Aadhaar card .</p>
                            <NavLink className="service-link" to="/apes">Read More</NavLink>
                        </div>
                    </div>
                    {/* 2nd services */}
                    <div className="box">
                        <div className="icon">
                            <img src={billpayment} alt="img" /></div>
                        <div className="content">
                            <h3>Bill Payment</h3>
                            <p>This Services we give all kind of bill payments like Mobile Recharge, Electricity Bill Payment,Dth Recharge.</p>
                            <NavLink className="service-link" to="/billpaymant">Read More</NavLink>
                        </div>
                    </div>
                    {/* 3rd services */}
                    <div className="box">
                        <div className="icon">
                            {/* <FcMoneyTransfer /> */}
                            <img src={money} alt="img" />
                        </div>
                        <div className="content">
                            <h3>Money transfer</h3>
                            <p>Money Transfers are electronic transfer of money from one bank account to another, without the direct intervention of bank staff.</p>
                            <NavLink className="service-link" to="/moneytranfer">Read More</NavLink>
                        </div>
                    </div>
                    {/* 2nd services */}
                    <div className="box">
                        <div className="icon">
                            <img src={Microatm} alt="img" />
                        </div>
                        <div className="content">
                            <h3>Micro ATM</h3>
                            <p>Micro ATMs are card swipe machines through which banks can remotely connect to their core banking system.</p>
                            <NavLink className="service-link" to="/microatm">Read More</NavLink>
                        </div>
                    </div>
                    {/* 3rd services */}
                    <div className="box">
                        <div className="icon">
                            <img src={pancard} alt="img" />
                        </div>
                        <div className="content">
                            <h3>Pancard</h3>
                            <p>Aadhaar payments, which are managed by the National Payments Corporation of India.adhaar Enabled Payment System service enables the customer to use their Aadhaar card .</p>
                            <NavLink className="service-link" to="/pancard">Read More</NavLink>
                        </div>
                    </div>
                    {/* 2nd services */}
                    <div className="box">
                        <div className="icon">
                            <img src={aadharpay} alt="img" />
                        </div>
                        <div className="content">
                            <h3>Aadhar Pay</h3>
                            <p>Aadhaar payments, which are managed by the National Payments Corporation of India.</p>
                            <NavLink className="service-link" to="/adharpay">Read More</NavLink>
                        </div>
                    </div>
                    {/* 3rd services */}
                    <div className="box">
                        <div className="icon">
                            <img src={verification} alt="img" />
                        </div>
                        <div className="content">
                            <h3>Aadhaar Pan Verification</h3>
                            <p>Adhaar and PAN verification service will enable service providers and Aadhaar and PAN number holders to verify if the Aadhaar and PAN number is valid and is not deactivated.</p>
                            <NavLink className="service-link" to="/adharpenv">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Services;