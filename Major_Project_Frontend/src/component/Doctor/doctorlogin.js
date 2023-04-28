import React from 'react'
import './style.css'
import Login from '../Login/login';
const doctorlog = () => {
  return (
    <div className='Doctorlogin'>
        <Login name = "Doctor" newpage = '/doctorpanel' />
    </div>
  )
}

export default doctorlog;