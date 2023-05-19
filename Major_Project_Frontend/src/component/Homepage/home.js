import React from 'react'
import './style.css'
import Card from '../Card/card'
import C1 from '../images/doctor4.png';
import { Link } from 'react-router-dom';
import C2 from '../images/patient4.png'
import C3 from '../images/admin4.png';
 const home = () => {
  return (
    <div className='home'>
     <div className='cardhead'>
      <Link to ='/doctorlogin'> <Card picture = {C1} name = "Click here for Login" des = "doctor" link = "/doctorlogin"/></Link>
      <Link to ='/patientlogin'><Card picture = {C2} name = "Click here for Login" des = "Patient" link = "patientlogin"/></Link>
      <Link to ='/adminlogin'><Card picture = {C3} name = "Click here for Login" des = "Admin"  link = "adminlogin "/></Link>
     </div>
    </div>
  )
}
export default home;