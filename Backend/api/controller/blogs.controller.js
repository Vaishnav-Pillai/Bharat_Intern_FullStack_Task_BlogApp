var Blog = require('../db/blogdb.js');
const { ObjectId } = require('mongodb');

function isEmptyList(obj){
    return(!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

function handleError(res,error){
    res.status(200);
    res.send(error);
}

//CRUD

//uri1: /api/blogs
//uri2: /api/blogs/id

module.exports.create = function(req,res){

    // var { firstname,lastname,uname,email,password } = req.body;
    const fileObj = {
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        cover: req.file.originalname,
        date: req.body.date
    };

    try{

        Blog.create(fileObj)
            .then( result => {
                res.status(201);
                res.send(result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.readAll = function(req,res){

    try{

        Blog.find()
            .then( result => {
                if(isEmptyList(result)){
                    res.status(200);
                    res.send("Empty");
                }
                res.status(200);
                // const data = JSON.parse(result);
                res.send(result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.readOne = function(req,res){

    try{
        // let id = ObjectId(req.params.id);

        Blog.find({'_id':(req.params.id)})
            .then( result => {
                if(isEmptyList(result)){
                    res.status(200);
                    res.send("Empty");
                }
                res.status(200);
                // const data = JSON.parse(result);
                res.send(result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.deleteOne = function(req,res){

    try{

        Blog.findOneAndDelete({'_id':(req.params.id)})
            .then( result => {
                if(isEmptyList(result)){
                    res.status(200);
                    res.send("Empty");
                }
                res.status(200);
                // const data = JSON.parse(result);
                res.send(result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

