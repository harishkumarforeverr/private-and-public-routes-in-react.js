// here navigate to selected dashboard
export const DASHBOARD_ROUTE = () =>
  localStorage.getItem("LOGIN_CONSTANT") == "admin"
    ? "/dashboard"
    : "/userdashboard";
