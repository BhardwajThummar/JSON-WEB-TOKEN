const routes = require('express').Router();
const verify = require('./verifyToken');

routes.get('/',verify,(req, res) =>{
    res.send(req.user);
    
});

module.exports = routes;