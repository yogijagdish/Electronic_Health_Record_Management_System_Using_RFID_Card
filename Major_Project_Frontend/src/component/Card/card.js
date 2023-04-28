import React from 'react'
import {Link} from "react-router-dom"
import './style.css'
const card = (props) => {
  return (
    <div className='Card'>
      <div class="card1">
  <img src={props.picture} class="card2" alt="..." />
  <div class="card3">
    <p> Only {props.des} are allowed to login in this page</p>
    <Link to={props.link}><button type="button" className="btn btn-dark">{props.name}</button></Link>

  </div>
  </div>
    </div>
  );
}
export default card;
