import React from "react";
import Navigation from "../components/Nav";
import Auth from "../utils/auth";

const Dashboard = () => {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
};

export default Dashboard;
