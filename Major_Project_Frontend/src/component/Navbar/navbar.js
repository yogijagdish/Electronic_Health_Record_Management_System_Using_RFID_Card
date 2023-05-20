import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import mylogo from '../images/logo.png';
import { getToken } from '../../services/tokenService';

import { useSelector } from 'react-redux';

const Navbar = () => {

  let user = useSelector(state => state.user)
  let username = user.user+"panel"

  let {access_token} = getToken();
  return (
    // navbar starts
    <div className='nav'>

      {/* about title of project */}
      <div className="haha0">

      <img className='titleimg' src={mylogo} alt="" />
        <p className='titlename'>Smart Health Card </p>
      </div>
        <div className='haha'>
      <ul>
        {/* home link */}
    {!access_token?<li>
    <Link to="/">Home</Link>
    </li>:
    <li>
      <Link to={username}> {user.user} </Link></li>}

     <li>
      {/* about link */}
     <Link to="/about">About</Link>
     </li>
     {/* contact link */}
     <li style = {{width:'10vw'}}>
     <Link to="/contactus">Contact Us</Link>
     </li>
      
      </ul>
        </div>

    </div>

  )
}

export default Navbar;
