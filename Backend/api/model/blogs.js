const mongoose = require('mongoose');
const { blogSchema } = require('../schemas/blog.schema.js');

//Create User model

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Blog }