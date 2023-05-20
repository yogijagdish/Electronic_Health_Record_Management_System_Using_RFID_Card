import React, {useState,useEffect} from 'react'
import './style.css'
import dprofile from "../images/dprofile2.jpg";

import { usePatientDataAPIQuery } from '../../services/datacommunication';
import { getToken } from '../../services/tokenService';


const Aboutpatient = () => {

  const {access_token} = getToken();

  const {data,isSuccess} = usePatientDataAPIQuery(access_token);

  const [patientInfo,setPatientInfo] = useState({patient_name:"",gender:"",permanent_address:"",chitizenship_num:"",father_name:"",mother_name:""});


  useEffect(()=> {
    if (data && isSuccess) {
      setPatientInfo({
        patient_name: data.patient_name,
        gender: data.gender,
        permanent_address: data.permanent_address,
        chitizenship_num: data.chitizenship_num,
        father_name: data.father_name,
        mother_name: data.mother_name
      })
    }

  },[data,isSuccess])

  


  return (
    <div className='Aboutpatient'>
       
      <div className="Aboutpatient1">
        <h2>Patient Infromation Details</h2>

      <div className="Aboutpatient2">
        <img src={dprofile} alt="profile img" />
      </div>
         
         <div className="Aboutpatient3">

            Id Number : pas075bei022 <br />
            Patient Name : {patientInfo.patient_name} <br />
            Gender : {patientInfo.gender} <br />
            Permanent Address : {patientInfo.permanent_address} <br />
            Citizenship No : {patientInfo.chitizenship_num} <br />
            Father's Name : {patientInfo.father_name} <br />
            Mother's Name : {patientInfo.mother_name}

         </div>




      </div>
      
    </div>
  )
}

export default Aboutpatient