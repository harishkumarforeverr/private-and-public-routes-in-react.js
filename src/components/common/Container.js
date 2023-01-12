import React from "react";
import "./Container.scss";
import { logout } from "../../utils";
import { useNavigate } from "react-router-dom";

const SidebarObj = [
  {
    title: "Profile",
  },
];
const Container = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${props.sideBar ? "dashboardContainer" : ""}`}>
        <div
          style={{
            display: props.sideBar ? "block" : "none",
          }}
          className="sidebar"
        >
          {SidebarObj.map((obj) => {
            return (
              <div className="sidebarTitle ">
                {obj.title} <hr />
              </div>
            );
          })}
          <div className="logoutButton">
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div>{props.children} </div>
      </div>
    </>
  );
};

export default Container;
