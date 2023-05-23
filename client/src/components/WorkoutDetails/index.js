import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchGoogleImages } from "../../utils/API";
import { ExerciseImage } from "../ExerciseImage";
import './style.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";

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
    <Container>
      <Col>
        {workoutDays.map((day) => (
          <Card key={day._id} className="shadow-lg mb-5 bg-white rounded">
            <Card.Header className="text-center">{day.day}</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {day.exercises.map((exercise) => (
                  <ListGroup.Item key={exercise._id} onClick={handleImageSearch} className="imageLink">
                    <strong>{exercise.exerciseName}</strong>
                    <br />
                    Category: {exercise.exerciseType}
                    <br />
                    Sets: {exercise.sets}
                    <br />
                    Reps: {exercise.reps}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </Col>
      {imageLink !== '' && <ExerciseImage imageLink={imageLink} exerciseName={exerciseName} />}
    </Container>
  );
}

export default WorkoutDetails;
