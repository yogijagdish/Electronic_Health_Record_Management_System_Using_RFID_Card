import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function AddDoctor() {


    // holds the data entered in the form
    const [registrationData,setRegistrationData] = useState({email:"",name:"",date_of_birth:"",password:"",password2:"",is_doctor:"True",is_patient:"False",is_reception:"False"})

    const navigate = useNavigate();

    const handleChange = (e) => {
        setRegistrationData({...registrationData,[e.target.name]:e.target.value})
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(registrationData)
        navigate('/add-doctor-information')

    }






    return(
        <div className="grid place-content-center mt-52">

            {/* email field */}
            <label htmlFor="Email" className="text-sm mt-6"> Email </label>
            <input type="text" name="email" id="email" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            {/* name field */}
            <label htmlFor="name" className="text-sm mt-6">Name</label>
            <input type="text" name="name" id="name" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            {/* date of birth field */}
            <label htmlFor="date of birth" className="text-sm mt-6">Date of Birth </label>
            <input type="date" name="date_of_birth" id="date_of_birth" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            {/* password field */}
            <label htmlFor="password" className="text-sm mt-6">Password</label>
            <input type="password" name="password" id="password" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>

            {/* confirm password field */}
            <label htmlFor="confirm password" className="text-sm mt-6">Confirm Password </label>
            <input type="password" name="password2" id="password2" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>


            {/* button field */}
            <button type="submit" className="h-8 w-24 mt-8 ml-24 mb-32 bg-blue-500 rounded-lg" onClick={handleClick}> Next Page </button>
        
        </div>
    )
}