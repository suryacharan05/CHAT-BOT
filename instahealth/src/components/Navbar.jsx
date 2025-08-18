import React from "react"
import { Outlet, Link } from "react-router-dom";

import '../CSS/navbar.css'
const Navbar = (props) => {
  return (
    <>
    <nav className="nav">
      <div className="logomain"><a href="/" className="logomain">InstaHealth</a></div>
  
    <Link to="/login" className="Link"><div className="navdiv c">Log in</div></Link>
    <Link to="/getstarted" className="Link"><div className="navdiv d">Get started</div></Link>
    
    </nav>
    <Outlet/>
    </>
  )
};

export default Navbar;
