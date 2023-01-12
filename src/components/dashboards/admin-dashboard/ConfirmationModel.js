import React from "react";
import "./AdminDashboard.scss";
import "./ConfirmationModel.scss";
const ConfirmationModel = () => {
  return (
    <>
      <div className="adminContainer">
        <div id="myModal" className=" modalContentConfirmationConatiner">
          <div className="modalContentConfirmation">
            <div className="modalContent">
              <h3>
                Added successfully <small>!!</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModel;
