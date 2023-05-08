import './style.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDoctorLoginAPIMutation } from '../../services/datacommunication';
import { storeToken } from '../../services/tokenService';

import { useNavigate } from 'react-router-dom';

const Doctorlog = () => {

  // collecting the data entered by the user
  const [doctorLoginData, setDoctorLoginData] = useState({ email: "", password: ""});

  // handles the error during login
  const [error,setError] = useState({});

  const navigate = useNavigate();

  const [loginDoctor, {isLoading}] = useDoctorLoginAPIMutation();

  // takes care when user enters the data
  const handleChange = (e) => {
    setDoctorLoginData({ ...doctorLoginData,[e.target.name]:e.target.value });
  }

  // sends data to backend when button is clicked
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await loginDoctor(doctorLoginData);
    console.log(response)
    if (response.error) {
      setError(response.error.data)
      console.log(response.error.data)
    }
    if (response.data) {
      storeToken(response.data.token)
      console.log(doctorLoginData)
      navigate('/doctorpanel')
    }
  }

  return (
    <div className='grid place-content-center m-52'>

      <h1 className='text-3xl ml-16'> Doctor Login !!! </h1>

      {/* for email field */}
      <label htmlFor='email' className="text-sm mt-6" >Email Address </label>
      <input type="email" name="email" id="doctor" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/> 

      <p className='text-red-700'> {error.email}</p>

      {/* for password field */}

      <label className='text-sm mt-6' htmlFor='password'>Password</label>
      <input type="password" name="password" id="doctgor-password" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/>
      <p className="text-red-700"> {error.password} </p>

      {/* button field */}
      <button type="submit" className='rounded-lg bg-blue-600 h-8 w-32 mt-6 ml-20' onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20">
          Forget Password?
        </NavLink>
      </div>
      <p className='text-red-700'> {error.msg} </p>
    </div>
  )
}

export default Doctorlog;