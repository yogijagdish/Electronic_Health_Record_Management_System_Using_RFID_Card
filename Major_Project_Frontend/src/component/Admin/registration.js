import React from "react";
import "./style.css";
const Form = () => {
  return (
    <div className="Registration">
      <div className="heading">
        <h2>Please fill your required information here:</h2>
      </div>

      <div className="box">
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
                placeholder="Enter your first name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputtext4" className="form-label">
                Middle Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputtext4"
                placeholder="Enter your middle name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputtext4" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputtext4"
                placeholder="Enter your last name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputtext4" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="inputtext4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Age:
              </label>
              <input type="number" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Pokhara"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City:
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-5">
              <label htmlFor="inputCity" className="form-label">
                sex:
              </label>
              <select>
                <option value="1">male</option>
                <option value="2">female</option>
                <option value="2">others</option>
              </select>
            </div>
          </form>
        </div><br />
        {/* adding button */}
        <div className="button">
          <button type="buttonk" class="btn btn-success">
            ADD
          </button>
        </div>
      </div>
      {/* for scanning */}
      <div className="button2">
        <text>Have u already made a card ?</text>
        <button type="buttonk" class="btn btn-success">
          scan card
        </button>
      </div>
    </div>
  );
};

export default Form;
