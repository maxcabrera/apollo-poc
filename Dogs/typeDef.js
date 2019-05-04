const { gql } = require('apollo-server');

const typeDef = gql`
  type Dog {
    image: String
  }
  
  extend type Query {
    dogs: [Dog]
  }
`;

module.exports = {
  typeDef,
}