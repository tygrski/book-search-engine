// import models
const { User, Book } = require("../models");
// import JWS token
const { signToken } = require("../utils/auth");

// const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }

      throw new AuthenticationError("Not logged in");
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const savedBook = await Book.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookId } },
          { new: true }
        );
        return savedBook;
      }
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const removeBook = await Book.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: bookId } }
        );
      }
      return removeBook;
    },
  },
};

module.export = resolvers;
