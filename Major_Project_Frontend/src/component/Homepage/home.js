import React from 'react'
import './style.css'
import Card from '../Card/card'
import C1 from '../images/doctor1.png';
import C2 from '../images/patient2.jpeg'
import C3 from '../images/admin3.png';
 const home = () => {
  return (
    <div className='home'>
     <div className='cardhead'>
     <Card picture = {C1} name ="Doctor Login" des = "doctor" link = "/doctorlogin"/>
     <Card picture = {C2} name = "Patient Login" des = "Patient" link = "patientlogin"/>
     <Card picture = {C3} name = "Admin Login" des = "Admin"  link = "adminlogin "/>
     </div>
    </div>
  )
}
export default home;
