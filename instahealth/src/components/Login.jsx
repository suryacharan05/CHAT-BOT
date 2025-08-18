import React from "react"
import "../CSS/login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loadinganimation from "../assets/loadinganimation.json";
import { Player } from "@lottiefiles/react-lottie-player";




const Login = (props) => {
  const [loading,setloading] = useState(false);
  const[errorwarning,seterrorwarning] = useState("");
  const navigate = useNavigate();
  const [logindata,setlogindata] = useState({username:"",password:""});
  const handleloginchange = (e) => {
    const {name,value} = e.target;
    setlogindata({...logindata,[name]:value});
  }
  const handleloginsubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try{
      const res = await axios.post("http://localhost:1729/login",logindata);
      navigate("/chat");
      // seterrorwarning("");`
      sessionStorage.setItem("user", JSON.stringify(logindata)); 

      seterrorwarning(res.data.message + " Welcome to OpenTable" + logindata.username)
      
    }
    catch(err){
      seterrorwarning(err.response.data.message);
      // alert(err.res.data.message);
    }
    finally{
setloading(false);
    }
  };
  return (
    
      <>
      <div className="logologin"><a href="/" className="logologin">InstaHealth</a></div>
      <div className="loginpage">
        
        <div className="login">
          <div className="heading1">Login</div>
            <form className="loginform"  onSubmit={handleloginsubmit}>
              <input className="inp1 username" type="text" placeholder="Username" name="username"  onChange={handleloginchange} required />
              <input className= "inp1 password"type="password" placeholder="Password" name="password" onChange={handleloginchange} required />
              <button type="submit"  className="loginbutton">
                {loading ? <span className="positionlogin">Login</span>:"Login"}
                    {loading ? <div className="loadinganimationstyle" > <Player
            autoplay
            loop
            src={loadinganimation}
            

            /></div> : " "}
              </button>
              <p>Don't have an account? <a href="/getstarted" className="getstartedlogin">Get started</a></p>
            </form>
            <div className="error warnings">{errorwarning}</div>
          
      </div>
      </div></>
    
  )
};

export default Login;
