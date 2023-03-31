import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import WorkoutDetails from '../WorkoutDetails';

function Workouts() {
  const { currentUser } = useSelector((state) => state);
  const [workouts] = useState([{ ...currentUser.workouts }]);
  console.log(workouts)

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(true);
  }

  return (
    <div>
      <h3>Your Workouts:</h3>
      {workouts.map((workout, index) => (
        <div key={index}>
          <button onClick={handleClick} className="btn btn-primary">{workout[index].workoutName}</button>
          {showDetails && <WorkoutDetails />}
        </div>
      ))}
    </div>
  );
}

export default Workouts;

/*<p>{workout[0].workoutName}</p>
<p>{workout[0].dateCreated}</p>
<p>{workout[0].routine[0].day}</p>
<p>{workout[0].routine[0].exercises[0].exerciseName}</p>*/
