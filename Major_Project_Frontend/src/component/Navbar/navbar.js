import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import mylogo from '../images/titleimg5.jpeg';
const navbar = () => {
  return (
    <div className='nav'>
      <div className="haha0">

        <img className='titleimg' src={mylogo}  width={70} height={40} alt="" />
        <h3 className='titlename'>Smart Health Card </h3>
      </div>
        <div className='haha'>
      <ul>
     <li>
     <Link to="/">Home</Link>
     </li>

     <li>
     <Link to="/about">About</Link>
     </li>
     <li>
     <Link to="/contactus">Contactus</Link>
     </li>
      
      </ul>
        </div>

    </div>

  )
}

export default navbar;
