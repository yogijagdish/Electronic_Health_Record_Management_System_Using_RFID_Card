import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile1.jpeg";
import Doctorcard from './doctorcard'
import T1 from "../images/treatedpatient2.png";
import U1 from "../images/upcomingpatient0.png";
import I1 from "../images/information0.png";
import { Link } from "react-router-dom";

import { useUserProfileAPIQuery } from "../../services/datacommunication";

import Logout from "../Logout";
import { getToken } from "../../services/tokenService";

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
        <h2>Welcome to Doctor panel !!</h2>
      </div>
      <div className="Doctorpanel2">
        <img src={dprofile} alt="profilepic" />

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
            <h2>Your Health, Our Happiness </h2>
          </div>
        </div>
        <div className="Doctorpanel5">
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
          <Link to = "/treated-patient"> <Doctorcard picture = {T1}/> </Link>
          <Link to = "/upcoming-patient"> <Doctorcard picture = {U1} name = "Upcoming_Patient" /> </Link>
          <Link to = "/"> <Doctorcard picture = {I1}  name = "Information"/> </Link>
           
        </div>

        </div>
        {/* backend data */}
        <div> <Logout/> </div>
      </div>
    </div>
  );
};

export default Doctorpanel;
