import axios from "axios";
import React, {useState} from "react";

import { useUpdatePatientStatusAPIMutation } from "../../services/datacommunication";

import { useNavigate } from "react-router-dom";




export default function Registration() {


  const [data,setData] = useState({user_id:"",is_available:"",is_treated:"",problem:"",doctor:""})

  const [doctor,setDoctor] = useState([0]);

  const [getid,setGetid] = useState();


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

  const searchDoctor = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get('/asign-doctor/');
        setDoctor(response.data)
        console.log(doctor);
    }
    catch (error) {
        console.log(error);

    }


}


const handleChangepatient = (e) => {
  e.preventDefault();

  setData((data) => ({...data,[e.target.name]:e.target.value}))
}

const handleClickpatient = async (e) => {
  e.preventDefault();
  if (getid){
  setData((data) => ({...data,doctor:getid}));
  const id = users[0].id
  const response = await user({data,id})
  console.log(response)
}
console.log(data);

}



  return (
    <div>

    <div>
    <input type="text" name="query" id="query" placeholder="search ..." className="ml-32 h-8 w-64 border-2 rounded-lg" onChange={handleChange}/>
    <button type="submit" className="text-sm ml-2 bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> Search</button>
    </div>
    <div className="grid place-content-center">
            <label htmlFor="user_id" className="text-sm mt-6"> User Id </label>
            <input type="text" name="user_id" id="user_id"  className="border-2 rounded-lg mt-2 h-8 w-80" placeholder={users[0].id} onChange={handleChangepatient}/>

            <label htmlFor="is_available" className="text-sm mt-6"> Is Available </label>
            <input type="text" name="is_available" id="is_available"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChangepatient}/>

            <label htmlFor="is_treated" className="text-sm mt-6">Is treated </label>
            <input type="text" name="is_treated" id="is_treated"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChangepatient}/>

            <label htmlFor="problem" className="text-sm mt-6"> Problem </label>
            <textarea name="problem" id="problem" cols="30" rows="10" className="border-2 rounded-lg mt-2" onChange={handleChangepatient}> Write the problem</textarea>

           <button type="submit" onClick={searchDoctor}> Search for Doctor </button>
           <ul>
                {doctor.map((array) => (
                    <li key={array.id} className="mt-2 ml-4">{array.name}
                    <button type="submit" className="ml-16 bg-blue-500 rounded-lg border-2 h-8 w-16" onClick={()=> { setGetid(array.id) ; console.log(getid)}}> Add </button>
                    </li>
                ))}
           </ul>

            <button type="submit" className="bg-blue-600 border-2 rounded-lg  h-8 w-64 ml-32" onClick={handleClickpatient}> Add Patient </button>

            
        </div>

    </div>
  )
}