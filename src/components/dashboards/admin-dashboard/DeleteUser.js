import React from "react";
import "./AdminDashboard.scss";

const DeleteUser = ({ setshowDeleteModel }) => {
  return (
    <>
      <div className="adminContainer">
        <div id="myModal" className=" modelDelete">
          <div className="modalContent">
            <div className="modalContent">
              <h2>
                Are you sure, You want to delete it <small>!!</small>
              </h2>
              <div className="centerTheContext">
                <button
                  onClick={() => {
                    setshowDeleteModel(false);
                  }}
                  className="actionButtons success"
                >
                  Yes
                </button>{" "}
                <button
                  onClick={() => {
                    setshowDeleteModel(false);
                  }}
                  className="actionButtons danger"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
