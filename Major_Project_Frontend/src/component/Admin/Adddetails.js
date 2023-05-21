import React, {useState} from 'react'
import './style.css'

import axios from 'axios';

import { useUpdatePatientAPIMutation } from '../../services/datacommunication'
import {getToken} from "../../services/tokenService";

const Adddetails = () => {

  const {access_token} = getToken();
  const [formData,setFormData] = useState({user_id:"",name:"",id_number:"",date_of_birth:"",phone_number:"",address:"",father_name:"",mother_name:"",citizenship_num:"",blood_group:"",email:"",photo:null});

  const [updatePatient, {isLoading}] = useUpdatePatientAPIMutation();

  const [success,setSuccess] = useState({msg:""})

  
  const [query, setQuery] = useState('');

  const [users,setUsers] = useState([0]);

  
  const handleSearchChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
  }

  axios.defaults.baseURL = 'http://127.0.0.1:8000/patientprofile'

  const handleSearchClick = async (e) => {
    e.preventDefault();
    
    console.log(query);
    try {
      const response = await axios.get(`/search/?q=${query}`);
      setUsers(response.data)
      console.log(users[0].id)
    }
    catch (error) {
      console.log("this is error");
      console.log(error)
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handlePhotoData = (e) => {
    e.preventDefault();
    setFormData({...formData,photo:e.target.files[0]});
  }
  


  const handleClick = async(e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('user_id',formData.user_id)
    formDataToSend.append('name',formData.name)
    formDataToSend.append('id_number',formData.id_number)
    formDataToSend.append('date_of_birth',formData.date_of_birth)
    formDataToSend.append('phone_number',formData.phone_number)
    formDataToSend.append('address',formData.address)
    formDataToSend.append('father_name',formData.father_name)
    formDataToSend.append('mother_name',formData.mother_name)
    formDataToSend.append('citizenship_num',formData.citizenship_num)
    formDataToSend.append('blood_group',formData.blood_group)
    formDataToSend.append('email',formData.email)
    formDataToSend.append('photo',formData.photo)

    console.log(formDataToSend)

    const response = await updatePatient({formDataToSend,access_token});
    if (response.data) {
      setSuccess({msg:response.data})
    }
    console.log(response)
    
}


  return (
    <div className='Adddetails'><br />
    <div className="search1">
      <form class="example" action="action_page.php">
      <input type="text" name="query" id="query" placeholder="search ..." className="form-control" onChange={handleSearchChange}/>
      <button type="submit" className=" ml-1 text-sm  bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleSearchClick}> <i class="fa fa-search"></i></button>
        </form>
       </div><br />
        <div className="Adddetailsn1">
           <div className="Adddetailsn2">
            <p>Add Patient Details</p>
           </div><br />

           <div className="fox">
      <div className="form">

        <form onSubmit={handleClick} className="row g-3">

        <div className="Adddetailsn34">
        <div className="Adddetailsn3">
        <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label"> User Id </label>
          <input type="text" name="user_id" id="user_id" placeholder={users[0].id}  className="form-control" onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputtext4" className="form-label">
             Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Age</label>
          <input type="text" name="id_number" id="id_number"  className="form-control" onChange={handleChange}/>
          </div>
          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Date of Birth</label>
          <input type="date" name="date_of_birth" id="date_of_birth"  className="form-control" onChange={handleChange}/>
          </div>
          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Phone Number</label>
        <input type="character" name="phone_number" id="phone_number"  className="form-control" onChange={handleChange}/>
          </div>
          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Address</label>
          <input type="text" name="address" id="address"  className="form-control" onChange={handleChange}/>
          </div>

          </div>

           <div className="Adddetailsn4">

         
          <div className="col-md-6">
            <label htmlFor="inputtext4" className="form-label">
             Father Name
            </label>
            <input
              type="text"
              className="form-control"
              name="father_name"
              id="father_name"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Mother Name</label>
          <input type="text" name="mother_name" id="mother_name"  className="form-control" onChange={handleChange} />
          </div>

          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Citizenship No.</label>
          <input type="text" name="citizenship_num" id="citizenship_num"  className="form-control" onChange={handleChange}/>
          </div>

          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Blood Group</label>
          <input type="text" name="blood_group" id="blood_group"  className="form-control" onChange={handleChange}/>
          </div>


          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Email</label>
          <input type="text" name="email" id="email"  className="form-control" onChange={handleChange}/>
          </div>
          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label">Sex</label>
          <input type="text" name="address" id="address"  className="form-control" onChange={handleChange}/>
          </div>
          </div>
          </div>

          <div className="Adddetailsn5">

             <input type="file" name="photo" id="photo" className="mt-4 mb-6 text-black font-semibold" onChange={handlePhotoData}/>
            <button type="submit" className='btn btn-success bg-green-600'> Submit </button>
            {/* <p className='text-green-500'>{success.msg}</p> */}
                </div>
        </form>
                
      </div>
    </div>

         



         

        </div>
    </div>
  )
}

export default Adddetails;