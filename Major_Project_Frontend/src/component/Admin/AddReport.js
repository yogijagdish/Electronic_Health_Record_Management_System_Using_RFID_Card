import React, { useRef } from "react";
import { useState } from "react";
import { useAddReportAPIMutation } from "../../services/datacommunication";

import axios from "axios";

export default function AddReport() {

    const [formData,setFormData] = useState({user_id:"",test:"",report:null});

    axios.defaults.baseURL = 'http://127.0.0.1:8000/patientprofile'

    
    const [addReport,{isLoading}] = useAddReportAPIMutation();

    const [query, setQuery] = useState('');

    const [users,setUsers] = useState([0]);

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

    
    const handleInputChange = (event) => {
        event.preventDefault();
        setFormData({...formData,[event.target.name]: event.target.value})
    };

    const handleFileChange = (event) => {
        setFormData({...formData,report: event.target.files[0]});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('user_id',formData.user_id)
        formDataToSend.append('test',formData.test)
        formDataToSend.append('report',formData.report)

        const response = await addReport(formDataToSend)
        console.log(response)
    }

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     console.log(data)
    //     const response = await addReport(data);
    //     console.log(response);

    // }

    return(
        <div>
            <div>
    <input type="text" name="query" id="query" placeholder="search ..." className="ml-32 h-8 w-64 border-2 rounded-lg" onChange={handleChange}/>
    <button type="submit" className="text-sm ml-2 bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> Search</button>
    </div>

        <form onSubmit={handleSubmit} className="grid place-content-center">

            <label htmlFor="user" className="text-sm mt-6">User</label>
            <input type="number" name="user_id" id="user_id" placeholder={users[0].id} className="border-2 rounded-lg mt-2 " onChange={handleInputChange}/>
            <label htmlFor="test" className="text-sm mt-6">Test</label>
            <input type="text" name="test" id="test" className="border-2 rounded-lg mt-2" onChange={handleInputChange}/>
            <input type="file" name="report" id="report" className="mt-4 mb-6" onChange={handleFileChange}/>

            <button type="submit"> Add Report </button>
        </form>
        </div>
    )
}