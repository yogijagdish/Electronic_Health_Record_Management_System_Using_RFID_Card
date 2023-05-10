import './style.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useReceptionLoginAPIMutation } from '../../services/datacommunication';
import { getToken, storeToken } from '../../services/tokenService';

import { useDispatch } from 'react-redux';
import {setUserToken} from "../../features/authSlice"
import { setUser } from '../../features/userSlice';

import { useNavigate } from 'react-router-dom';
const Adminlog = () => {

  // collecting the data entered by the user
  const [ adminLoginData, setAdminLoginData] = useState({email:"",password:""});

  // for handling the error
  const [error,setError] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // api
  const [loginReception, {isLoading}] = useReceptionLoginAPIMutation(); 

  // takes care when user enters the data
  const handleChange = (e) => {
    setAdminLoginData({...adminLoginData,[e.target.name]:e.target.value});
  }

  // sends data to backend when button is clicked
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await loginReception(adminLoginData);
    if (response.error) {
      console.log(adminLoginData)
      setError(response.error.data)
      console.log(response.error)
    }
    if (response.data){
      storeToken(response.data.token)
      let {access_token} = getToken();
      const user = response.data.user
      dispatch(setUserToken({access_token:access_token}));
      dispatch(setUser({user:user}))
      console.log(response.data)
      navigate('/adminpanel')
    }

  };

  let {access_token} = getToken();

  useEffect(()=>{
    dispatch(setUserToken({access_token:access_token}));
  },[access_token,dispatch])

  return (
    <div className='grid place-content-center m-52'>

      <h1 className='text-3xl ml-16'> Admin Login !!! </h1>

      {/* for email field */}
      <label htmlFor='email' className="text-sm mt-6" >Email Address </label>
      <input type="email" name="email" id="admin" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/> 
      <p className='text-red-700'> {error.email} </p>

      {/* for password field */}

      <label className='text-sm mt-6' htmlFor='password'>Password</label>
      <input type="password" name="password" id="admin-password" className='border-2 rounded-lg mt-2 h-8 w-80' onChange={handleChange}/>
      <p className='text-red-700'>{error.password}</p>

      {/* button field */}
      <button type="submit" className='rounded-lg bg-blue-600 h-8 w-32 mt-6 ml-20' onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20">
          Forget Password?
        </NavLink>
      </div>
      <p className='text-red-700'>{error.msg}</p>
    </div>
  )
}

export default Adminlog;