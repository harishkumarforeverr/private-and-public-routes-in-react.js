import React, { useEffect } from "react";
import "./UserDashboard.scss";
import { useNavigate } from "react-router-dom";
const SidebarObj = [
  {
    title: "User",
  },
  {
    title: "images",
  },
];
const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="userContainer">
        <h2 className="title">User Dashboard</h2>
        <ul className="responsiveTable">
          <li className="tableHeader">
            <div className="col col-1">FirstName</div>
            <div className="col col-2">LastName</div>
            <div className="col col-3">Mobile</div>
            <div className="col col-4">Gender</div>
            <div className="col col-5"> DOB</div>
            <div className="col col-6">Role</div>
            <div className="col col-7"> Address</div>
            <div className="col col-8">City </div>
            <div className="col col-9"> State</div>
            <div className="col col-10">Country </div>
            <div className="col col-11"> Pincode</div>
            <div className="col col-12"> </div>
          </li>
          <li className="tableRow">
            <div className="col col-1" data-label="FirstName">
              Pooja
            </div>
            <div className="col col-2" data-label="LastName">
              Pandala
            </div>
            <div className="col col-3" data-label="Mobile">
              Pending
            </div>
            <div className="col col-4" data-label="Gender">
              Female
            </div>
            <div className="col col-5" data-label="DOB">
              Pending
            </div>
            <div className="col col-6" data-label="Role">
              Pending
            </div>
            <div className="col col-7" data-label="Address">
              $350
            </div>
            <div className="col col-8" data-label="City">
              Pending
            </div>
            <div className="col col-9" data-label="State">
              Pending
            </div>
            <div className="col col-10" data-label="Country">
              Pending
            </div>
            <div className="col col-11" data-label="Pincode">
              Pending
            </div>
            <div className="col col-12" data-label="">
              <button
                onClick={() => {
                  navigate("/edit");
                }}
                className="button primary"
              >
                Edit
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
