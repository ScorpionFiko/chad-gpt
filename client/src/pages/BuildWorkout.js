import React from "react";
import Nav from "../components/Nav";
import ExerciseRoutineGenerator from "../components/Questions/index";



const BuildWorkout = () => {
  return (
    <div>
      <Nav />
      {/* This will render the questions components sequentially and conditionally, followed by an event handler to link back to the workout card */}
      <ExerciseRoutineGenerator />
    </div>
  );
};

export default BuildWorkout;
