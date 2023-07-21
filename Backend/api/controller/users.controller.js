var User = require('../db/userdb.js');
const { ObjectId } = require('mongodb');

function isEmptyList(obj){
    return(!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

function handleError(res,error){
    res.status(200);
    res.send(error);
}

//CRUD

//uri1: /api/users
//uri2: /api/users/email

module.exports.create = function(req,res){

    // var { firstname,lastname,uname,email,password } = req.body;
    const fileObj = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    try{

        User.create(fileObj)
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

module.exports.readOne = function(req,res){

    try{
        // let id = ObjectId(req.params.id);

        User.find({'email':(req.params.email)})
            .then( result => {
                if(isEmptyList(result)){
                    res.status(200);
                    res.send("Empty");
                }
                res.status(200);
                // const data = JSON.parse(result);
                res.send(result[0]);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}