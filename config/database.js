const mongoose = require("mongoose");
require('dotenv').config();
const url = process.env.DATABASE_URL;

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{ console.log("database connected succesfully");
    
    })
    .catch((error) =>{
        console.log("issue in db connection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;