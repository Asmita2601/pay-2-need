import React from 'react';
import './App.css';
import Home from './SecondPay.js/Home';
import About from './SecondPay.js/About';
import Services from './SecondPay.js/Services';
import Contact from './SecondPay.js/Contact';
import NavBar from './SecondPay.js/NavBar';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import AdharPay from "./DropdownItems/AdharPay"
import Pancard from './DropdownItems/Pancard';
import AdharpenV from "./DropdownItems/AdharpenV";
import Apes from "./DropdownItems/Apes";
import Billpaymant from "./DropdownItems/Billpaymant";
import MicroAtm from './DropdownItems/MicroAtm';
import MoneyTranfer from "./DropdownItems/MoneyTranfer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./SecondPay.js/Footer";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// import onlinegif from "./image/onlinegif.gif";

const App = ()=>{
  return(
    <BrowserRouter>
     <NavBar />
  <Routes>
  <Route path="/pancard" element={<Pancard/>}/>
  <Route path="/adharPay" element={<AdharPay/>}/>
  <Route path="/adharpenV" element={<AdharpenV/>}/>
  <Route path="/Apes" element={<Apes/>}/>
  <Route path="/billpaymant" element={<Billpaymant/>}/>
  <Route path="/microAtm" element={<MicroAtm/>}/>
  <Route path="/moneyTranfer" element={<MoneyTranfer/>}/>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/services" element={<Services />}/>
<Route path="/contact" element={<Contact />}/>
  </Routes>
  <Footer />
      {/* <Coin /> */}
      {/* <Counter /> */}
      </BrowserRouter>
  )
}

export default App;
