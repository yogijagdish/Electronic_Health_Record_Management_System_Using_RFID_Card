import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
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

  )
}

export default navbar;
