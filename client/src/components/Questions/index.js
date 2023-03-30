import React from "react";
import { useState } from "react";
import { useMutation } from '@apollo/client';
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
      console.log(response);
    
      try {
        const parsedResponse = JSON.parse(response);
        setExerciseRoutine(parsedResponse.exerciseRoutine);
      } catch (error) {
        console.error("Error parsing response:", error);
      }
    }
    
    await callApi();

  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={fitnessInfo.age}
              onChange={handleFitnessInfoChange}
            />
          </label>
          <label>
            Height (feet and inches):
            <input
              type="text"
              name="height"
              value={fitnessInfo.height}
              onChange={handleFitnessInfoChange}
            />
          </label>
          <label>
            Weight (pounds):
            <input
              type="number"
              name="weight"
              value={fitnessInfo.weight}
              onChange={handleFitnessInfoChange}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={fitnessInfo.gender}
              onChange={handleFitnessInfoChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Exercise frequency (days per week):
            <input
              type="number"
              name="exerciseFrequency"
              value={fitnessInfo.exerciseFrequency}
              onChange={handleFitnessInfoChange}
            />
          </label>
          <label>
            Equipment:
            <select
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
          <label>
            Fitness goal:
            <select
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
          <button type="submit">Generate Exercise Routine</button>
        </form>
      </div>

    )
  
}

export default ExerciseRoutineGenerator;
