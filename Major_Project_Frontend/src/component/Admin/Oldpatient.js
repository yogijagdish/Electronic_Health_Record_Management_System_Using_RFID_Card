import React from "react";
import { useState } from "react";

import axios from "axios";


export default function Oldpatient() {


    const [data,setData] = useState({id:"",is_available:"",is_treated:"",problem:"",doctor:""})

    const [doctor,setDoctor] = useState([0]);

    const [getid,setGetid] = useState();



    axios.defaults.baseURL = 'http://127.0.0.1:8000/patientprofile'



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


    const handleChange = (e) => {
        e.preventDefault();

        setData((data) => ({...data,[e.target.name]:e.target.value}))
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (getid){
        setData((data) => ({...data,doctor:getid}));
    }
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

           <button type="submit" onClick={searchDoctor}> Search for Doctor </button>
           <ul>
                {doctor.map((array) => (
                    <li key={array.id} className="mt-2 ml-4">{array.name}
                    <button type="submit" className="ml-16 bg-blue-500 rounded-lg border-2 h-8 w-16" onClick={()=> { setGetid(array.id) ; console.log(getid)}}> Add </button>
                    </li>
                ))}
           </ul>

            <button type="submit" className="bg-blue-600 border-2 rounded-lg  h-8 w-16 ml-32" onClick={handleClick}> Add</button>

            
        </div>
    )
}