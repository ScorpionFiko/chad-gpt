import React, { useState } from "react";
import { useSelector } from "react-redux";

function WorkoutDetails(props) {
  const { currentUser } = useSelector((state) => state);
  const [workouts] = useState([{ ...currentUser.workouts }]);

  const myWorkouts = Object.values(workouts[0]);

  const selectedWorkout = myWorkouts.filter((workout) => {
    return workout.workoutName === props.wName;
  });

  const thisWorkout = Object.values(selectedWorkout[0]);
  // const workout = thisWorkout.map((workout) => {
  //   return workout;
  // });

  const workoutDays = Object.values(thisWorkout[3]);

  // const exerciseRows = workoutDays.map((index) => {
  //   return index.exercises;
  // });

  // const exercise = exerciseRows.map((exercise, index) => {
  //   return exercise;
  // });

  return (
    <div className="container">
      {workoutDays.map((index) => (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <h3 className="text-center">{index.day}</h3>
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
              {index.exercises.map((category, value) => (
                <tr>
                  <th key={category} value={category} scope="row">
                    {category.exerciseName}
                  </th>
                  <td>{category.exerciseType}</td>
                  <td>{category.sets}</td>
                  <td>{category.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default WorkoutDetails;
