import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from '../../utils/mutations';
import { OpenAIApi, Configuration } from "openai";

import { config } from "dotenv";
config(); // load .env file

const apiKey = process.env.REACT_APP_API_KEY;

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  })
);


// State to hold user input
function ExerciseRoutineGenerator() { 
  const [fitnessInfo, setFitnessInfo] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
    exerciseFrequency: "",
    equipment: "",
    fitnessGoal: "",
  });

  // State to hold the exercise routine
  const [exerciseRoutine, setExerciseRoutine] = useState([]);
  
  // Mutation to save the workout
  const [saveWorkout] = useMutation(SAVE_WORKOUT);
 
   // function to handle the change in the input fields
  const handleFitnessInfoChange = (event) => {
    setFitnessInfo({ ...fitnessInfo, [event.target.name]: event.target.value }); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      age,
      height,
      weight,
      gender,
      exerciseFrequency,
      equipment,
      fitnessGoal,
    } = fitnessInfo;

console.log(fitnessInfo);

    const aiPrompt = `
      ${age} years of age, ${height} in height, ${weight}lbs, ${gender}, able to exercise ${exerciseFrequency} times per week, access to ${equipment}, end goal is ${fitnessGoal} and 1 month to achieve goal

      build exercise routine given this prompt. respond ONLY in JSON. Do not include any notes. Use this as schema:

      {
        "exerciseRoutine": [
          {
            "day": "Monday",
            "exercises": [
              {
                "exerciseName": "",
                "exerciseType": "",
                "sets": "",
                "reps": "",
                "secondsRest": "",
                "minutesDuration": "",
                "intensity": "",
              },
            ],
          },
        ],
      }
    `;
    console.log(aiPrompt);

    async function callApi() {
      const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: aiPrompt }],
        max_tokens: 2000,
      });

      const response = res.data.choices[0].message.content;

      // Sanitize the response to remove unexpected tokens and fix JSON formatting issues
      const sanitizedResponse = response
        .replace(/,\s*]/g, "]")
        .replace(/,\s*}/g, "}");

      try {
        const parsedResponse = JSON.parse(sanitizedResponse);
        setExerciseRoutine(parsedResponse.exerciseRoutine);
        console.log("Exercise routine:", exerciseRoutine);

        // Save the workout if the parsed response is not empty
        if (parsedResponse.exerciseRoutine.length > 0) {
          try {
            await saveWorkout({
              variables: {
                workoutName: "Generated Exercise Routine",
                routine: parsedResponse.exerciseRoutine,
              },
            });
            console.log("Exercise routine saved successfully!");
          } catch (error) {
            console.error("Error saving exercise routine:", error);
          }
        }

      } catch (error) {
        console.error("Error parsing response:", error);
      }
    }

    await callApi();
  };



    // Conditionally save the workout if the exercise routine is not empty
    // if (exerciseRoutine.length > 0) {
    //   try {
    //     await saveWorkout({
    //       variables: {
    //         workoutName: "Generated Exercise Routine", // Change this
    //         routine: exerciseRoutine,
    //       },
    //     });
    //     console.log("Exercise routine saved successfully!");
    //   } catch (error) {
    //     console.error("Error saving exercise routine:", error);
    //   }
    // }

  

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "50%", margin: "50px auto" }}>
      <h2 className="text-center">Create Your Workout</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Age:
          <input
            className="form-control"
            type="number"
            name="age"
            value={fitnessInfo.age}
            onChange={handleFitnessInfoChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Height (feet and inches):
          <input
            className="form-control"
            type="text"
            name="height"
            value={fitnessInfo.height}
            onChange={handleFitnessInfoChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Weight (pounds):
          <input
            className="form-control"
            type="number"
            name="weight"
            value={fitnessInfo.weight}
            onChange={handleFitnessInfoChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Gender:
          <select
            className="form-control"
            name="gender"
            value={fitnessInfo.gender}
            onChange={handleFitnessInfoChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Exercise frequency (days per week):
          <input
            className="form-control"
            type="number"
            name="exerciseFrequency"
            value={fitnessInfo.exerciseFrequency}
            onChange={handleFitnessInfoChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Equipment:
          <select
            className="form-control"
            name="equipment"
            value={fitnessInfo.equipment}
            onChange={handleFitnessInfoChange}
          >
            <option value="Loose weights">Loose weights</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Resistance bands">Resistance bands</option>
            <option value="Bodyweight">Bodyweight</option>
            <option value="A full gym">A full gym</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Fitness goal:
          <select
            className="form-control"
            name="fitnessGoal"
            value={fitnessInfo.fitnessGoal}
            onChange={handleFitnessInfoChange}
          >
            <option value="Lose weight">Lose weight</option>
            <option value="Build muscle">Build muscle</option>
            <option value="Improve cardiovascular health">
              Improve cardiovascular health
              </option>
          <option value="Increase flexibility">Increase flexibility</option>
          <option value="Run a marathon">Run a marathon</option>
        </select>
      </label>
    </div>
    <div className="flex-row flex-end">
      <button type="submit" className="btn btn-primary">Generate Exercise Routine</button>
    </div>
  </form>
</div>

  

    )
  
}

export default ExerciseRoutineGenerator;
