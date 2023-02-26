import React,{useState} from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css";


 const Counter = ({ className, ...rest})=> {
    const [ViewPortEntered, setViewPortEntered] = useState(false)
  return(
    <>
<div className="counter">
    <div className="counter-row">
    {/* 1st counter */}
        <div className="counter-column">
            <strong data-number="305">
             <CountUp {...rest} start={ ViewPortEntered ? null: 0} end={305}>
              {({countUpRef})=> {
                return(
                    <VisibilitySensor
                    active = {!ViewPortEntered}
                    onChange ={isVisible =>{
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                )
              }}
             </CountUp>
            </strong>
            <span> On Going <br/> project</span>
        </div>
           {/* 2nd counter */}
        <div className="counter-column">
            <strong data-number="1050">
             <CountUp {...rest} start={ ViewPortEntered ? null: 0} end={305}>
              {({countUpRef})=> {
                return(
                    <VisibilitySensor
                    active = {!ViewPortEntered}
                    onChange ={isVisible =>{
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                )
              }}
             </CountUp>
            </strong>
            <span>Total <br/> project</span>
        </div>
          {/* 3rd counter */}
        <div className="counter-column">
            <strong data-number="206">
             <CountUp {...rest} start={ ViewPortEntered ? null: 0} end={1906}>
              {({countUpRef})=> {
                return(
                    <VisibilitySensor
                    active = {!ViewPortEntered}
                    onChange ={isVisible =>{
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                )
              }}
             </CountUp>
            </strong>
            <span> total <br/> client</span>
        </div>
             {/* 4th counter */}
        <div className="counter-column">
            <strong data-number="540">
             <CountUp {...rest} start={ ViewPortEntered ? null: 0} end={305}>
              {({countUpRef})=> {
                return(
                    <VisibilitySensor
                    active = {!ViewPortEntered}
                    onChange ={isVisible =>{
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                )
              }}
             </CountUp>
            </strong>
            <span> Total <br/> Branches</span>
        </div>

    </div>
</div>
    </>
  )
 };
 export default Counter;