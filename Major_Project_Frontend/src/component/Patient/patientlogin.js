import './style.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import { usePatientLoginAPIMutation } from '../../services/datacommunication';

import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../services/tokenService';

const Patientlog = () => {

  const [patientLogin, {isLoading}] = usePatientLoginAPIMutation();

  const [serverError, setServerError] = useState({});

  const navigate = useNavigate();

  // collecting the data entered by the user
  const [ patientLoginData, setPatientLoginData] = useState({email:"",password:""});

  // takes care when user enters the data
  const handleChange = (e) => {
    setPatientLoginData({...patientLoginData,[e.target.name]:e.target.value});
  }

  // sends data to backend when button is clicked
  const handleClick = async (e) => {
    console.log(patientLoginData)
    const response = await patientLogin(patientLoginData);
    if (response.error) {
      console.log(response.error)
      setServerError(response.error.data)
    }
    if (response.data) {
      storeToken(response.data.token)
      console.log(response.data)
      navigate('/patientpanel')
    }

  }

  return (
    <div className='grid place-content-center m-52'>

      <h1 className='text-3xl ml-16'> Patient Login !!! </h1>

      {/* for email field */}
      <label htmlFor='email' className="text-sm mt-6" >Email Address </label>
      <input type="email" name="email" id="patient" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/> 
      <p className='text-red-600 mt-2'>{serverError.email}</p>

      {/* for password field */}

      <label className='text-sm mt-6' htmlFor='password'>Password</label>
      <input type="password" name="password" id="patient-password" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/>
      <p className='text-red-600 mt-2'> {serverError.password}</p>

      {/* button field */}
      <button type="submit" className='rounded-lg bg-blue-600 h-8 w-32 mt-6 ml-20' onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20">
          Forget Password?
        </NavLink>
        <p className='text-red-600 mt-2'>{serverError.msg}</p>
      </div>
    </div>
  )
}

export default Patientlog;