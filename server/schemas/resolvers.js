const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, WorkoutQuestions, MyProgressDetails, Workouts, Settings } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate("workouts");
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    workoutQuestions: async () => {
      return await WorkoutQuestions.find();
    },
    settings: async () => {
      return await Settings.find();
    },
    setting: async (parent, { key }, context) => {
      if (context.user) {
        return await Settings.findOne({ key: key });
      }
      throw new AuthenticationError('Not logged in');

    },
    myProgressDetails: async () => {
      return await MyProgressDetails.find().populate('exercises');

    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate('workouts');

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveWorkout: async (parent, { workoutName, routine }, context) => {
      if (context.user) {
        const workout = await Workouts.create({ workoutName, routine });
        const test = await User.findByIdAndUpdate(context.user._id, { $addToSet: { workouts: { _id: workout._id } } }, { new: true }).populate('workouts');

        return test;
      }
      throw new AuthenticationError('Not logged in');
    },

  }
};

module.exports = resolvers;
