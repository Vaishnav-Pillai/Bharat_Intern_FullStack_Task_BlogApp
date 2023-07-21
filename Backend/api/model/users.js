const mongoose = require('mongoose');
const { userSchema } = require('../schemas/user.schema.js');

//Create User model

const User = mongoose.model('User', userSchema);

module.exports = { User }