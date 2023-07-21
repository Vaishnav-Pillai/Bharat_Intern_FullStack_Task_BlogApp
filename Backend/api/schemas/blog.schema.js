const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    "id": {type: mongoose.ObjectId, ref: 'User', required: true},
    "title": {type: String, required: true},
    "desc": {type: String, required: true},
    "category": {type: String, required: true},
    "cover": {type: String, required: true},
    "date": {type: String, required: true},
});

module.exports = {blogSchema}