import './style.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Patientlog = () => {

  // collecting the data entered by the user
  const [ patientLoginData, setPatientLoginData] = useState({email:"",password:""});

  // takes care when user enters the data
  const handleChange = (e) => {
    setPatientLoginData({...patientLoginData,[e.target.name]:e.target.value});
  }

  // sends data to backend when button is clicked
  const handleClick = (e) => {
    console.log(patientLoginData)
  }

  return (
    <div className='grid place-content-center m-52'>

      <h1 className='text-3xl ml-16'> Patient Login !!! </h1>

      {/* for email field */}
      <label htmlFor='email' className="text-sm mt-6" >Email Address </label>
      <input type="email" name="email" id="patient" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/> 

      {/* for password field */}

      <label className='text-sm mt-6' htmlFor='password'>Password</label>
      <input type="password" name="password" id="patient-password" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/>

      {/* button field */}
      <button type="submit" className='rounded-lg bg-blue-600 h-8 w-32 mt-6 ml-20' onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20">
          Forget Password?
        </NavLink>
      </div>
    </div>
  )
}

export default Patientlog;