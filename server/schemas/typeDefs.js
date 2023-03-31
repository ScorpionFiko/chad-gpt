const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type MyProgressExercise {
    exerciseId: ID
    sets: [MyProgressSetsAndReps]
  }

  type MyProgressSetsAndReps {
    set: Int
    reps: Int
  }


  type MyProgressDetails {
    _id: ID
    date: String
    workoutId: ID
    exercises: [MyProgressExercise]
  }
    
  type WorkoutExercise {
    _id: ID
    exerciseName: String
    exerciseType: String
    sets: String
    reps: String
    secondsRest: String
    minutesDuration: String
    intensity: String
  }

  type WorkoutRoutine {
    _id: ID
    day: String
    exercises: [WorkoutExercise]
  }


  input InputWorkoutExercise {
    exerciseName: String
    exerciseType: String
    sets: String
    reps: String
    secondsRest: String
    minutesDuration: String
    intensity: String
  }

  input InputWorkoutRoutine {
    day: String
    exercises: [InputWorkoutExercise]
  }


  type Workouts {
    _id: ID
    workoutName: String
    dateCreated: String
    routine: [WorkoutRoutine]
  }


  type WorkoutAnswers {
    _id: ID
    answer: String
  }

  type WorkoutQuestions {
    _id: ID
    question: String,
    answerType: String,
    validation: String,
    answers: [WorkoutAnswers]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    rate: Float
    workouts: [Workouts]
  }

  type Auth {
    token: ID
    user: User
  }

  type Settings {
    key: String
    value: String
  }

  type Query {
    user: User
    workoutQuestions: [WorkoutQuestions]
    myProgressDetails: [MyProgressDetails]
    settings: [Settings]
    setting(key: String): Settings
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveWorkout(workoutName: String!, routine: [InputWorkoutRoutine]): User

  }
`;

module.exports = typeDefs;
