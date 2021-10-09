const db = require('./database');

db.schema.hasTable("user_post").then(function(exists){
    if(!exists){
        return db.schema.createTable("user_post",function(table){
            table.increments('userId').primary();
            table.string('ImgUrl');
            table.string('date');
            table.string('captionForImg')

        })
    }
}).then((data)=>{
    console.log("user_post table has created")
}).catch((err)=>{
        console.log("error")
})
