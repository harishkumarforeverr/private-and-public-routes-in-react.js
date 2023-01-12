import React, { useState, useEffect } from "react";
import "./CreateUser.scss";
import { useNavigate } from "react-router-dom";
import ConfirmationModel from "./ConfirmationModel";
import { DASHBOARD_ROUTE } from "../../../utils/constant";
const initialErrorState = {
  firstname: false,
  lastname: false,
  role: false,
  mobile: false,
  address: false,
  gender: false,
  dob: false,
  email: false,
  city: false,
  pincode: false,
  state: false,
  country: false,
  password: false,
  confirmPassword: false,
};
const CreateUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(initialErrorState);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    role: "",
    mobile: "",
    address: "",
    gender: "",
    dob: "",
    email: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const obj = {};
    // if inputfields is empty or there length is <=1  then its we are showing errror message and showing
    // smiliar for all fields
    for (const property in formData) {
      if (formData[property] == "" || formData[property].length <= 1)
        obj[property] = true;
      else obj[property] = false;
    }
    const index = Object.values(obj).findIndex((argObj) => argObj == true);

    //  we will show error based on condition
    if (index >= 0) {
      setError((prev) => ({
        ...prev,
        ...obj,
      }));
    } else {
      setShow(true);
      setError(initialErrorState);
      setTimeout(() => {
        setShow(false);
        navigate("/");
      }, 300);
    }
  };
  // updating the formData which user entered values here
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="addUserWrapper">
        <form action="" class="addUserForm">
          <h2> Add User</h2>
          <div className="addUserFields">
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="firstname"
                id="firstname"
              />
              <label for="firstname">First Name</label>
              {error.firstname && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="lastname"
                id="lastname"
              />
              <label for="lastname">Last Name</label>
              {error.lastname && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
              />
              <label for="password">password</label>
              {error.password && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
              <label for="confirmPassword">confirm Password</label>
              {error.confirmPassword && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div>
              <div className="displayColumn">
                <label for="role">Role</label>
                <select onChange={handleChange} name="role" id="role">
                  <option value="">--select role--</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                {error.role && (
                  <p className="errorSpacingSigupSelect">
                    These is field required{" "}
                  </p>
                )}
              </div>
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="mobile"
                id="mobile"
              />
              <label for="mobile">Mobile</label>{" "}
              {error.mobile && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>{" "}
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="address"
                id="address"
              />
              <label for="address">Address</label>{" "}
              {error.address && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div>
              <div className="displayColumn">
                <label for="gender">Gender</label>
                <select onChange={handleChange} name="gender" id="gender">
                  <option value="">select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {error.gender && (
                  <p className="errorSpacingSigupSelect">
                    These is field required{" "}
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                marginTop: "-1.2rem",
              }}
              className="inputFiledsGroup"
            >
              <div>DOB</div>
              <input onChange={handleChange} type="date" name="dob" id="dob" />
              {error.dob && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>{" "}
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
              />
              <label for="email">Email</label>{" "}
              {error.email && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="city"
                id="city"
              />
              <label for="city">City</label>{" "}
              {error.city && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="pincode"
                id="pincode"
              />
              <label for="pincode">Pincode</label>{" "}
              {error.pincode && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="state"
                id="state"
              />
              <label for="state">State</label>{" "}
              {error.state && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
            <div className="inputFiledsGroup">
              <input
                onChange={handleChange}
                type="text"
                name="country"
                id="country"
              />
              <label for="country">Country</label>{" "}
              {error.country && (
                <p className="errorSpacingSigup">These is field required </p>
              )}
            </div>
          </div>
          <br />
          <div className="displayButtons">
            <div className="buttons">
              {" "}
              <input
                onClick={handleLogin}
                type="submit"
                value="Add"
                className="actionButtons"
              />
              <input
                onClick={(e) => {
                  e.preventDefault();
                  navigate(DASHBOARD_ROUTE());
                }}
                value="Cancel"
                className="actionButtons"
              />
            </div>
          </div>
        </form>
      </div>
      {/* // after adding all fields it will redirect to ConfirmationModel adding the fields */}
      {show && <ConfirmationModel />}
    </div>
  );
};

export default CreateUser;
