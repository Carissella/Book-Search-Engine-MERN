const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Books]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    title: String
    link: String
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
`;   


module.exports = typeDefs;