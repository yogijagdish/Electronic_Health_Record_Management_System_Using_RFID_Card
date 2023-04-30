import React from "react";
import "./style.css";
import dprofile from "../images/dprofile1.jpeg";
import Doctorcard from './doctorcard'
import T1 from "../images/treatedpatient1.png";
import U1 from "../images/upcomingpatient.4png.png";
import I1 from "../images/information1.png";
import { Link } from "react-router-dom";
const doctorpanel = () => {
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
              Dr. Akash Sunar <br />
              MBBs,IOM-Nawalparasi
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
          <Link to = "/"> <Doctorcard picture = {T1} name = "Treated Patient"  /> </Link>
          <Link to = "/"> <Doctorcard picture = {U1} name = "Upcoming Patient" /> </Link>
          <Link to = "/"> <Doctorcard picture = {I1}  name = "Information"/> </Link>
           
        </div>

        </div>
      </div>
    </div>
  );
};

export default doctorpanel;
