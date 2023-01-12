import React, { useState } from "react";
import "./AdminDashboard.scss";
import DeleteUser from "./DeleteUser";
import CreateUser from "./CreateUser";
import { useNavigate } from "react-router-dom";

// Admin Dashboard
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showDeleteModel, setshowDeleteModel] = useState(false);
  return (
    <>
      <div className="adminContainer">
        <h2 className="title">Admin Dashboard</h2>
        <div className="globalSearch">
          <input placeholder="Search Here" />
          <div>
            <button className="globalSearchButton success">search</button>
          </div>
        </div>
        {/* //users list of table mock data */}
        <ul className="responsiveTable">
          <li className="tableTitle">
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
              sivakumar
            </div>
            <div className="col col-2" data-label="LastName">
              pandala
            </div>
            <div className="col col-3" data-label="Mobile">
              Pending
            </div>
            <div className="col col-4" data-label="Gender">
              male
            </div>
            <div className="col col-5" data-label="DOB">
              Pending
            </div>
            <div className="col col-6" data-label="Role">
              Pending
            </div>
            <div className="col col-7" data-label="Address">
              Pending
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
                  // navigate to edit
                  navigate("/edit");
                }}
                className="actionButtons primary"
              >
                Edit
              </button>{" "}
              <button
                onClick={() => {
                  setshowDeleteModel(true);
                }}
                className="actionButtons danger"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
        {/* //pagination */}
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
      {/* // setshowDeleteModel to true and showing DeleteUser Model */}
      {showDeleteModel && (
        <DeleteUser setshowDeleteModel={setshowDeleteModel} />
      )}
    </>
  );
};

export default AdminDashboard;
