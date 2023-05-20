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
    <div className="Adminlogin"><br /><br /><br /><br />

     <div className="Adminlogin1">

   
    <div className='grid place-content-center'>

      <h1 className='text-4xl ml-10 font-semibold'> Admin Login !!! </h1>

      {/* for email field */}
      <p htmlFor='email' className="formlabel" >Email Address </p>
      <input type="email" name="email" id="admin" className='form-control' onChange={handleChange}/> 
      <p className='text-red-700'> {error.email} </p>

      {/* for password field */}

      <p className='formlabel' htmlFor='password'>Password</p>
      <input type="password" name="password" id="admin-password" className='form-control' onChange={handleChange}/><br />
      <p className='text-red-700'>{error.password}</p>

      {/* button field */}
      <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleClick}> Submit </button>

      {/* forget password */}
      <div className='mt-8 mb-16'>
        <NavLink to="/sendemail" className="ml-20 mx-11 text-green-600">
          Forgot Password?
        </NavLink>
      <p className='text-red-700 mx-11 my-2'>{error.msg}</p>
      </div>
    </div>


    </div>

    </div>
  )
}

export default Adminlog;