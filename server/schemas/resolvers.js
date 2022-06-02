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
    //all Users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('experiences')
        .populate('friends')
    },
    //User by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('experiences')
        .populate('friends')
    },
    // experiences: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Experience.find(params).sort({ createdAt: -1 });
    // }
    profile: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('experiences');

        return userData;
      }

      // throw new AuthenticationError('Not logged in');
    },

    // Experiences by username 
    experiences: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Experience.find(params).sort({ createdAt: -1 });
    },
    experience: async(parent, { _id }) => {
      return Experience.findOne({ _id })
    }
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


    // addExperience: async (parent, args, context) => {
    //   if (context.user) {
    //     const experience = await Experience.create({ ...args, username: context.user.username });

    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { experiences: newExperience } },
    //       { new: true }
    //     )
    //     return experience;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
    addExperience: async (parent, args, context) => {
      //console.log(context);
      if (context.user) {
        const experience = new Experience({ ...args });

        await User.findByIdAndUpdate(
          {_id: context.user._id }, 
          { $addToSet: { experiences: experience } }
          ).populate('experiences')
          
        console.log(experience)
        return experience;
      }

      throw new AuthenticationError('Not logged in');
    },

    saveMovie: async (parent, args, {movieId, _id}, context) => {
      if (context.user) {
      
        const addedMovie = await Movie.create(args.movieId)
    
        console.log(addedMovie)
    
        const experience = await Experience.findById(args._id);
        
        const updatedExperience = await Experience.findOneAndUpdate(
          { _id: experience },
          { $push: { movies: addedMovie} },
          { new: true }
          );
          console.log(updatedExperience + "this is updated Experience")
    
        return updatedExperience;
      }
      throw new AuthenticationError('No Experience or movie with that id!');
    },

    saveRestaurant: async (parent, {restaurantId, _id}, context) => {
      if (context.user) {
    
        console.log(args)
    
        const addedRestaurant = await Restaurant.findById(args.restaurantId)
    
        console.log(addedRestaurant)
    
        const experience = await Experience.findById(args._id);
        
        const updatedExperience = await Experience.findOneAndUpdate(
          { _id: experience },
          { $push: { restaurant: addedRestaurant } },
          { new: true }
          );
          console.log(updatedExperience + "this is updated Experience")
    
      
        return updatedExperience;
      }
      throw new AuthenticationError('No workout or exercise with that id!');
    },
    saveDrink: async (parent, {drinkId, _id}, context) => {
      if (context.user) {
    
        console.log(args)
    
        const addedDrink = await Drink.findById(args.drinkId)
    
        console.log(addedDrink)
    
        const experience = await Experience.findById(args._id);
        
        const updatedExperience = await Experience.findOneAndUpdate(
          { _id: experience },
          { $push: { drink: addedDrink } },
          { new: true }
          );
          console.log(updatedExperience + "this is updated Experience")
      
        return updatedExperience;
      }
      throw new AuthenticationError('No workout or exercise with that id!');
    },

     
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    
  }
};

module.exports = resolvers;






