import './style.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDoctorLoginAPIMutation } from '../../services/datacommunication';
import { getToken, storeToken } from '../../services/tokenService';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/userSlice';
import { setUserToken } from '../../features/authSlice';

import { useNavigate } from 'react-router-dom';


const Doctorlog = () => {

  // collecting the data entered by the user
  const [doctorLoginData, setDoctorLoginData] = useState({ email: "", password: ""});

  // handles the error during login
  const [error,setError] = useState({});


  // navigate the page to doctor pannel if the correct informaton is given
  const navigate = useNavigate();

  // use to set the state of the slice so they can be used any where in the pages
  const dispatch = useDispatch();

  // api call being made
  const [loginDoctor, {isLoading}] = useDoctorLoginAPIMutation();


  // takes care when user enters the data
  const handleChange = (e) => {
    setDoctorLoginData({ ...doctorLoginData,[e.target.name]:e.target.value });
  }

  // sends data to backend when button is clicked
  const handleClick = async (e) => {
    e.preventDefault();
    // response
    const response = await loginDoctor(doctorLoginData);
    console.log(response)

    // handing error
    if (response.error) {
      setError(response.error.data)
      console.log(response.error.data)
    }

    // handling correct information
    if (response.data) {
      storeToken(response.data.token)
      console.log(doctorLoginData)
      const user = response.data.user
      let access_token = getToken();
      // gives the information about the user
      dispatch(setUser({user:user}))
      dispatch(setUserToken({access_token:access_token}))
      navigate('/doctorpanel')
    }
  }

  return (
    <div className="Doctorlogin"> <br /><br /><br /><br />

      <div className="Doctorlogin1">

 
    <div className='grid place-content-center'>

      <h1 className='text-4xl ml-10 font-semibold '>Doctor Login !!! </h1>
       
      {/* for email field */}
      <p htmlFor='email' className='formlabel' >Email Address </p>
      <input type="email" name="email" id="doctor" className='form-control' onChange={handleChange}/> 

      <p className='text-red-700'> {error.email}</p>

      {/* for password field */}

      <p htmlFor='password' className='formlabel'>Password</p>
      <input type="password" name="password" id="doctgor-password" className='form-control' onChange={handleChange}/><br />
      <p className="text-red-700"> {error.password} </p>

      {/* button field */}
      <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20 mx-11 text-green-600">
          Forgot Password?
        </NavLink>
      <p className='text-red-700 mx-11 my-2'> {error.msg} </p>
      </div>
    </div>

    </div>

     </div>
  )
}

export default Doctorlog;