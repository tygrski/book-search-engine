const { gql } = require("apollo-server-express");

const typeDefs = gql`
 type Query {
    me: User
 }

 input BookInput {
     title: String
 }

 type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook: (bookId: book.id!): User
 }

 type User {
     _id: ID
     username: String
     email: String
     bookCount: Int
     savedBooks:[Books]
}

type Book {
    bookId: book.id
    authors: [authors]
    description: String     
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;
