const db = require('./connection');
const { User, WorkoutQuestions, MyProgressDetails, Settings } = require('../models');
const {Schema, Types} = require("mongoose");
const exerciseRoutine = require("./routine");
const Workouts = require('../models/Workouts');


db.once('open', async () => {
  await WorkoutQuestions.deleteMany();
  const workoutQuestions = await WorkoutQuestions.insertMany([
    {
      question: "What is your age?", fieldType: "range", validation: null, 
       
      maxValue:"100", minValue: "15", stepValue: "1", fieldName: "age"
    },
    {
      question: "What is your height?", fieldType: "select", validation: null, optionValues: [
        "<5'0\"",
        "5'1\"",
        "5'2\"",
        "5'3\"",
        "5'4\"",
        "5'5\"",
        "5'6\"",
        "5'7\"",
        "5'8\"",
        "5'9\"",
        "5'10\"",
        "5'11\"",
        "6'0\"",
        "6'1\"",
        "6'2\"",
        "6'3\"",
        "6'4\"",
        "6'5\"",
        "6'6\"",
        "6'7\"",
        "6'8\"",
        "6'9\"",
        "6'10\"",
        "6'11\"",
        ">7'0\"",
      ], fieldName: "height"
    },
    {
      question: "What is your weight?", fieldType: "range", minValue: "90" , maxValue: "300", stepValue: "5",validation: null, optionValues: null, fieldName: "weight"
    },
    {
      question: "What is your gender at birth?", fieldType: "select", validation: null, optionValues: [
        "male",
        "female",
      ], fieldName: "gender"
    },
    {
      question: "How many times per week will you train?", fieldType: "range", validation: null, optionValues: null, fieldName: "exerciseFrequency", minValue:"1", maxValue:"14", stepValue: "1"
    },
    {
      question: "What equipment do you have access to?", fieldType: "select", validation: null, optionValues: [
        "weights",
        "body weight",
        "gym",
        "bicycle",
        "pull up bar",
      ], fieldName: "equipment"
    },
    {
      question: "What is your end goal?", fieldType: "select", validation: null, optionValues: [
        "increase mass",
        "lose weight",
        "gain definition",
        "improve circulation",
      ], fieldName: "fitnessGoal"
    }

  ]);
  console.log('workout questions seeded');
/*
  await MyProgressDetails.deleteMany();
  const progress = await MyProgressDetails.insertMany([{
    workoutId: Types.ObjectId('641b1e63eca559f0afe072ff'),
    exercises: [{
      exerciseID: Types.ObjectId('641b1f5ceca559f0afe07303'),
      sets: [{
        setId: 1,
        reps: 20
      },
      {
        setId: 2,
        reps: 16
      }]
    },
    {
      exerciseID: Types.ObjectId('641b2107eca559f0afe07307'),
      sets: [{
        setId: 1,
        reps: 6
      },
      {
        setId: 2,
        reps: 4
      }]
    }]
  }])
  console.log('my progress seeded');


  await Workouts.deleteMany();
  const workouts = await Workouts.insertMany({
    workoutName: 'Marios GPT',
    routine: exerciseRoutine});
  console.log('my workouts seeded');

  await Settings.deleteMany();
  const settings = await Settings.insertMany([
    {key:"OpenAPI", value:"TEST!@#"},
    {key:"GoogleAPI", value:"TEST123"}]
    )

  
  await User.deleteMany();

  let user = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    
  });

  workouts.forEach(async (workout) => {
    await User.updateOne({_id: user._id},
      {$addToSet: {workouts: { _id: workout._id }}},
      {new: true})
  });
  

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');
*/
  process.exit();
});
