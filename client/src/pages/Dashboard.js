import React from "react";
import DashMessage from "../components/DashMessage";
import Navigation from "../components/Nav";
import Auth from "../utils/auth";

const Dashboard = () => {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Navigation />
        <DashMessage />
      </div>
    );
  }
};

export default Dashboard;
