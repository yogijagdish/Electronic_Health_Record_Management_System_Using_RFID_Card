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
    <div className="Patientlogin"> <br /><br /><br /><br />

     <div className="Patientlogin1">

     
    <div className='grid place-content-center'>

      <h1 className='text-4xl ml-10 font-semibold'> Patient Login !!! </h1>

      {/* for email field */}
      <p htmlFor='email' className="formlabel" >Email Address </p>
      <input type="email" name="email" id="patient" className="form-control" onChange={handleChange}/> 
      <p className='text-red-600 mt-2'>{serverError.email}</p>

      {/* for password field */}

      <p className='formlabel' htmlFor='password'>Password</p>
      <input type="password" name="password" id="patient-password" className='form-control' onChange={handleChange}/><br />
      <p className='text-red-600 mt-2'> {serverError.password}</p>

      {/* button field */}
      <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20 mx-11 text-green-600">
          Forgot Password?
        <p className='text-red-700 mx-11 my-2'>{serverError.msg}</p>
        </NavLink>
      </div>
    </div>


    </div>

    </div>
  )
}

export default Patientlog;