
const db = require('./database')

db.schema.hasTable("user_registration").then(function(exists){
    if(!exists){
        return db.schema.createTable("user_registration",function(table){
            table.increments('userID').primary();
            table.string('Name');
            table.string('Email');
            table.string('password');
        })
    }
}).then((data) => {
    console.log("user table has created")
}).catch((err) => {
    console.log("error")
})

