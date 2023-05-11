const { Book, User } = require('../models');
const {AuthenticationError} = require("apollo-server-express");
const {signToken} = require("../utils/auth")

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user){
            return User.findOne({_id: context.user._id}).select("-__v -password");
        } 
            throw new AuthenticationError 
      },

    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return {token, user};
      },
      login: async (parent, {email, password}) => {
       const user = await User.findOne({email});
       const correctPassword = await user.isCorrectPassword(password);
        const token = signToken(user);
        return{token, user};
    },
    // Add mutations for save and remove boook
      },
  };
  
  module.exports = resolvers;
  