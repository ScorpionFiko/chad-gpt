import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import WorkoutDetails from "../WorkoutDetails";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

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

      <Row>
        <Col style={{ maxWidth: "150px" }}>
          <Card>

            
            <Stack gap={1} className="mx-auto">
              <h3>Your Workouts</h3>
              {myWorkouts.map((workout, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(workout.workoutName)}
                  className="btn btn-dark btn-sm btn-block"
                  block
                >
                  {workout.workoutName}
                </Button>
              ))}
                          </Stack>
            

          </Card>
        </Col>
        <Col>
          <Card >
            <Stack>
            
              {selectedWorkout ? (
                <WorkoutDetails wName={selectedWorkout} />
              ) : (
                <h4>Select a workout to view details</h4>
              )}
            </Stack>
          </Card>
        </Col>
      
        </Row>

  );
}

export default Workouts;
