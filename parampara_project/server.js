const express = require('express')
const app = express();
app.use(express.json())
const port = 7000;

app.use('/', require('./router/user_registration'));

app.use('/',require('./router/user_post'));

app.use('/',require('./router/QuestionAnswer'))

app.listen(port,()=>{
    console.log(`server is working with port ${port}`)
});