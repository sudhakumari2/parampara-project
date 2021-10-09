const db = require('./database');

db.schema.hasTable("Question-answers ").then(function(exists){
    if(!exists){
        return db.schema.createTable("Question-answers",function(table){
            table.increments('questionId').primary();
            table.string('question');
            table.string('answer');

        })
    }
}).then((data)=>{
    console.log("Question-answer table has created")
}).catch((err)=>{
        console.log("error")
})
