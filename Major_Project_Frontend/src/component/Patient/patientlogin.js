import React from 'react';
import './style.css';
import Login from '../Login/login'
const patientlogin = () => {
  return (
    <div className='Patientlogin'>
        <Login name = "Patient" newpage = '/patientpanel'/>
    </div>
  )
}

export default patientlogin;