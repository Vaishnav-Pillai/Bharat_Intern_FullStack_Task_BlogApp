var express = require('express');
var router = express.Router();
const userController = require('../controller/users.controller.js');
const blogController = require('../controller/blogs.controller.js');
var upload = require('../Utils/upload.js');

//HTTP Verbs : Post - Create, Get - Read, Put - Update, Delete

router.post('/users',userController.create);

router.post('/blogs', upload.single('cover'), blogController.create);

router.get('/users/:email',userController.readOne);

router.get('/blogs/:id',blogController.readOne);

router.get('/blogs',blogController.readAll);

router.delete('/blogs/:id',blogController.deleteOne);

// router.put('/providers/:id',mainController.update);

// router.delete('/providers',mainController.deleteAll);

module.exports = router;