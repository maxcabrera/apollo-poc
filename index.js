const { ApolloServer, gql } = require('apollo-server');
const Dogs = require('./Dogs');

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, Dogs.typeDef],
  resolvers: [Dogs.resolvers]
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url} `);
});