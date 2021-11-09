const faker = require('faker');

class TodolistService{
    constructor(){
        this.todolist = [];
        this.generate();
    }
    generate(){
        const limit = 10;
        for(let i = 0; i < limit; i++){
            this.todolist.push({
                id: faker.datatype.uuid(),
                text: faker.address.city(),
                completed: faker.datatype.boolean(),
            });
        }
    }

    

    find(){
        return new Promise((resolve, reject) =>{
            resolve(this.todolist);
        });
    }
}

module.exports = TodolistService;