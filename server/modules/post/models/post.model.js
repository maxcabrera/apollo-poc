// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const { Schema, model } = require('mongoose');

// #2 Instantiate a schema using mongoose Schema
const postSchema = new Schema({
    title: String,
    content: String,
});

// #3 Create a model with mongoose model() method
// The model name must be singular and lowercase letters: 'post'.
// Mongoose, however, will create the posts collection (note the plural form)
// in the apollo-app database.
const Post = model('post', postSchema);

module.exports = Post;