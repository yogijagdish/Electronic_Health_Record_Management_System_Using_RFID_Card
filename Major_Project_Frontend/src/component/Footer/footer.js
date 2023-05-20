import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram,faYoutube,faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css'
const Footer=()=> {
  return (
      <div className="footer">
         <div className="write">
        <p>© 2023 Copyright : Smart Health</p>
        </div>

        <div className ="singleCol social-media-icons-white">
       <a href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebook}/>
       </a>
       <a href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faTwitter}/>
       </a>
       <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram}/>
       </a>
       <a href="https://www.youtube.com/">
        <FontAwesomeIcon icon={faYoutube}/>
       </a>
       <a href="https://github.com/">
        <FontAwesomeIcon icon={faGithub}/>
       </a>
        </div>
       
      </div>
  );
}
export default Footer;