const { dogs } = require('./data');

class Dog {
  static all() {
    return dogs;
  }
}

module.exports = {
  Dog,
}