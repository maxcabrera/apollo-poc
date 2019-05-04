const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const animals = [{ image: 'image1.jpg'}, { image: 'image2.jpg'}, { image: 'image3.jpg'}];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  enum AnimalType {
    DOG
    CAT
  }
  
  type Animal {
    image: String
    type: AnimalType
  }

  type Cat {
    image: String
  }
  
  type Dog {
    image: String
  }

  type Query {
    """
    The animals query is used to retrieve 2 photos of animals at the same time,
    the results could have photos of dogs, cats or both
    """
    cats: [Cat]
    dogs: [Dog]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    cats: () => animals,
    dogs: () => animals
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});