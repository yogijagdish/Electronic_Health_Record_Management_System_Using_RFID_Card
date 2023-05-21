import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import { usePatientLoginAPIMutation } from '../../services/datacommunication'

import { storeToken } from '../../services/tokenService'

import './style.css'
import  scan from '../images/scan.png'
const Scancard = () => {

    const [scannerData, setScannerData] = useState([]);

    const [patientLogin, {isLoading} ] = usePatientLoginAPIMutation();
    
    const navigate = useNavigate();

    const loginDetail1 = {email:"patient1@gmail.com",password:"abcd"}

    const loginDetail2 = {email:"patient2@gmail.com",password:"abcd"}

    const loginDetail3 = {email:"patient3@gmail.com",password:"abcd"}

    const loginDetail4 = {email:"patient4@gmail.com",password:"abcd"}

    const login1 = async (e) => {
        const response = await patientLogin(loginDetail1)
        if (response.data) {
            storeToken(response.data.token)
            navigate('/patientpanel')
        }
    }

    const login2 = async (e) => {
        const response = await patientLogin(loginDetail2)
        if (response.data) {
            storeToken(response.data.token)
            navigate('/patientpanel')
        }
    }

    const login3 = async (e) => {
        const response = await patientLogin(loginDetail3)
        if (response.data) {
            storeToken(response.data.token)
            navigate('/patientpanel')
        }
    }

    const login4 = async (e) => {
        const response = await patientLogin(loginDetail4)
        if (response.data) {
            storeToken(response.data.token)
            navigate('/patientpanel')
        }
    }

    const Scan = async (e) => {
        const response = await axios.get('https://api.thingspeak.com/channels/2153555/feeds.json?api_key=O6PI8POA95USQVJL&results=1')
        console.log(response.data.feeds[0].field1)
        if (response.data.feeds[0].field1 == 700) {
            login1();
        }
        else if (response.data.feeds[0].field1 == 1){
            login2();
        }
        else if (response.data.feeds[0].field1 == 1000) {
            login3();
        }
        else if (response.data.feeds[0].field1 == 400) {
            login4();
        }
        setScannerData(response.data.feeds)
    }



  return (
    <div className='Scancard'><br /><br />
    <div className="Scancard1">
        <h3 className='text-2xl'>Scan your Card</h3>
        <img src={scan} alt="scan card" />
        <p>Place the RFID card above the RFID scanner and let 
            the scanner scan it properly.</p>
            <p>
            Please do just like shown in above figure
            </p>
            <div className='grid place-content-center mt-16'>

            <button className='btn btn-primary' onClick={Scan} >Done</button>
            </div>
    </div>
    </div>
  )
}

export default Scancard