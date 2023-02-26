import React, { useState } from "react";
import "./NavBar.css";
import logo from "../image/logo.png"
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const NavBar = () => {


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-links" onClick={handleClick} >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}  >
                About
              </NavLink>
            </li>
            {/* <div className="menu dropmenu">
            <li className="nav-item dropmain">
            <NavLink to="/services" activeClassName="active" className="nav-links" onClick={handleClick}  >
         Services
        </NavLink>
        <ul className="dropdown">
         <li className="list">
         <NavLink to="/apes">Apes</NavLink>
         </li>
         <li className="list">
         <NavLink to="/billpaymant">Billpaymant</NavLink>
         </li>
         <li className="list">
         <NavLink to="/moneyTranfer">Money Transfer</NavLink>
         </li>
         <li className="list">
         <NavLink to="/microAtm">Micro ATM</NavLink>
         </li>
         <li className="list">
         <NavLink to="/pancard">Pancard</NavLink>
         </li>
         <li className="list">
         <NavLink to="/adharpenV">Adhar pen Verification</NavLink>
         </li>
         <li className="list">
         <NavLink to="/adharPay">Adhar Pay</NavLink>
         </li>
        
        </ul>
            </li> */}
            {/* </div> */}
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}  >
                Contact 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}  >
                <button className="button">Login</button>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}  >
                <button className="button">Singin</button>
              </NavLink>
            </li>

            <Dropdown as={ButtonGroup}>
              <Button variant="success"><NavLink className="service-butn" to="/services" onClick={handleClick}>Services</NavLink></Button>
              <Dropdown.Toggle Services="success" id="dropdown-split-basic" />
              <Dropdown.Menu className="drop-menu">
                <Dropdown.Item href="#/action-2"><NavLink to="/apes" onClick={handleClick}>Apes</NavLink></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><NavLink to="/billpaymant" onClick={handleClick}>Billpaymant</NavLink></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="/moneyTranfer" onClick={handleClick}>Money Transfer</NavLink></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="/microAtm" onClick={handleClick}>Micro ATM</NavLink></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="/pancard" onClick={handleClick}>Pancard</NavLink></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="/adharpenV" onClick={handleClick}>Adhar pen Verification</NavLink></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><NavLink to="/adharPay" onClick={handleClick}>Adhar Pay</NavLink></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>

          {/* <button className="button">login</button> */}
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
          </div>
        </div>
      </nav>
    </>
  )
};
export default NavBar;