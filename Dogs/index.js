const { data } = require("./data");
const { Dogs } = require("./Dogs");
const { resolvers } = require("./resolvers");
const { typeDef } = require("./typeDef");

module.exports = {
  data,
  Dogs,
  resolvers,
  typeDef,
};