import React from "react"
import "../CSS/Landingpage.css";
import "../CSS/signup.css";
const Landingpage = (props) => {
  return (
    <>
      <div className="seg1" >
        <div className="seg1dup">
        <div className="qoute">
          <div className="linetag1">"Quality Care<span className="idea"> When </span>You Need It"
           </div>
           </div>
        <div className="tagline">Find Your people</div>
        <div className="setgo"><a href="/getstarted" style={{color:"rgb(56, 147, 177)"}}>Get Started</a></div>
        </div>
      </div>
   </>
  )
};

export default Landingpage;
