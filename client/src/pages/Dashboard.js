import React from "react";
import DashMessage from "../components/DashMessage";
import Navigation from "../components/Nav";

const Dashboard = () => {
  {/* Creat map function for workout cards*/ }
    return (
      <div>
        <Navigation />
        <DashMessage />
        {/* I want to populate this area with a header title My Workouts followed by a conditional rendering of each workout*/}
        {/* Each workout card will have a date and title and be a clickable link to a separate page with details*/}
      </div>
    );
};

export default Dashboard;
