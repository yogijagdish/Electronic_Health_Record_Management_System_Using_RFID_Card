import React, { useEffect, useState } from "react";

import { useDisplayReportAPIQuery } from "../../services/datacommunication";

import { getToken } from "../../services/tokenService";

import ReportDownload from "./ReportDownload"


export default function DisplayReport() {

    const {access_token} = getToken();

    const [userTest, setUserTest] = useState([0])

    const {data, isSuccess} = useDisplayReportAPIQuery(access_token);

    useEffect(()=> {
        if(data && isSuccess) {
            setUserTest(data)
            console.log(data)
        }
    })

    const reportUrl = '/media/report/SIP_PAYMENT_RECEIPT4.pdf';
    return (

        <div>
        this is to display report
        {userTest.map((item) => (
            <div key={item.id}>
                <p> {item.test}</p>
                <p> {item.date} </p>
                <p> {item.report}</p>
                <ReportDownload reporturl={item.report}/>
            </div>
        ))}
        </div>
    )
}