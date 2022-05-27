const { AuthenticationError } = require('apollo-server-express');
const { User, Experience, Restaurant, Drink, Movie } = require('../models');
const { signToken } = require('../utils/auth');
const { DateTimeResolver } = require('graphql-scalars');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('experiences');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('experiences');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('experiences');
    },
    // experiences: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Experience.find(params).sort({ createdAt: -1 });
    // }
    experience: async () => {
      return Experience.find();
    },
    drink: async () => {
      return Drink.find();
    },
    dinner: async () => {
      return Restaurant.find();
    },
    movie: async() => {
      return Movie.find();
    },
    profile: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('experiences');

        return userData;
      }

      // throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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

    userUpdate: async (parent, args, context) => {
      if (context.user) {
        console.log(args)
        //return await User.findByIdAndUpdate(context.user._id, args.input, { new: true });
        const updatedUser = await User.findByIdAndUpdate(context.user._id, args.input, { new: true }).exec();
        return updatedUser
      }

      throw new AuthenticationError('Not logged in');
    },


    addExperience: async (parent, args, context) => {
      if (context.user) {
        const experience = await Experience.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { experiences: experience._id } },
          { new: true }
        );

        return experience;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // saveMovie: async (parent, args, context) => {
    //   if (context.user) {
    //     const movie = await Movie.create({ ...args, username: context.user.username });

    //     await Experience.create(
    //       { _id: context.user._id },
    //       { $push: { movies: movie._id } },
    //       { new: true }
    //     );

    //     return movie;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    saveMovie: async (parent, args, context) => {
      if (context.user) {
        const movie = await Movie.create({ ...args, username: context.user.username });
        //return await User.findByIdAndUpdate(context.user._id, args.input, { new: true });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { movies: movie._id } },
          { new: true }
        );

        return movie;
      }

      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;



