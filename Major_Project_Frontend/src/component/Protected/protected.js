import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const Component = props.Component;
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
    if( !login ){
        navigate('/doctorlogin')
    }
    },[])
  return (
    <div>
       <Component/>
    </div>
  )
}

export default Protected;
