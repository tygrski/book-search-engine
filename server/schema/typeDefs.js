const { gql } = require("apallo-server-express");

const typeDefs = gql`
 type Query {
    me(username: String!): [User]
 }

 input BookInput {
     title: String
 }

 type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook: (bookId: bookId!): User
 }

 type User {
     _id: ID
     username: String
     email: String
     bookCount: Int
     savedBooks:[Books]
}

type Book {
    bookId: bookId
    authors: []
    description: String     
    title: String
    image: ?
    link: ?
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;
