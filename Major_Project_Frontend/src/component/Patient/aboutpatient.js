import React from 'react'
import './style.css'
import dprofile from "../images/dprofile2.jpg";
const aboutpatient = () => {
  return (
    <div className='Aboutpatient'>
       
      <div className="Aboutpatient1">
        <h2>Patient Infromation Details</h2>

      <div className="Aboutpatient2">
        <img src={dprofile} alt="profile img" />
      </div>
         
         <div className="Aboutpatient3">

            Id Number : pas075bei022 <br />
            Patient Name : Navaraj Poudel <br />
            Date of Birth : 2058-01-26 <br />
            Gender : Male <br />
            Phone Number : 9867767616 <br />
            Email address : poudelnawaraj9@gmail.com <br />
            Permanent Address : Nawalparasi,Kawasoti-16 <br />
            Citizenship No : 362016-8727 <br />
            Father's Name : Amarut Bahadur Sunar <br />
            Mother's Name : Maya Devi Sunar

         </div>




      </div>
      
    </div>
  )
}

export default aboutpatient
