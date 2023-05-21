import axios from "axios";
import React, {useState} from "react";

import { useUpdatePatientStatusAPIMutation } from "../../services/datacommunication";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


export default function Registration() {


  const [data,setData] = useState({user_id:"",is_available:"",is_treated:"",problem:"",doctor:""})

  const [doctor,setDoctor] = useState([0]);

  const [searchAvailableDoctor, setSearchAvailableDoctor] = useState({doctor:"",clickDisplay:""});

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
        setSearchAvailableDoctor({doctor:"These are the available doctors:"})
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
  setSearchAvailableDoctor({clickDisplay:"User Added Successfully"})

}
console.log(data);

}



  return (

    // <div>

    // <div>
    // <input type="text" name="query" id="query" placeholder="search ..." className="ml-32 h-8 w-64 border-2 rounded-lg" onChange={handleChange}/>
    // <button type="submit" className="text-sm ml-2 bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> Search</button>
    // </div>
    // <div className="grid place-content-center">
    //         <label htmlFor="user_id" className="text-sm mt-6"> User Id </label>
    //         <input type="text" name="user_id" id="user_id"  className="border-2 rounded-lg mt-2 h-8 w-80" placeholder={users[0].id} onChange={handleChangepatient}/>

    //         <label htmlFor="is_available" className="text-sm mt-6"> Is Available </label>
    //         <input type="text" name="is_available" id="is_available"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChangepatient}/>

    //         <label htmlFor="is_treated" className="text-sm mt-6">Is treated </label>
    //         <input type="text" name="is_treated" id="is_treated"  className="border-2 rounded-lg mt-2 h-8 w-80" onChange={handleChangepatient}/>

    //         <label htmlFor="problem" className="text-sm mt-6"> Problem </label>
    //         <textarea name="problem" id="problem" cols="30" rows="10" className="border-2 rounded-lg mt-2" onChange={handleChangepatient}> Write the problem</textarea>

    //        <button type="submit" onClick={searchDoctor}> Search for Doctor </button>
    //        <ul>
    //             {doctor.map((array) => (
    //                 <li key={array.id} className="mt-2 ml-4">{array.name}
    //                 <button type="submit" className="ml-16 bg-blue-500 rounded-lg border-2 h-8 w-16" onClick={()=> { setGetid(array.id) ; console.log(getid)}}> Add </button>
    //                 </li>
    //             ))}
    //        </ul>

    //         <button type="submit" className="bg-blue-600 border-2 rounded-lg  h-8 w-64 ml-32" onClick={handleClickpatient}> Add Patient </button>

            
    //     </div>

    // </div>
    <div className="Registration0">

      <div className="search1">
      <form class="example" action="action_page.php">
      <input type="text" name="query" id="query" placeholder="search ..." className="form-control" onChange={handleChange}/>
      <button type="submit" className=" ml-1 text-sm  bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> <i class="fa fa-search"></i></button>
        </form>
       </div>

    <div className="Registration">
    <div className="heading">
      <p>Please fill your required information here:</p>
    </div>

    <div className="box">
      <div className="form">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputtext4" className="form-label">
             Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputtext4"
              placeholder="Enter your full name"
            />
          </div>
          <div className="col-md-6">
          <label htmlFor="inputtext4" className="form-label"> User Id </label>
          <input type="text" name="user_id" id="user_id"  className="form-control" placeholder={users[0].id} onChange={handleChangepatient}/>
          </div>
          <div className="col-6">
          <label htmlFor="is_available" className="form-label ml-4"> Is Available </label>
          <input type="text" name="is_available" id="is_available"  className="form-control ml-4" onChange={handleChangepatient}/>
          </div>
          <div className="col-7">
          <label htmlFor="is_treated" className="form-label mx-3">Is treated </label>
          <input type="text" name="is_treated" id="is_treated"  className="form-control mx-3" onChange={handleChangepatient}/>
          </div>
          <div className="col-md-6">
          <label htmlFor="problem" className="form-label"> Problem </label>
          <textarea name="problem" id="problem" cols="3" rows="3" className="form-control" onChange={handleChangepatient}> Write the problem</textarea>
          </div>
        </form>
      </div><br />
      {/* adding button */}
      <div className="button">
        <button type="submit" onClick={searchDoctor} className="bg-green-800 btn btn-success" >
          Search For Doctor
        </button>
        <p className="text-black-500 my-2 text-lg "> {searchAvailableDoctor.doctor}</p>
      </div>
      <ul>
               {doctor.map((array) => (
                     <li key={array.id} className="mt-2 ml-4">{array.name}
                   <button type="submit" className="ml-16 bg-blue-500 rounded-lg border-2 h-8 w-16" onClick={()=> { setGetid(array.id) ; console.log(getid)}}> Add </button>
                  </li>
                 ))}
        </ul>

        <button type="submit" className="bg-green-800 btn btn-success ml-60" onClick={handleClickpatient}> Add Patient </button>
        <p className="text-black-500 ml-32 my-4"> {searchAvailableDoctor.clickDisplay} </p>
    </div>
    {/* for scanning */}
    <div className="button2">
      <text>Have u already made a card ?</text>
      <Link to = '/scancard'>
      <button type="buttonk" class="btn btn-success">
        scan card
      </button>
      </Link>
    </div>
  </div>

  </div>
  )
}