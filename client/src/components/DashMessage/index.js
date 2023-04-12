import React from "react";
import { useSelector } from 'react-redux';

function DashMessage() {
    const { currentUser } = useSelector(state=>state);

  return (
    <div className="pt-5">
      <h4 className="pt-5 text-center">
        Welcome back, {currentUser.firstName}! Click on the build workout link to create a new
        workout, or select one of your existing plans to pick up where you left
        off. Keep up the great work!
      </h4>
    </div>
  );
}

export default DashMessage;
