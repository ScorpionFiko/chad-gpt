import React, { useState } from "react";
import { useSelector } from "react-redux";

function WorkoutDetails(props) {
  const { currentUser } = useSelector((state) => state);
  const [workouts] = useState([{ ...currentUser.workouts }]);

  const myWorkouts = Object.values(workouts[0]);

  const selectedWorkout = myWorkouts.filter((workout) => {
    return workout.workoutName === props.wName;
  });

  // const thisWorkout = Object.values(selectedWorkout[0]);
  // console.log(thisWorkout);

    console.log(selectedWorkout);
    const thisWorkout = Object.values(selectedWorkout[0]);
    console.log(thisWorkout);
    console.log(thisWorkout[3][0].day);
    const workout = thisWorkout.map((workout) => {
      return workout;
    });
    console.log(workout);
    console.log(thisWorkout[3]);
    const workoutDays = Object.values(thisWorkout[3]);
    console.log(workoutDays);
    console.log(workoutDays[1].day)

    
  const exerciseRows = workoutDays.map((index) => {
    return index.exercises;
  });

  const exercise = exerciseRows.map((exercise, index) => {
    return exercise;
  });

  console.log(exerciseRows);
  console.log(exercise[0]);

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
    // <div className="container">
    //   {myWorkouts.map((workout, index) => (
    //     <div key={index} className="shadow-lg p-3 mb-5 bg-white rounded">
    //       <h3 className="text-center">placeholder</h3>
    //       <table className="table table-dark">
    //         <thead>
    //           <tr>
    //             <th scope="col">Exercise</th>
    //             <th scope="col">Category</th>
    //             <th scope="col">Sets</th>
    //             <th scope="col">Reps</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <th scope="row">
    //               {workout[0].routine[0].exercises[0].exerciseName}
    //             </th>
    //             <td>{workout[0].routine[0].exercises[0].exerciseType}</td>
    //             <td>{workout[0].routine[0].exercises[0].sets}</td>
    //             <td>{workout[0].routine[0].exercises[0].reps}</td>
    //           </tr>
    //           <tr>
    //             <th scope="row">{workout[0].routine[0].exercises[1].exerciseName}</th>
    //             <td>{workout[0].routine[0].exercises[1].exerciseType}</td>
    //             <td>{workout[0].routine[0].exercises[1].sets}</td>
    //             <td>{workout[0].routine[0].exercises[1].reps}</td>
    //           </tr>
    //           <tr>
    //             <th scope="row">{workout[0].routine[0].exercises[2].exerciseName}</th>
    //             <td>{workout[0].routine[0].exercises[2].exerciseType}</td>
    //             <td>{workout[0].routine[0].exercises[2].sets}</td>
    //             <td>{workout[0].routine[0].exercises[2].reps}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   ))}
    // </div>
  );
}

export default WorkoutDetails;
