import React from "react";
import "./style.css";
import Convenience from "../images/Convenience.png";
import Accessible from "../images/Accessible.png";
import Securestorage from "../images/Securestorage.png";
import Paperless from "../images/Paperless.png";
const about = () => {
  return (
    <div className="About">
      <div className="About1">
        <span>Our Motto</span>
        <p>
          "Revolutionize your healthcare experience with a smart health card.
        </p>
        <p>Accessible, Paperless, Secure."</p>
      </div>
      <div className="About2">
        <span>Our Mission</span>
        <p>
          {" "}
          To streamline the record management process, improves data accuracy, and enhance patient care.
        </p>
        <div className="About3456">
          <div className="About3">
            <img src={Convenience} alt="" />
            <div className="a1">Convenience</div>
            <p>
            With all medical records stored in one place, patients no longer have to keep track of paper documents
            </p>
          </div>
          <div className="About4">
            <img src={Securestorage} alt="" />
            <div className="a1">Secure Storage</div>
            <p>
            The smart health card offers a secure way to store medical records and data cannot be modified or deleted
            </p>
          </div>
          <div className="About5">
            <img src={Accessible} alt="" />
            <div className="a1">Accessible</div>
            <p>
            Patients can easily access their medical records anytime, anywhere, without the need for physical documents
            </p>
          </div>
          <div className="About6">
            <img src={Paperless} alt="" />
            <div className="a1">Paperless</div>
            <p>
            Presence of medical reports in digital from so it eliminates the paper related problems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
