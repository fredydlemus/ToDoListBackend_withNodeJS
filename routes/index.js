const express = require('express');
const todolistRouter = require('./todolist.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/todolist', todolistRouter);
}

module.exports = routerApi;