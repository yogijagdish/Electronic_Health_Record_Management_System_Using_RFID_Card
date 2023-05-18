import React, { useEffect, useState } from "react";

import { useUpcomingPatientAPIQuery } from "../../services/datacommunication";
import { getToken } from "../../services/tokenService";

export default function Upcomingpatient() {

    const {access_token} = getToken();

    const {data,error,isSuccess} = useUpcomingPatientAPIQuery(access_token);

    const [upcomingPatient,setUpcomingPatient] = useState({is_available:"",is_treated:"",problem:""});





    useEffect(()=>{
        if (data && isSuccess) {
            console.log(data)
        }
        else{
            console.log(error)
        }
    },[data,error,isSuccess])

    return (
        <div>
        this is upcomming patient
        </div>
    )
}