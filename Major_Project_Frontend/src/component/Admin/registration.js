import axios from "axios";
import React from "react";
import { useState } from "react";


export default function Registration() {

  const [query, setQuery] = useState('');

  const [users,setUsers] = useState([]);

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
      console.log(users)
    }
    catch (error) {
      console.log(error)
    }
  };



  return (
    <div>
    <input type="text" name="query" id="query" placeholder="search ..." className="ml-32 h-8 w-64 border-2 rounded-lg" onChange={handleChange}/>
    <button type="submit" className="text-sm ml-2 bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> Search</button>
    </div>
  )
}