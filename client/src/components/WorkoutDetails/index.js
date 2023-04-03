import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchGoogleImages } from "../../utils/API";
import { ExerciseImage } from "../ExerciseImage";
import './style.css';

function WorkoutDetails(props) {
  const { currentUser } = useSelector((state) => state);
  // const [workouts] = useState([{ ...currentUser.workouts }]);

  // const myWorkouts = Object.values(workouts[0]);

  const selectedWorkoutIndex = currentUser.workouts.findIndex((workout)=> {return workout.workoutName === props.wName});

  // const thisWorkout = Object.values(selectedWorkout[0]);
  // const workout = thisWorkout.map((workout) => {
  //   return workout;
  // });

  const workoutDays = currentUser.workouts[selectedWorkoutIndex].routine;

  // const exerciseRows = workoutDays.map((index) => {
  //   return index.exercises;
  // });

  // const exercise = exerciseRows.map((exercise, index) => {
  //   return exercise;
  // });
  const [imageLink, setImageLink] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const handleImageSearch = async (event) => {
    event.preventDefault();
    setExerciseName(event.target.id);
    const image = await searchGoogleImages(event.target.id);
    setImageLink(image.data[0].link);
    // document.getElementById('image').src=image.data[0].link
  }

  return (
    <div className="container">
      {workoutDays.map((index) => (
        <div className="shadow-lg p-3 mb-5 bg-white rounded" key={index._id}>
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
                <tr key={category._id} >
                  <th id={category.exerciseName}  onClick={handleImageSearch} scope="row" className="imageLink">
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
      {(imageLink !== '') ? <ExerciseImage imageLink={imageLink} exerciseName={exerciseName} /> : ''}
    </div>
  );
}

export default WorkoutDetails;
