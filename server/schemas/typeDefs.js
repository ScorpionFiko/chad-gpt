const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

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
    sets: Int
    reps: Int
    secondsRest: Int
    minutesDuration: Float
    intensity: String
  }

  type WorkoutRoutine {
    _id: ID
    day: String
    exercises: [WorkoutExercise]
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

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    workoutQuestions: [WorkoutQuestions]
    myProgressDetails: [MyProgressDetails]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
