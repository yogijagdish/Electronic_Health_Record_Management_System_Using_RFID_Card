import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile1.jpeg";
import Doctorcard from '../Doctor/doctorcard'
import R1 from "../images/registration3.png";
import A1 from "../images/adddoctor.png";
import I1 from "../images/information1.png";
import { Link, NavLink } from "react-router-dom";


import Logout from "../Logout"
import { getToken } from "../../services/tokenService";
import { useUserProfileAPIQuery } from "../../services/datacommunication";
const Patientpanel = () => {

  const {access_token} = getToken();

  const {data, isSuccess} = useUserProfileAPIQuery(access_token);

  const [patientInfo, setPatientInfo] = useState({email:"",name:"",date_of_birth:"",is_patient:""});

  useEffect(()=>{
    if (data && isSuccess){
    setPatientInfo({
      email: data.email,
      name: data.name,
      date_of_birth: data.date_of_birth,
      is_patient: data.is_patient
    })
    }
  },[data,isSuccess])



  return (
    <div className="Patientpanel">
      <div className="Patientpanel1">
        <h2>Welcome to Patient panel !!</h2>
      </div>
      <div className="Patientpanel2">
        <img src={dprofile} alt="profilepic" />

        <div className="p234">
          <div className="Patientpanel3">
            <p>
              Name: {patientInfo.name} <br/>
              Email ID: {patientInfo.email} <br/>
              Date of Birth: {patientInfo.date_of_birth}
            </p>
              <NavLink to="/update-patient" className="text-blue-500"> Update Patient </NavLink>
          </div>

          <div className="Patientpanel4">
            <h2>Your Health, Our Happiness </h2>
          </div>
        </div>
        <div className="Patientpanel5">
          <p>
            Hospitals complement and amplify the effectiveness of many other
            parts of the health system, providing continuous availability of
            services for acute and complex conditions. They concentrate scarce
            resources within well-planned referral networks to respond
            efficiently to population health needs. They are an essential
            element of Universal Health Coverage (UHC) and will be critical to
            meeting the Sustainable Development Goals (SDG).
          </p>
        
        <div className="doctorcard">
          <Link to = "/aboutpatient"> <Doctorcard picture = {R1} name = "About Patient"  /> </Link>
          <Link to = "/"> <Doctorcard picture = {A1} name = "Previous Reports" /> </Link>
          <Link to = "/"> <Doctorcard picture = {I1}  name = "Latest Reports"/> </Link>
           
        </div>

        <Logout/>

        </div>
      </div>
    </div>
  );
};

export default Patientpanel;
