import React from 'react'
import './style.css'
import A1 from '../images/dprofile2.jpg'
import { Link } from 'react-router-dom'
const Adddetails = () => {
  return (
    <div className='Adddetails'><br />
        <div className="Adddetailsn1">
           <div className="Adddetailsn2">
            <p>Add Patient Details</p>
           </div>
            
            <div className="Adddetailsn34">

          
           <div className="Adddetailsn3">
           <div className="fox">
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
          <input type="text" name="user_id" id="user_id"  className="form-control" />
          </div>
          <div className="col-md-6">
          <label htmlFor="is_available" className="form-label"> Is Available </label>
          <input type="text" name="is_available" id="is_available"  className="form-control"/>
          </div>
          <div className="col-md-6">
          <label htmlFor="is_treated" className="form-label">Is treated </label>
          <input type="text" name="is_treated" id="is_treated"  className="form-control"/>
          </div>
          <div className="col-md-6">
          <label htmlFor="is_treated" className="form-label">Is treated </label>
          <input type="text" name="is_treated" id="is_treated"  className="form-control"/>
          </div>
        </form>
      </div>
    </div>
           </div>
 

           <div className="Adddetailsn4">
           <div className="fox">
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
          <input type="text" name="user_id" id="user_id"  className="form-control" />
          </div>
          <div className="col-md-6">
          <label htmlFor="is_available" className="form-label"> Is Available </label>
          <input type="text" name="is_available" id="is_available"  className="form-control"/>
          </div>
          <div className="col-md-6">
          <label htmlFor="is_treated" className="form-label">Is treated </label>
          <input type="text" name="is_treated" id="is_treated"  className="form-control"/>
          </div>
          <div className="col-md-6">
          <label htmlFor="is_treated" className="form-label">Is treated </label>
          <input type="text" name="is_treated" id="is_treated"  className="form-control"/>
          </div>
        </form>
      </div>
    </div>
           </div>


           </div>


        </div>
    </div>
  )
}

export default Adddetails;