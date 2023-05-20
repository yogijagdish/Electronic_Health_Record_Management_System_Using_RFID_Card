import React from 'react'
import './style.css'
import gmail from '../images/gmail.png'
import call from '../images/call.png'
import location from '../images/location.png'
const contactus = () => {
  return (
    <div className='Contactus'><br /><br />
       <div className="Contactus1">
         <h1>Contact Us</h1>
         <p>Have any questions? We'd love to hear from you. 
         </p>
         <div className="Contactus2">
         <div className="Contactus345">

         
          <div className="Contactus3">
           <img src={gmail} alt="gmail images" />
           <p>team-8848@gmail.com</p>
          </div>
          <div className="Contactus4">
           <img src={call} alt="gmail images" />
           <p>+977-9867767616</p>
          </div>
          <div className="Contactus5">
           <img src={location} alt="gmail images" />
           <p>Lamachaur-16, Pokhara</p>
          </div>

          </div>

         </div>
       </div>
    </div>
  )
}

export default contactus