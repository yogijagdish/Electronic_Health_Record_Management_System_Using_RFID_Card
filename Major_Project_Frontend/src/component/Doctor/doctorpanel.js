import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile2.jpg";
import Doctorcard from './doctorcard'
import D1 from "../images/dprofile.jpeg"
import T1 from "../images/treatedpatient2.png";
import U1 from "../images/upcomingpatient0.png";
import I1 from "../images/information0.png";
import { Link } from "react-router-dom";

import { useUserProfileAPIQuery } from "../../services/datacommunication";

import Logout from "../Logout";

import { usePatientDataAPIQuery } from '../../services/datacommunication'
import { getToken } from '../../services/tokenService'
import ImageComponent from "../Patientdetails/ImageComponent";
const Doctorpanel = () => {

  // backend


  const {access_token} = getToken();

  const { data,isSuccess} = useUserProfileAPIQuery(access_token);

  const [doctorInfo, setDoctorInfo] = useState({email:"",name:"",date_of_birth:"",is_doctor:""});

  useEffect(()=>{
    if (data && isSuccess) {
      setDoctorInfo({
        email: data.email,
        name: data.name,
        date_of_birth: data.date_of_birth,
        is_doctor: data.is_doctor,
      })
    }
  },[data,isSuccess])

  // backend


  return (
    <div className="Doctorpanel">
      <div className="Doctorpanel1">
        <p>Welcome to Doctor panel !!!</p>
      </div>
      <div className="Doctorpanel2">
      <div className="himg">
        <div className="himg1">
        <img src={D1} alt="dprofile" />
        </div>
        </div>

        <div className="d234">
          <div className="Doctorpanel3">
            <p>
              {/* backend data */}
              Name: {doctorInfo.name} <br/>
              Email ID: {doctorInfo.email} <br/>
              Date of Birth: {doctorInfo.date_of_birth}
            </p>
          </div>

          <div className="Doctorpanel4">
            <p>Your Health, Our Happiness </p>
          </div>
        </div>
        <div className="Doctorpanel5">
          <p>
           Empowering Doctors To Provide Exceptional Care & Manage Patient Information with Ease.
           Manage Appointments, View & Update Patient Records, Prescribe Medications & Treatments, and Generate Medical Reports.
          </p>
        
        <div className="doctorcard">
          <Link to = "/treated-patient"> <Doctorcard picture = {T1}/> </Link>
          <Link to = "/upcoming-patient"> <Doctorcard picture = {U1} name = "Upcoming_Patient" /> </Link>
          <Link to = "/"> <Doctorcard picture = {I1}  name = "Information"/> </Link>
          <div className="out"><Logout/> </div>
        </div>

        </div>
        {/* backend data */}
       
      </div>
    </div>
  );
};

export default Doctorpanel;
