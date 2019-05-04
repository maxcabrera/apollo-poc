const { Dog } = require('./Dog');

const resolvers = {
  Query: {
    dogs: () => Dog.all(),
  }
}

module.exports = {
  resolvers,
}