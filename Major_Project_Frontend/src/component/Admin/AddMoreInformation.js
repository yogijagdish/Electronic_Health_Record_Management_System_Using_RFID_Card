import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// import { useGetUserIdAPIMutation } from "../../services/datacommunication";
import { getUser } from "../../services/userService";

// import { useStoreInfoUserAPIMutation } from "../../services/datacommunication";

export default function AddMoreInformation() {

    const [userInfo,setUserInfo] = useState({user:"",id_number:"",patient_name:"",gender:"",permanent_address:"",chitizenship_num:"",father_name:"",mother_name:""});

    // const [emailData,isLoading] = useGetUserIdAPIMutation();

    // const [storeData] = useStoreInfoUserAPIMutation();

    const email = getUser();

    // const response = await emailData(email);
    // console.log(response)
    // const getData = async() => {
    //     const respone = await emailData(email)
    //     const id = respone.data.id
    //     setUserInfo({user:id})
    // };





    const handleChange = (e) => {
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }

    const handleClick = async(e) => {
        // getData();
        // const response = await storeData(userInfo);
        // console.log(response)
        console.log(userInfo);

    }

    return(
        <div className="grid place-content-center">
            <p className="mt-8 text-xl"> ADD MORE INFORMATION</p>
        <label htmlFor="id_number" className="text-sm mt-6"> Id Number </label>
        <input type="text" name="id_number" id="id_number" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>

        <label htmlFor="patient_name" className="text-sm mt-6"> Patient Name </label>
        <input type="text" name="patient_name" id="patient_name" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>
        
        <label htmlFor="gender" className="text-sm mt-6"> Gender </label>
        <input type="text" name="gender" id="gender" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>

        <label htmlFor="permanent_address" className="text-sm mt-6"> Permanent Address </label>
        <input type="text" name="permanent_address" id="permanent_address" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>

        <label htmlFor="citizenship_num" className="text-sm mt-6"> Citizenship Number </label>
        <input type="text" name="chitizenship_num" id="citizenship_num" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>

        <label htmlFor="father_name" className="text-sm mt-6"> Father Name </label>
        <input type="text" name="father_name" id="father_name" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>

        <label htmlFor="mother_name" className="text-sm mt-6"> Mother Name </label>
        <input type="text" name="mother_name" id="mother_name" className="border-2 rounded-lg h-8 w-80 mt-2" onChange={handleChange}/>

        <button type="submit" className="rounded-lg bg-blue-600 h-8 w-20 mt-6 ml-32 mb-40" onClick={handleClick}> Save </button>
        </div>
    )
}


// "user_id":"5",
// "id_number":"123",
// "patient_name":"jd",
// "gender":"m",
// "permanent_address":"pyuthan",
// "chitizenship_num":"789",
// "father_name":"ram",
// "mother_name":"sita"
// }