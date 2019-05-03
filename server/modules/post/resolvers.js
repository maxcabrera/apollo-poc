// Model from moongose
const Post = require('./models/post.model');

const resolvers = {
    Query: {
        posts: () => Post.find({}),
    },
    Mutation: {
        addPost: (parent, post) => {
            const newPost = new Post({ title: post.title, content: post.content })
            newPost.save();
        }
    }
};

module.exports = resolvers;


