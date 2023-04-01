import React, { useState } from "react";
import { useSelector } from "react-redux";

function WorkoutDetails({ wName }) {
  const { currentUser } = useSelector((state) => state);
  const [workouts] = useState([{ ...currentUser.workouts }]);

     let workout = workouts.filter(
       (workout) => workout[0].workoutName === wName
     );
     console.log(workout);

  return (
    <div className="container">
      {workouts.map((workout, index) => (
        <div key={index} className="shadow-lg p-3 mb-5 bg-white rounded">
          <h3 className="text-center">{workout[index].routine[index].day}</h3>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Category</th>
                <th scope="col">Sets</th>
                <th scope="col">Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {workout[0].routine[0].exercises[0].exerciseName}
                </th>
                <td>{workout[0].routine[0].exercises[0].exerciseType}</td>
                <td>{workout[0].routine[0].exercises[0].sets}</td>
                <td>{workout[0].routine[0].exercises[0].reps}</td>
              </tr>
              <tr>
                <th scope="row">{workout[0].routine[0].exercises[1].exerciseName}</th>
                <td>{workout[0].routine[0].exercises[1].exerciseType}</td>
                <td>{workout[0].routine[0].exercises[1].sets}</td>
                <td>{workout[0].routine[0].exercises[1].reps}</td>
              </tr>
              <tr>
                <th scope="row">{workout[0].routine[0].exercises[2].exerciseName}</th>
                <td>{workout[0].routine[0].exercises[2].exerciseType}</td>
                <td>{workout[0].routine[0].exercises[2].sets}</td>
                <td>{workout[0].routine[0].exercises[2].reps}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default WorkoutDetails;
