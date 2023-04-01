import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import WorkoutDetails from "../WorkoutDetails";

function Workouts() {
  const { currentUser } = useSelector((state) => state);
  const [workouts] = useState([{ ...currentUser.workouts }]);
  const [newWorkout] = useState([{ ...currentUser.workouts[0] }]);

  const {workoutList} = Object.keys(workouts[0]);
  console.log(workoutList);

  console.log(workouts[0]);
  console.log(newWorkout);

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(true);
  };

  return !currentUser.workouts[0] ? (
    <h3>Click the link above to create your first workout!</h3>
  ) : (
    <div>
      <h3>Your Workouts:</h3>
      {newWorkout.map((workout, index) => (
        <div key={index}>
          <button onClick={handleClick} className="btn btn-primary">
            {workout.workoutName}
          </button>
          {showDetails && <WorkoutDetails wName={workout.workoutName} />}
        </div>
      ))}
    </div>
  );
}

export default Workouts;
