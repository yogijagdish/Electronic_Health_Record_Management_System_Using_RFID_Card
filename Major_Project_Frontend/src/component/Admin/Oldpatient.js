import React from "react";
import { useState } from "react";

import axios from "axios";



export default function Oldpatient() {

    const [data,setData] = useState({id:"",is_available:"",is_treated:"",problem:"",doctor:""})

    const [query, setQuery] = useState('');

    const [users,setUsers] = useState([0]);

    axios.defaults.baseURL = 'http://127.0.0.1:8000/patientprofile'

    const handleSearch = async (e) => {
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

    const handleSearchDoctor = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
      }


    const handleChange = (e) => {
        e.preventDefault();

        setData({...data,[e.target.name]:e.target.value})
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className="grid place-content-center">
            <label htmlFor="id" className="text-sm mt-6"> User Id </label>
            <input type="text" name="id" id="id"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            <label htmlFor="is_available" className="text-sm mt-6"> Is Available </label>
            <input type="text" name="is_available" id="is_available"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            <label htmlFor="is_treated" className="text-sm mt-6">Is treated </label>
            <input type="text" name="is_treated" id="is_treated"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            <label htmlFor="problem" className="text-sm mt-6"> Problem </label>
            <textarea name="problem" id="problem" cols="30" rows="10" className="border-2 rounded-lg mt-2" onChange={handleChange}> Write the problem</textarea>

            <div>

            <input type="text" name="asign_doctor" id="asign doctor" className="border-2 rounded-lg mt-2 mb-6" onChange={handleSearchDoctor}/>
            <button type="submit" className="rounded-lg border-2 bg-blue-600 h-8 w-32 ml-4" onClick={handleSearch}> Search doctor </button>
            </div>

            <button type="submit" className="bg-blue-600 border-2 rounded-lg  h-8 w-16 ml-32" onClick={handleClick}> Add</button>

            
        </div>
    )
}