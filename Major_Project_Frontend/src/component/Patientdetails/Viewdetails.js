import React, {useState, useEffect} from 'react'
import './style.css'
import A1 from '../images/dprofile2.jpg'
import { Link } from 'react-router-dom'

import { usePatientDataAPIQuery } from '../../services/datacommunication'
import { getToken } from '../../services/tokenService'
import ImageComponent from './ImageComponent'

const Viewdetails = () => {

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
    <div className='Patientdetails'><br />
        <div className="Patientdetailsn1"><br /><br /><br />
            <div className="Patientdetailsn23">

           
           <div className="Patientdetailsn2">
            <p>Additional Info</p>
            <p>Parent Info </p>
           </div>
            
            <div className="Patientdetailsn3">
              <h4>Basic Information</h4>
                
                <div className="Patientdetails456">

                <div className="Patientdetailsn4">
                  <ImageComponent imageUrl={imageUrl}/>
                  <h5>{patientData.name}</h5>
                  </div>

                  <div className="Patientdetailsn5">
                  <p>Name : {patientData.name}</p>
                  <p>ID Number : {patientData.id_number}</p>
                  <p>Date of birth : {patientData.date_of_birth}</p>
                  <p>Phone Number : {patientData.phone_number}</p>
                  <p>Address: {patientData.address}</p>
                  </div>

                 <div className="Patientdetailsn6">
                 <p>Father's Name : {patientData.father_name}</p>
                  <p>Mother's Name : {patientData.mother_name}</p>
                  <p>Citizenship NO : {patientData.citizenship_num}</p>
                  <p>Blood Group : {patientData.blood_group}</p>
                  <p>Email : {patientData.email}</p>
                 </div>
               

                </div>

            </div>

            </div>

        </div>
    </div>
  )
}

export default Viewdetails;