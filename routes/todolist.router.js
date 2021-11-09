const express = require('express');
const TodolistService = require('../services/todolist.service');

const router = express.Router();
const service = new TodolistService;


router.get("/", async(req, res) =>{
    const todolist = await service.find();
    res.json(todolist);
});


module.exports = router;