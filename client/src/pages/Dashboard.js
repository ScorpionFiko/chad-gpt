import React from "react";
import DashMessage from "../components/DashMessage";
import Navigation from "../components/Nav";
import Workouts from "../components/MyWorkouts";

const Dashboard = () => {
  
  return (
    <div>
      {/* Navigation appears once user logs in */}
      <Navigation />
      {/* Personalized welcome message with user info incorporated */}
      <DashMessage />
      {/* Mapped component holding clickable workout links */}
      <Workouts />
    </div>
  );
};

export default Dashboard;
