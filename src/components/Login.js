import React, { useState } from "react";
import { login, setUser } from "../utils";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { DASHBOARD_ROUTE } from "../utils/constant";

const Login = () => {
  /// initial state of error
  const [error, setError] = useState({
    email: false,
    password: false,
    role: false,
  });
  // initial state of inputfields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const obj = {};
    // if email is empty or <=1  then its we are showing errror message and showing
    // smiliar for  password and roles aswell
    if (formData.email == "" || formData.email.length <= 1) obj.email = true;
    else obj.email = false;
    if (formData.password == "" || formData.password.length <= 1)
      obj.password = true;
    else obj.password = false;
    if (formData.role == "" || formData.role.length <= 1) obj.role = true;
    else obj.role = false;
    const index = Object.values(obj).findIndex((argObj) => argObj == true);

    //  we will show error based on condition
    if (index >= 0) {
      setError((prev) => ({
        ...prev,
        ...obj,
      }));
    } else {
      login();
      navigate(DASHBOARD_ROUTE());
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // updating the formData which user entered values here
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // setUser (admin or user)
  const handleChangeSelect = (e) => {
    // select trigger
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // set the role in localstorge
    setUser(value);
  };
  return (
    // login page
    <div>
      <div className="loginWrapper">
        <div className="loginDetails">
          <div className="loginImg">
            <img src={require("../assets/loginImg.PNG")} alt="" />
          </div>
          <div>
            <form className="loginForm">
              <div className="loginTag">
                <h4>Welcome</h4>
              </div>
              <div className="information">
                <h2 className="title">Login</h2>
                <div className="inputGroup">
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                  />

                  <label for="Email">Email</label>
                  {error.email && (
                    <p className="errorMessage errorSpacing">
                      These is field required{" "}
                    </p>
                  )}
                </div>
                <div className="inputGroup">
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                  />
                  <label for="Password">Password</label>{" "}
                  {error.password && (
                    <p className="errorMessage errorSpacing">
                      These is field required{" "}
                    </p>
                  )}
                </div>

                <div>
                  <div className="displayColumn">
                    <label className="selectLabel" for="loginPassword">
                      Role
                    </label>
                    <select
                      type="role"
                      name="role"
                      id="role"
                      onChange={handleChangeSelect}
                    >
                      <option value="">-- select role --</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>{" "}
                    {error.role && (
                      <p className="errorMessage errorSpacingSelect">
                        These is field required{" "}
                      </p>
                    )}
                  </div>
                </div>
                <div className="button">
                  {" "}
                  <input
                    onClick={handleLogin}
                    type="submit"
                    value="Login"
                    className="submitButton"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
