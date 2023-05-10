import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile1.jpeg";
import Doctorcard from '../Doctor/doctorcard'
import R1 from "../images/registration3.png";
import A1 from "../images/adddoctor.png";
import I1 from "../images/information1.png";
import { Link } from "react-router-dom";
import Logout from "../Logout";

import { useUserProfileAPIQuery } from "../../services/datacommunication";
import { getToken } from "../../services/tokenService";

const Adminpanel = () => {

  let {access_token} = getToken();

  const {data , isSuccess} = useUserProfileAPIQuery(access_token);

  const [adminInfo, setAdminInfo] = useState({email:"",name:"",date_of_birth:""})

  useEffect(()=>{
    if (data && isSuccess) {
      console.log(data)
      setAdminInfo({
        email:data.email,
        name: data.name,
        date_of_birth: data.date_of_birth
      })
    }
  },[data,isSuccess])


  return (
    <div className="Adminpanel">
      <div className="Adminpanel1">
        <h2>Welcome to Admin panel !!</h2>
      </div>
      <div className="Adminpanel2">
        <img src={dprofile} alt="profilepic" />

        <div className="a234">
          <div className="Adminpanel3">
            <p>
              Name: {adminInfo.name} <br/>
              Email: {adminInfo.email} <br/>
              Date of Birth: {adminInfo.date_of_birth}
            </p>
          </div>

          <div className="Adminpanel4">
            <h2>Your Health, Our Happiness </h2>
          </div>
        </div>
        <div className="Adminpanel5">
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
          <Link to = "/registration"> <Doctorcard picture = {R1} name = "New Registration"  /> </Link>
          <Link to = "/add-doctor"> <Doctorcard picture = {A1} name = "Add Doctor" /> </Link>
          <Link to = "/"> <Doctorcard picture = {I1}  name = "Information"/> </Link>
           
        </div>

        </div>
      <div> <Logout/> </div>
      </div>
    </div>
  );
};

export default Adminpanel;
