import React from 'react'
import './style.css'
import A1 from '../images/dprofile2.jpg'
import { Link } from 'react-router-dom'
const Viewdetails = () => {
  return (
    <div className='Patientdetails'><br />
        <div className="Patientdetailsn1"><br /><br /><br />
            <div className="Patientdetailsn23">

           
           <div className="Patientdetailsn2">
            <p>Additional Info</p>
            <p>Parent Info </p>
           </div>
            
            <div className="Patientdetailsn3">
              <h4>Basic Information</h4>
                
                <div className="Patientdetails456">

                <div className="Patientdetailsn4">
                  <img src={A1} alt="patient details" />
                  <h5>Akash Sunar</h5>
                  </div>

                  <div className="Patientdetailsn5">
                  <p>Name : Akash Sunar</p>
                  <p>ID Number : 0291</p>
                  <p>Date of birth : 2056-08-26</p>
                  <p>Phone Number : 9867767616</p>
                  <p>Address: lamachaure,pokhara</p>
                  </div>

                 <div className="Patientdetailsn6">
                 <p>Father's Name : Ram Sunar</p>
                  <p>Mother's Name : Sita Sunar</p>
                  <p>Citizenship NO : 293894-293</p>
                  <p>Blood Group : 0 positive</p>
                  <p>Email : sunarakash9@gmail.com</p>
                 </div>
               

                </div>

            </div>

            </div>

        </div>
    </div>
  )
}

export default Viewdetails;