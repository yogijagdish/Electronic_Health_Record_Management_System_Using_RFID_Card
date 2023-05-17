import axios from "axios";
import React, {useState} from "react";

import { useUpdatePatientStatusAPIMutation } from "../../services/datacommunication";

import { useNavigate } from "react-router-dom";



export default function Registration() {

  const [query, setQuery] = useState('');

  const [users,setUsers] = useState([0]);

  const [user] = useUpdatePatientStatusAPIMutation();

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
  }

  axios.defaults.baseURL = 'http://127.0.0.1:8000/patientprofile'

  const handleClick = async (e) => {
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

  const handleNewPatient = () => {
    navigate('/new-patient')

  }

  const handleOldPatient = () => {
    navigate('/old-patient')
  }



  return (
    <div>
    <input type="text" name="query" id="query" placeholder="search ..." className="ml-32 h-8 w-64 border-2 rounded-lg" onChange={handleChange}/>
    <button type="submit" className="text-sm ml-2 bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> Search</button>
    <p> { users[0].id }</p>
    <button type="submit" onClick={handleNewPatient}> New Patient </button>
    <button type="submit" onClick={handleOldPatient}> Existing Patient </button>
    </div>
  )
}