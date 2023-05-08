import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import mylogo from '../images/titleimg5.jpeg';
import { getToken } from '../../services/tokenService';

import { useSelector } from 'react-redux';

const Navbar = () => {

  let user = useSelector(state => state.user)
  let username = user.user+"pannel"

  let {access_token} = getToken();
  return (
    <div className='nav'>
      <div className="haha0">

        <img className='titleimg' src={mylogo}  width={70} height={40} alt="" />
        <h3 className='titlename'>Smart Health Card </h3>
      </div>
        <div className='haha'>
      <ul>
    {!access_token?<li>
    <Link to="/">Home</Link>
    </li>:
    <li>
      <Link to={username}> {user.user} </Link></li>}

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

export default Navbar;
