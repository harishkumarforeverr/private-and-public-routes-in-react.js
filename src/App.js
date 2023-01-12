import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import AddUser from "./components/dashboards/admin-dashboard/CreateUser";
import AdminDashboard from "./components/dashboards/admin-dashboard/AdminDashboard";
import UserDashboard from "./components/dashboards/user-dashboard/UserDashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import UpdateUser from "./components/dashboards/admin-dashboard/UpdateUser";

const App = () => {
  return (
    <Routes>
      {/* /// public and private route setup here and relavant paths has set here */}
      <Route path="/" element={<PublicRoute component={Login} />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute sideBar={true} component={AdminDashboard} />}
      />{" "}
      <Route path="/signin" element={<PrivateRoute component={AddUser} />} />
      <Route
        path="/userdashboard"
        element={<PrivateRoute sideBar={true} component={UserDashboard} />}
      />{" "}
      <Route
        path="/edit"
        element={<PrivateRoute sideBar={false} component={UpdateUser} />}
      />
    </Routes>
  );
};

export default App;
