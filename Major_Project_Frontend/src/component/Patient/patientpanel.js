import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile2.jpg";
import Doctorcard from '../Doctor/doctorcard'
import R1 from "../images/previousreport0.png";
import A1 from "../images/latestreport0.png";
import I1 from "../images/information0.png";
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
        <p>Welcome to Patient panel !!</p>
      </div>
      <div className="Patientpanel2">
      <div className="himg">
        <div className="himg1">

        <img src={dprofile} alt="profilepic" />
        </div>
        </div>

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
            <p>Your Health, Our Happiness </p>
          </div>
        </div>
        <div className="Patientpanel5">
          <p>
            Access your medical records, schedule appointments & stay connected with your health care providers.
            View & update personal information, request appointments with doctors, access & download medical records, and communicate with Healthcare providers.
          </p>
        
        <div className="doctorcard">
          <Link to = "/previous-report"> <Doctorcard picture = {R1} name = "Previous Reports" /> </Link>
          <Link to = "/latest-report"> <Doctorcard picture = {A1}  name = "Latest Reports"/> </Link>
          <Link to = "/aboutpatient"> <Doctorcard picture = {I1} name = "About Patient"  /> </Link>
          <div className="out"><Logout/> </div>
        </div>

        <Logout/>

        </div>
      </div>
    </div>
  );
};

export default Patientpanel;