import React from "react";

import "./AdminDashboard.scss";
const UpdateUser = ({ setshowUpdateModel }) => {
  return (
    <>
      <div className="adminContainer">
        <div id="myModal" className="modal">
          <div className="modalContent">
            <h2>Update User</h2>
            <div>
              <ul className="responsiveTable">
                <li className="tableHeader">
                  <div className="col col-1">FirstName</div>
                  <div className="col col-2">LastName</div>
                  <div className="col col-3">Mobile</div>
                  <div className="col col-4">Gender</div>
                  <div className="col col-5"> DOB</div>
                  <div className="col col-4">Role</div>
                  <div className="col col-6"> Address</div>
                  <div className="col col-7">City </div>
                  <div className="col col-8"> State</div>
                  <div className="col col-9">Country </div>
                  <div className="col col-10"> pincode</div>
                </li>
                <li className="tableRow">
                  <div className="col col-1" data-label="Job Id">
                    <input value={"42235"} />
                  </div>
                  <div className="col col-2" data-label="Customer Name">
                    <input value={"John Doe"} />
                  </div>
                  <div className="col col-3" data-label="Amount">
                    <input value={"$350"} />
                  </div>
                  <div className="col col-4" data-label="Payment Status">
                    <input value={"Pending"} />
                  </div>
                  <div className="col col-5" data-label="Amount">
                    <input value={"$350"} />
                  </div>
                  <div className="col col-6" data-label="Payment Status">
                    <input value={"Pending"} />
                  </div>
                  <div className="col col-7" data-label="Amount">
                    <input value={"$350"} />
                  </div>
                  <div className="col col-8" data-label="Payment Status">
                    <input value={"Pending"} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="rightTheContext">
              <button
                onClick={() => {
                  setshowUpdateModel(false);
                }}
                className="btn success"
              >
                Yes
              </button>{" "}
              <button
                onClick={() => {
                  setshowUpdateModel(false);
                }}
                className="btn danger"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
