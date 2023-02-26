import React from "react";
import "./pencard.css";
import { NavLink } from "react-router-dom";
const Pancard =()=>{
    return(
        <>
                  <div className="svg-div">
        <div className="upper-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L34.3,138.7C68.6,117,137,75,206,90.7C274.3,107,343,181,411,181.3C480,181,549,107,617,69.3C685.7,32,754,32,823,42.7C891.4,53,960,75,1029,90.7C1097.1,107,1166,117,1234,117.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </div>
            <div className="Apes">
                <div className="main-div">
                    <h1 className="pencard-heder">~PanCard~</h1>
                    <p>welcom back to check our more services</p>
                </div>   
            </div>
            <div className="pencard-content">
                <h2>Pan Card</h2>
                <p>UTI PAN (Permanent Account Number) Portal is a website managed by the UTI Infrastructure Technology And Services Limited (UTIITSL), which provides various services related to PAN cards in India. The services offered by the portal include PAN card application, PAN card correction/update, PAN card status checking, and reprint of PAN card. You can access the UTI PAN Portal by visiting the official website at this link.</p>
                <h5>
              <NavLink to="/https://www.utiitsl.com/UTIITSL_SITE/PAN/"> https://www.utiitsl.com/UTIITSL_SITE/PAN/</NavLink> </h5>
            </div>
            </div>
        </>
    )
};
export default Pancard;