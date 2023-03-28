import React from "react";
import Nav from "../components/Nav";

const BuildWorkout = () => {
  return (
    <div>
      <Nav />
      {/* This will render the questions components sequentially and conditionally, followed by an event handler to link back to the workout card */}
    </div>
  );
};

export default BuildWorkout;
