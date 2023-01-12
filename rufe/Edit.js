import React from "react";
import { login } from "../src/utils";
import "./Edit.scss";
const Edit = (props) => {
  const handleLogin = () => {
    login();
    // props.history.push('/dashboard');
  };
    return (
    <div>
      <div class="loginWrapper">
        <form action="" class="form">
          <h2>Edit User</h2>
        <div className="inputFieldsSigup">
        <div class="inputGroup">
            <input type="text" name="FirstName" id="FirstName" required />
            <label for="FirstName">First Name</label>
          </div>
          <div class="inputGroup">
            <input type="text" name="LastName" id="LastName" required />
            <label for="LastName">Last Name</label>
          </div>
          <div>
            <div class="selectSigup">
              <div className="displayColumn">
                <label for="loginPassword">Role</label>

                <select>
                  <option value="1">--select role--</option>
                  <option value="2">Admin</option>
                  <option value="3">User</option>
                </select>
              </div>
            </div>
          </div>
          <div class="inputGroup">
            <input type="text" name="loginUser" id="loginUser" required />
            <label for="loginUser">Mobile</label>
          </div>{" "}
          <div class="inputGroup">
            <input type="text" name="loginUser" id="loginUser" required />
            <label for="loginUser">Address</label>
          </div>
          <div >
            <div class="selectSigup">
              <div className="displayColumn">
                <label for="loginPassword">Gender</label>

                <select>
                  <option value="1">select</option>
                  <option value="2">Male</option>
                  <option value="3">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div 
          style={{
            marginTop:"-1.2rem"
          }}
          class="inputGroup">
            <div>DOB</div>
            <input
              type="date"
              name="loginPassword"
              id="loginPassword"
              required
            />
          </div>{" "}
          <div class="inputGroup">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
            />
            <label for="loginPassword">Email</label>
          </div>
          <div class="inputGroup">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
            />
            <label for="loginPassword">City</label>
          </div>
          <div class="inputGroup">
            <input type="text" name="loginUser" id="loginUser" required />
            <label for="loginUser">Pincode</label>
          </div>
          
          <div class="inputGroup">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
            />
            <label for="loginPassword">State</label>
          </div>
          <div class="inputGroup">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
            />
            <label for="loginPassword">Country</label>
          </div>
        </div>
          <br />
          <input type="submit" value="Update" class="submitBtn" />
          <input type="submit" value="Cancel" class="submitBtn" />
        </form>
      </div>
    </div>
  );
};

export default Edit;
