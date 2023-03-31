const db = require('./connection');
const { User, WorkoutQuestions, MyProgressDetails, Settings } = require('../models');
const {Schema, Types} = require("mongoose");
const exerciseRoutine = require("./routine");
const Workouts = require('../models/Workouts');


db.once('open', async () => {
  await WorkoutQuestions.deleteMany();
  const workoutQuestions = await WorkoutQuestions.insertMany([
    {
      question: "What is your age?", answerType: "select", validation: null, answers: [
        { answer: "15" },
        { answer: "16" },
        { answer: "17" },
        { answer: "18" },
        { answer: "19" },
        { answer: "20" },
        { answer: "21" },
        { answer: "22" },
        { answer: "23" },
        { answer: "24" },
        { answer: "25" },
        { answer: "26" },
        { answer: "27" },
        { answer: "28" },
        { answer: "29" },
        { answer: "30" },
        { answer: "31" },
        { answer: "32" },
        { answer: "33" },
        { answer: "34" },
        { answer: "35" },
        { answer: "36" },
        { answer: "37" },
        { answer: "38" },
        { answer: "39" },
        { answer: "40" },
        { answer: "41" },
        { answer: "42" },
        { answer: "43" },
        { answer: "44" },
        { answer: "45" },
        { answer: "46" },
        { answer: "47" },
        { answer: "48" },
        { answer: "49" },
        { answer: "50" },
        { answer: "51" },
        { answer: "52" },
        { answer: "53" },
        { answer: "54" },
        { answer: "55" },
        { answer: "56" },
        { answer: "57" },
        { answer: "58" },
        { answer: "59" },
        { answer: "60" },
        { answer: "61" },
        { answer: "62" },
        { answer: "63" },
        { answer: "64" },
        { answer: "65" },
        { answer: "66" },
        { answer: "67" },
        { answer: "68" },
        { answer: "69" },
        { answer: "70" },
        { answer: "71" },
        { answer: "72" },
        { answer: "73" },
        { answer: "74" },
        { answer: "75" },
        { answer: "76" },
        { answer: "77" },
        { answer: "78" },
        { answer: "79" },
        { answer: "80" },
        { answer: "81" },
        { answer: "82" },
        { answer: "83" },
        { answer: "84" },
        { answer: "85" },
        { answer: "86" },
        { answer: "87" },
        { answer: "88" }
      ]
    },
    {
      question: "What is your height?", answerType: "select", validation: null, answers: [
        { answer: "<5'0\"" },
        { answer: "5'1\"" },
        { answer: "5'2\"" },
        { answer: "5'3\"" },
        { answer: "5'4\"" },
        { answer: "5'5\"" },
        { answer: "5'6\"" },
        { answer: "5'7\"" },
        { answer: "5'8\"" },
        { answer: "5'9\"" },
        { answer: "5'10\"" },
        { answer: "5'11\"" },
        { answer: "6'0\"" },
        { answer: "6'1\"" },
        { answer: "6'2\"" },
        { answer: "6'3\"" },
        { answer: "6'4\"" },
        { answer: "6'5\"" },
        { answer: "6'6\"" },
        { answer: "6'7\"" },
        { answer: "6'8\"" },
        { answer: "6'9\"" },
        { answer: "6'10\"" },
        { answer: "6'11\"" },
        { answer: ">7'0\"" },
      ]
    },
    {
      question: "What is your weight?", answerType: "select", validation: null, answers: [
        { answer: "< 90 lbs" },
        { answer: "91 ~ 100 lbs" },
        { answer: "101 ~ 110 lbs" },
        { answer: "111 ~ 120 lbs" },
        { answer: "121 ~ 130 lbs" },
        { answer: "131 ~ 140 lbs" },
        { answer: "141 ~ 150 lbs" },
        { answer: "151 ~ 160 lbs" },
        { answer: "171 ~ 180 lbs" },
        { answer: "181 ~ 190 lbs" },
        { answer: "191 ~ 200 lbs" },
        { answer: "201 ~ 210 lbs" },
        { answer: "211 ~ 220 lbs" },
        { answer: "221 ~ 230 lbs" },
        { answer: "231 ~ 240 lbs" },
        { answer: "241 ~ 250 lbs" },
        { answer: "251 ~ 260 lbs" },
        { answer: "261 ~ 270 lbs" },
        { answer: "271 ~ 280 lbs" },
        { answer: "281 ~ 290 lbs" },
        { answer: "291 ~ 300 lbs" },
        { answer: "> 300 lbs" },
      ]
    },
    {
      question: "What is your gender at birth?", answerType: "select", validation: null, answers: [
        { answer: "male" },
        { answer: "female" },
      ]
    },
    {
      question: "How many times per week will you train?", answerType: "select", validation: null, answers: [
        { answer: "1" },
        { answer: "2" },
        { answer: "3" },
        { answer: "4" },
        { answer: "5" },
        { answer: "6" },
        { answer: "7" },
        { answer: "8" },
        { answer: "9" },
        { answer: "10" },
        { answer: "11" },
        { answer: "12" },
        { answer: "13" },
        { answer: "14" },
      ]
    },
    {
      question: "What equipment do you have access to?", answerType: "multiselect", validation: null, answers: [
        { answer: "weights" },
        { answer: "body weight" },
        { answer: "gym" },
        { answer: "bicycle" },
        { answer: "pull up bar" },
      ]
    },
    {
      question: "What is your end goal?", answerType: "multiselect", validation: null, answers: [
        { answer: "increase mass" },
        { answer: "lose weight" },
        { answer: "gain definition" },
        { answer: "improve circulation" },
      ]
    }

  ]);
  console.log('workout questions seeded');

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

  process.exit();
});
