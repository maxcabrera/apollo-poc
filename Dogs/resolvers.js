const { Dogs } = require('./Dogs');

const resolvers = {
  Query: {
    dogs: () => Dogs.all(),
  }
}

module.exports = {
  resolvers,
}