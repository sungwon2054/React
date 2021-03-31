import React from "react";
import { Link } from "react-router-dom";
import "./Navagation.css";

function Navagation() {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default Navagation;
