import React, {useState} from "react";
import { useUserRegistrationAPIMutation } from "../../services/datacommunication";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../../services/userService";
import "./style.css";
import { Link } from "react-router-dom";
export default function AddDoctor() {


    // holds the data entered in the form
    const [registrationData,setRegistrationData] = useState({email:"",name:"",date_of_birth:"",password:"",password2:"",is_doctor:"false",is_patient:"false",is_reception:"false"});

    const [serverError,setServerError] = useState({});

    const [registerUser, {isLoading}] = useUserRegistrationAPIMutation();

    const navigate = useNavigate();




    const handleChange = (e) => {
        setRegistrationData({...registrationData,[e.target.name]:e.target.value})
    }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(registrationData)
        storeUser(registrationData.email)
        console.log(registrationData)
        
        const response = await registerUser(registrationData);
        console.log(response)
        
        if (response.error){
            setServerError(response.error.data)
            console.log(response.error.data)
        }
        
        if (response.data) {
            setServerError(response.data)
            if (registrationData.is_patient === 'true') {
                navigate('/new-patient')
            }
            
        }


    }






    return(
        // <div className="grid place-content-center mt-52">

        //     {/* email field */}
        //     <label htmlFor="Email" className="text-sm mt-6"> Email </label>
        //     <input type="text" name="email" id="email" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>
        //     <p className="text-red-600"> {serverError.email} </p>

        //     {/* name field */}
        //     <label htmlFor="name" className="text-sm mt-6">Name</label>
        //     <input type="text" name="name" id="name" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>
        //     <p className="text-red-600"> {serverError.name} </p>

        //     {/* date of birth field */}
        //     <label htmlFor="date of birth" className="text-sm mt-6">Date of Birth </label>
        //     <input type="date" name="date_of_birth" id="date_of_birth" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>
        //     <p className="text-red-600"> {serverError.date_of_birth} </p>

        //     <div>



        //     <input type="checkbox" name="is_doctor" id="is_doctor" value={true} className="mt-4 ml-4" onChange={handleChange} />
        //     <label htmlFor="is_docot" className="ml-2">Doctor</label>

        //     <input type="checkbox" name="is_patient" id="is_patient" value={true} className="ml-6" onChange={handleChange}/>
        //     <label htmlFor="is_patient" className="ml-2">Patient</label>

        //     <input type="checkbox" name="is_reception" id="is_reception" value={true} className="ml-6" onChange={handleChange}/>
        //     <label htmlFor="is_reception" className="ml-2">Admin</label>
        //     </div>

        //     {/* password field */}
        //     <label htmlFor="password" className="text-sm mt-6">Password</label>
        //     <input type="password" name="password" id="password" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>
        //     <p className="text-red-600"> {serverError.password} </p>

        //     {/* confirm password field */}
        //     <label htmlFor="confirm password" className="text-sm mt-6">Confirm Password </label>
        //     <input type="password" name="password2" id="password2" className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChange}/>
        //     <p className="text-red-600"> {serverError.password2} </p>


        //     {/* button field */}
        //     <button type="submit" className="h-8 w-24 mt-8 ml-24 mb-4 bg-blue-500 rounded-lg" onClick={handleClick}> Save </button>

        //     <p className="text-green-600 mb-32">{serverError.msg}</p>
        //     <p className="text-red-600 mb-32"> {serverError.non_field_errors} </p>
            
        
        // </div>
        <div className="Adddoctor0">
      <div className="Registration">
      <div className="heading">
        <h2>Please fill your required information here:</h2>
      </div>

      <div className="box">
        <div className="form1">
          <form className="row g-3">
            <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" id="name" className="form-control" onChange={handleChange}/>
            <p className="text-red-600"> {serverError.name} </p>

            </div>
            <div className="col-md-6">
            <label htmlFor="Email" className="form-label"> Email </label>
            <input type="text" name="email" id="email" className="form-control" onChange={handleChange}/>
            <p className="text-red-600"> {serverError.email} </p>
            </div>
            <div className="col-md-6">
            <label htmlFor="date of birth" className="form-label">Date of Birth </label>
            <input type="date" name="date_of_birth" id="date_of_birth" className="form-control" onChange={handleChange}/>
            <p className="text-red-600"> {serverError.date_of_birth} </p>
            </div>
            <div className="oo">
            <div className="col-md-3">
            <input type="checkbox" name="is_doctor" id="is_doctor" value={true} className="ml-6" onChange={handleChange} />
            <label htmlFor="is_docot" className="ml-2">Doctor</label>
            </div>
            <div className="col-md-3">
            <input type="checkbox" name="is_patient" id="is_patient" value={true} className="ml-6" onChange={handleChange}/>
            <label htmlFor="is_patient" className="ml-2">Patient</label>
            </div>
            <div className="col-md-3">
            <input type="checkbox" name="is_reception" id="is_reception" value={true} className="ml-6" onChange={handleChange}/>
            <label htmlFor="is_reception" className="ml-2">Admin</label>
            </div>

            </div>
            <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" id="password" className="form-control" onChange={handleChange}/>
            <p className="text-red-600"> {serverError.password} </p>
            </div>
            <div className="col-md-6">
            <label htmlFor="confirm password" className="form-label">Confirm Password </label>
            <input type="password" name="password2" id="password2" className="form-control" onChange={handleChange}/>
            <p className="text-red-600"> {serverError.password2} </p>
            </div>
           
            <button type="submit" className="h-8 w-24 mt-8 ml-36 mb-2 bg-blue-500 rounded-lg" onClick={handleClick}> Save </button>
            <p className="text-black mb-32 font-semibold ml-36">{serverError.msg}</p>
            <p className="text-red-600 mb-32"> {serverError.non_field_errors} </p>

          </form>
        </div>
      </div>
      </div>
        </div>
    )
}