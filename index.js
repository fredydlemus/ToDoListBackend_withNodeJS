const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 6868;

app.use(express.json());

const whitelist = ['http://localhost:3005'];
const options ={
    origin: (origin, callback) =>{
        if(whitelist.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('no permited'));
        }
    }
};



app.use(cors(options));

routerApi(app);

app.listen(port, () =>{
    console.log('My port '+ port);
})