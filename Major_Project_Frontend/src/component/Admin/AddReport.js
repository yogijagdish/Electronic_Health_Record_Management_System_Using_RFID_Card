import React, { useRef } from "react";
import { useState } from "react";
import { useAddReportAPIMutation } from "../../services/datacommunication";
import Z1 from '../images/addreport1.png'
import axios from "axios";

export default function AddReport() {

    const [formData,setFormData] = useState({user_id:"",test:"",report:null});

    axios.defaults.baseURL = 'http://127.0.0.1:8000/patientprofile'

    const [uploadStatus,setUploadStatus] = useState({status:""})

    
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
        if (response.data) {
          setUploadStatus({status:"Report Added Successfully"}) 
          }
        if (response.error) {
          setUploadStatus({status:"Sorry!!! server Error"})
        }
        console.log(response)
    }

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     console.log(data)
    //     const response = await addReport(data);
    //     console.log(response);

    // }

    return(
        <div className="Addreport">
            <div className="search1">
      <form class="example" action="action_page.php">
      <input type="text" name="query" id="query" placeholder="search ..." className="form-control" onChange={handleChange}/>
      <button type="submit" className=" ml-1 text-sm  bg-blue-600 h-8 w-32 rounded-lg border-2" onClick={handleClick}> <i class="fa fa-search"></i></button>
        </form>
       </div><br /><br />
            <div className="Addreport1">

           
        <form onSubmit={handleSubmit} className="grid place-content-center">
          <div className="Addreport23">

          
           <div className="Addreport2">

           
            <label htmlFor="user" className="form-label">User</label>
            <input type="number" name="user_id" id="user_id" placeholder={users[0].id} className="form-control" onChange={handleInputChange}/><br />
            <label htmlFor="test" className="form-label">Test</label>
            <input type="text" name="test" id="test" className="form-control" onChange={handleInputChange}/>
            </div>

            <div className="Addreport3">
              <img src={Z1} alt="addrereport imagaes" />
            <input type="file" name="report" id="report" className="mt-4 mb-6 text-black font-semibold" onChange={handleFileChange}/>
            </div>
            
            </div>
             <div className="Addreport4">
            <button type="submit" className="btn btn-success bg-green-700">Upload <i class="fas fa-upload"></i></button>
            <p className="text-black-500 my-2"> {uploadStatus.status} </p>
             </div>
        </form>
            </div>
        </div>
    )
}