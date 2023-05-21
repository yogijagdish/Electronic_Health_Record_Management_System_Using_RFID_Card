import React, { useEffect, useState } from "react";
import "./style.css";
import dprofile from "../images/dprofile2.jpg";
import Doctorcard from '../Doctor/doctorcard'
import R1 from "../images/registration0.png";
import A1 from "../images/createuser.png";
import I1 from "../images/information0.png";
import { Link, NavLink } from "react-router-dom";
import Logout from "../Logout";

import { useUserProfileAPIQuery } from "../../services/datacommunication";
import { getToken } from "../../services/tokenService";
import { useNavigate } from "react-router-dom";
const Adminpanel = () => {

  let {access_token} = getToken();

  const {data , isSuccess} = useUserProfileAPIQuery(access_token);

  const [adminInfo, setAdminInfo] = useState({email:"",name:"",date_of_birth:""})
   const navigate = useNavigate();
   const Nextclick = ()=>{
    navigate('/adminpanel1')
   }
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
        <p>Welcome to Admin panel !!</p>
      </div>
      <div className="Adminpanel2">
      <div className="himg">
        <div className="himg1">

        <img src={dprofile} alt="profilepic" />
        </div>
        </div>

        <div className="a234">
          <div className="Adminpanel3">
            <p>
              Name: {adminInfo.name} <br/>
              Email: {adminInfo.email} <br/>
              Date of Birth: {adminInfo.date_of_birth}
            </p>
            <NavLink to="/update-profile" className="ml-4 text-sm text-blue-500"> Update Profile </NavLink>
          </div>

          <div className="Adminpanel4">
            <p>Your Health, Our Happiness </p>
          </div>
        </div>
        <div className="Adminpanel5">
          <p>
          Effortlessly Manage User Accounts, System Settings & Ensure Data Security & Privacy.
          Create & Manage User Accounts, Configure System Settings, Monitor & Analyze System Activity, and Ensure Data Backup & Security.
          </p>
        
        <div className="doctorcard">
          <Link to = "/registration"> <Doctorcard picture = {R1} name = "New Registration"  /> </Link>
          <Link to = "/add-doctor"> <Doctorcard picture = {A1} name = "Add Doctor" /> </Link>
          <Link to = "/information"> <Doctorcard picture = {I1}  name = "Information"/> </Link>

        </div>
        <div className="btn1">
        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" disabled>&#8592; Previous</button>
        <button type="submit" className="text-white bg-green-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={Nextclick}>Next &#8594;</button>
        </div>
          <div className="aout"> 
          <Logout/> 
          </div>

        </div>
      
      </div>
    </div>
  );
};

export default Adminpanel;
