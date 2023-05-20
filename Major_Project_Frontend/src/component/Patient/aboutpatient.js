import React, {useState,useEffect} from 'react'
import './style.css'
import dprofile from "../images/dprofile2.jpg";

import { usePatientDataAPIQuery } from '../../services/datacommunication';
import { getToken } from '../../services/tokenService';


const Aboutpatient = () => {

  const {access_token} = getToken();

  const {data,isSuccess} = usePatientDataAPIQuery(access_token);

  const [patientData, setPatientData] = useState({user_id:"",name:"",id_number:"",date_of_birth:"",phone_number:"",address:"",father_name:"",mother_name:"",citizenship_num:"",blood_group:"",email:"",photo:""})

  useEffect(()=> {
    if (data && isSuccess) {
      setPatientData({
        user_id: data.user_id,
        name: data.name,
        id_number: data.id_number,
        date_of_birth: data.date_of_birth,
        phone_number: data.phone_number,
        address: data.address,
        father_name: data.father_name,
        mother_name: data.mother_name,
        citizenship_num: data.citizenship_num,
        blood_group: data.blood_group,
        email: data.email,
        photo: data.photo
      });
      console.log(data)
    }

  },[data,isSuccess])


  const baseUrl = 'http://127.0.0.1:8000'

  const imageUrl = baseUrl + patientData.photo

  


  return (
    <div className='Aboutpatient'>
       
      <div className="Aboutpatient1">
        <h2>Patient Infromation Details</h2>

      <div className="Aboutpatient2">
        <img src={dprofile} alt="profile img" />
      </div>
         
         <div className="Aboutpatient3">

            Id Number : pas075bei022 <br />


         </div>




      </div>
      
    </div>
  )
}

export default Aboutpatient