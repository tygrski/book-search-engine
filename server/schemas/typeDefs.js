const { gql } = require("apollo-server-express");

const typeDefs = gql`
 type Query {
    me: User
    users: [User]
    user(username: String!)
 }

 input BookInput {
    bookId: ID
    authors: [String]
    description: String     
    title: String
    image: String
    link: String
 }

 type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
 }

 type User {
     _id: ID
     username: String
     email: String
     bookCount: Int
     savedBooks:[Books]
}

type Book {
    bookId: ID
    authors: [Authors]
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
