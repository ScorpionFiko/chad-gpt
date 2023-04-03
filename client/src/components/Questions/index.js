import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from '../../utils/mutations';
import "./style.css"
import Loading from "../Loading/index";
import { UPDATE_USER } from "../../utils/actions";
import { useDispatch } from 'react-redux'
import { getOpenAIResponse } from '../../utils/API'
import image from "./form-image.jpg"
import { idbPromise } from "../../utils/helpers";

// State to hold user input
function ExerciseRoutineGenerator() {
  const dispatch = useDispatch();
  const [fitnessInfo, setFitnessInfo] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
    exerciseFrequency: "",
    equipment: "",
    fitnessGoal: "",
  });

  // // State to hold the exercise routine
  // const [exerciseRoutine, setExerciseRoutine] = useState([]);

  // State to hold the loading state
  const [isLoading, setIsLoading] = useState(false);

  // Mutation to save the workout
  const [saveWorkout] = useMutation(SAVE_WORKOUT);

  // History object to redirect to the dashboard
  const history = useHistory();


  // function to handle the change in the input fields
  const handleFitnessInfoChange = (event) => {
    setFitnessInfo({ ...fitnessInfo, [event.target.name]: event.target.value });
  };

  // function to handle the submit 
  const handleSubmit = async (event) => {
    event.preventDefault();
    // set loading to true to show the loading page while info is retrieved
    setIsLoading(true);
    // 
    try {
      const response = await getOpenAIResponse(fitnessInfo);
      const { exerciseRoutine } = JSON.parse(JSON.stringify(JSON.parse(response.data.replace(/,\s*]/g, "]").replace(/,\s*}/g, "}")), (k, v) => v && typeof v === 'object' ? v : '' + v))
      if (exerciseRoutine.length > 0) {
        const { data } = await saveWorkout({
          variables: {
            workoutName: `${fitnessInfo.fitnessGoal}: ${new Date(Date.now()).toUTCString()}`,
            routine: exerciseRoutine,
          },
        });
        // update global state
        dispatch({
          type: UPDATE_USER,
          workouts: data.saveWorkout.workouts
        });
        // update local database
        idbPromise('user', 'put', data.saveWorkout);
      }

    } catch (error) {
      console.error("Error parsing response:", error);
    }
    setIsLoading(false);

    // Redirect to the dashboard after the API call is complete
    redirectToDashboard();

  };

  // Function to redirect to the dashboard
  const redirectToDashboard = () => {
    history.push("/");
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card border-0 col-sm-10">
                <div className="card-body ">
                  <div className="text-center mb-4">
                    <img src={image} alt="Exercise Routine Generator" className="img-fluid" />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label>
                        Age:
                        <input
                          className="form-control py-2 px-3"
                          type="number"
                          name="age"
                          value={fitnessInfo.age}
                          onChange={handleFitnessInfoChange}
                        />
                      </label>
                    </div>
                    <div className="form-group mb-3">
                      <label>
                        Height (feet and inches):
                        <input
                          className="form-control py-2 px-3"
                          type="text"
                          name="height"
                          value={fitnessInfo.height}
                          onChange={handleFitnessInfoChange}
                        />
                      </label>
                    </div>
                    <div className="form-group mb-3">
                      <label>
                        Weight (pounds):
                        <input
                          className="form-control py-2 px-3"
                          type="number"
                          name="weight"
                          value={fitnessInfo.weight}
                          onChange={handleFitnessInfoChange}
                        />
                      </label>
                    </div>
                    <div className="form-group mb-3">
                      <label>
                        Gender:
                        <select
                          className="form-control py-2 px-3"
                          name="gender"
                          value={fitnessInfo.gender}
                          onChange={handleFitnessInfoChange}
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </label>
                    </div>
                    <div className="form-group mb-3">
                      <label>
                        Exercise frequency (days per week):
                        <input
                          className="form-control py-2 px-3"
                          type="number"
                          name="exerciseFrequency"
                          value={fitnessInfo.exerciseFrequency}
                          onChange={handleFitnessInfoChange}
                        />
                      </label>
                    </div>
                    <div className="form-group mb-3">
                      <label>
                        Equipment:
                        <select
                          className="form-control py-2 px-3"
                          name="equipment"
                          value={fitnessInfo.equipment}
                          onChange={handleFitnessInfoChange}
                        >
                          <option value="">Select</option>
                          <option value="Loose weights">Loose weights</option>
                          <option value="Bicycle">Bicycle</option>
                          <option value="Resistance bands">Resistance bands</option>
                          <option value="Bodyweight">Bodyweight</option>
                          <option value="A full gym">A full gym</option>
                        </select>
                      </label>
                    </div>
                    <div className="form-group mb-4">
                      <label>
                        Fitness goal:
                        <select
                          className="form-control py-2 px-3"
                          name="fitnessGoal"
                          value={fitnessInfo.fitnessGoal}
                          onChange={handleFitnessInfoChange}
                        >
                          <option value="">Select</option>
                          <option value="Lose weight">Lose weight</option>
                          <option value="Build muscle">Build</option>
                          <option value="Improve cardiovascular health">
                            Improve cardiovascular health
                          </option>
                          <option value="Increase flexibility">Increase flexibility</option>
                          <option value="Run a marathon">Run a marathon</option>
                        </select>
                      </label>
                    </div>
                    <div className="d-grid gap-2 mb-3">
                      <button type="submit" className="btn btn-primary btn-lg">Generate Exercise Routine</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExerciseRoutineGenerator;






