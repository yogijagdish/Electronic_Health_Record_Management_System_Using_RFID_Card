import React from 'react';
import './style.css';
import Login from '../Login/login'
const adminlogin = () => {
  return (
    <div className='Adminlogin'>
        <Login name = "Admin" newpage = '/adminpanel'/>
    </div>
  )
}

export default adminlogin;