import React from "react";
import "./HomeT.css";
import logo from "../image/logo.png"
import gif from "../image/gif.gif"
// import coin1 from "../image/coin1.jfif";
import onlinegif from "../image/onlinegif.gif";
import coin3 from "../image/coin3.jpg";
// import imageSlider from "./Data";
// import gif from "../image/gif.gif";
 const HomeT =() =>{

    return(
        <>
  
  <div className="slider">
    {/* <img  className="slider-img" src={logo} alt="mainpic" /> */}
    <input type="radio" name="slider"/>
    
    <div className="imgBx" >
    <img src={gif} alt="pic" className="pic"/>
    <div className="content">
        {/* <h2>hellooo</h2> */}
        </div>

    </div>
    <input type="radio" name="slider"/>
    <div className="imgBx">
    <img src={logo} alt="pic" className="pic"/>
    <div className="content">
        {/* <h2>hellooo</h2> */}
        </div>
    </div>

    <input type="radio" name="slider" />
    <div className="imgBx">
    <img src={onlinegif} alt="pic" className="pic"/>
    <div className="content">
        {/* <h2>hellooo</h2> */}
        </div>
    </div>

    <input type="radio" name="slider" />
    <div className="imgBx">
    <img src={coin3} alt="pic" className="pic"/>
    <div className="content">
        {/* <h2>hellooo</h2> */}
        </div>
    </div>
  </div>
    
        </>
    )
 };
 export default HomeT;