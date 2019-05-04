const { data } = require('./data');

class Dogs {
  static all() {
    return data.map(dog => {
      return { image: dog.url }
    });
  }
}

module.exports = {
  Dogs,
}