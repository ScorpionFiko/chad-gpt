const db = require('./connection');
const { User, Product, Category, WorkoutQuestions, MyProgressDetails } = require('../models');
const {Schema, Types} = require("mongoose");
const exerciseRoutine = require("./routine");
const Workouts = require('../models/Workouts');
const WorkoutRoutines = require('../models/WorkoutRoutine');

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



  await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  let user = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
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
