import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import WorkoutDetails from "../WorkoutDetails";

function Workouts() {
  const { currentUser } = useSelector((state) => state);
  const [workouts] = useState([{ ...currentUser.workouts }]);
  const myWorkouts = Object.values(workouts[0]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleClick = (workoutName) => {
    setSelectedWorkout(workoutName);
  };
  
  return !currentUser.workouts[0] ? (
    <h3>Click the link above to create your first workout!</h3>
  ) : (
    <div>
      <h3>Your Workouts:</h3>
      {myWorkouts.map((workout, index) => (
        <div key={index}>
          <button
            onClick={() => handleClick(workout.workoutName)}
            className="btn btn-primary"
          >
            {workout.workoutName}
          </button>
          {selectedWorkout === workout.workoutName && (
            <WorkoutDetails wName={workout.workoutName} />
          )}
        </div>
      ))}
    </div>
  );
}
export default Workouts;
