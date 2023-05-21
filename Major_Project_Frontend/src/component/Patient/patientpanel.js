import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile2.jpg";
import Doctorcard from '../Doctor/doctorcard'
import R1 from "../images/viewdetails0.png";
import A1 from "../images/latestreport0.png";
import I1 from "../images/information0.png";
import { Link, NavLink } from "react-router-dom";

import { useShowPhotoAPIQuery } from "../../services/datacommunication";


import Logout from "../Logout"
import { getToken } from "../../services/tokenService";
import { useUserProfileAPIQuery } from "../../services/datacommunication";
import ImageComponent from "../Patientdetails/ImageComponent";
const Patientpanel = () => {

  const {access_token} = getToken();

  // const {data, isSuccess} = useUserProfileAPIQuery(access_token);

  const {data,error,isSuccess} = useShowPhotoAPIQuery(access_token);
  const [patientInfo, setPatientInfo] = useState({user_id:"",name:"",email:"",phone_number:"",photo:""});


  
  // useEffect(()=>{
  //   if (data && isSuccess){
  //     setPatientInfo({
  //       email: data.email,
  //       name: data.name,
  //       date_of_birth: data.date_of_birth,
  //       is_patient: data.is_patient
  //     })
  //   }
  // },[data,isSuccess])
  
  useEffect(()=>{
    if(data && isSuccess) {
      const arrayData = data[0]
      console.log(arrayData)
      setPatientInfo({
        user_id: arrayData.user_id,
        name: arrayData.name,
        email: arrayData.email,
        phone_number: arrayData.phone_number,
        photo: arrayData.photo
      })
    }
    else {
      console.log(error)
    }
  },[data,isSuccess])

  const baseUrl = 'http://127.0.0.1:8000'
const imageUrl = baseUrl + patientInfo.photo



  return (
    <div className="Patientpanel">
      <div className="Patientpanel1">
        <p>Welcome to Patient panel !!</p>
      </div>
      <div className="Patientpanel2">
      <div className="himg">
        <div className="himg1">

        <ImageComponent imageUrl={imageUrl} />
        </div>
        </div>

        <div className="p234">
          <div className="Patientpanel3">
            <p>
              Name: {patientInfo.name} <br/>
              Email ID: {patientInfo.email} <br/>
              Phone Number: {patientInfo.phone_number}
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
          <Link to = "/latest-report"> <Doctorcard picture = {A1}  name = "Latest Reports"/> </Link>
          <Link to = "/viewdetails"> <Doctorcard picture = {R1} name = "view details" /> </Link>
          <Link to = "/information1"> <Doctorcard picture = {I1} name = "About Patient"  /> </Link>
          <div className="out"><Logout/> </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Patientpanel;