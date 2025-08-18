import React from "react"
import '../CSS/signup.css'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Get_started = (props) => {
  const [errwarning , seterrwarning] = useState("");
  const navigate = useNavigate();
const [signupformdata,setsignupformdata] = useState({username:"",email:"",password:""});
const handlechange = (e) => {
  const {name,value} = e.target;
  setsignupformdata({...signupformdata,[name]:value});
}
const handlesubmit = async (e) => {
  e.preventDefault();
  
  try{
    const res = await axios.post("http://localhost:1729/signup",signupformdata);
    console.log(signupformdata);
    // console.log("venugopal  ");
   seterrwarning(res.data.message);
    navigate("/login");
  }
  catch(err){
    seterrwarning(err.response.data.message);
  }
};





  return (
    <>
    <div className="logo"><a href="/" className="logomain1">InstaHealth</a></div>
    <div className="signuppage">
      
      <div className="signup">
        <div className="heading">SignUp</div>
        <form className="signupform"   onSubmit={handlesubmit}> 
              <input className="inp username" name ="email" type="text" placeholder="Email"  onChange={handlechange} required/>
              {/* <input className="inp username" name = "name"type="text" placeholder="name" /> */}
              <input className="inp username" name= "username" type="text" placeholder="Username" onChange={handlechange}required />
              <input className= "inp password" name = "password" type="password" placeholder="Password" onChange={handlechange} required/>
              <button type="submit" className="getstartedbutton">Continue</button>
              <p className="PP">Already have an account? <a href="/login" className="getstartedlogin">Login</a></p>
            </form>
            <div className="errorwarning">{errwarning}</div>
        
    </div>
    </div></>
  )
};

export default Get_started;
