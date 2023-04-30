import React from 'react';
import './style.css';
// import Login from '../Login/login'
import { Link } from "react-router-dom";
const adminlogin = () => {
  return (
    <div className='Adminlogin'>
        {/* <Login name = "Admin" newpage = '/adminpanel'/> */}

        <div className="login">
        <form className='need-validation'>
            <div className="login-1">

         <h1>Admin Login-Page!!</h1>

        <div className="form-group was-validated">
                <label className='form-label' htmlFor='email'>Email Adress</label><br />
                <input className='form-control' type="email" id='email' required/> 

                <div className="invalid-feedback">
                    Please Enter your Email adress
                </div>
        </div>

        <div className="form-group was-validated">
                <label className='form-label' htmlFor='password'>Password</label><br />
                <input className='form-control' type="password" id='password' required/> 
                <div className="invalid-feedback">
                    Please Enter your Password
                </div>
        </div>
        {/* <div className="form-group">
                <input type="checkbox" id='checkbox' />
                <label htmlFor='checkbox'>Remember me</label>

        </div> */}
        <Link className="nav-link active" aria-current="page" to='/adminpanel'>
                  <h2> <button className="btn btn-success">Sign in </button></h2>
                </Link>
                <div className="forgotpassword">
                <Link className="nav-link active" aria-current="page" to ='/forgot1'> <p>Forgotten password</p></Link>
                </div>

            </div>
            </form>
      </div>
    </div>
  )
}

export default adminlogin;