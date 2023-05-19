import React, { useEffect, useState } from "react";
// import Tableform1 from '../Table/column1'
import './style.css'
import { useUpcomingPatientAPIQuery } from "../../services/datacommunication";
import { getToken } from "../../services/tokenService";

  const Upcomingpatient = () => {

    const {access_token} = getToken();

    const {data,error,isSuccess} = useUpcomingPatientAPIQuery(access_token);




    useEffect(()=>{
        if (data && isSuccess) {
            console.log(data)
        }
        else{
            console.log(error)
        }
    },[data,error,isSuccess])

    return (
        <div className='Upcomingpatient'>
          
          <div className='Upcomingpatient1'>
               <h3>
                Upcoming Patient list
               </h3>
             </div>
       {/* <Tableform1/> */}
          </div>
      )
}

export default Upcomingpatient;