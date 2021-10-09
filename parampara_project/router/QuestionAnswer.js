const express = require('express');
const router = express.Router();
const getData = require('../model/QuestionAnswer');

router.get('/question-answer-data', (req, res)=>{
    getData.users_data()
    .then((result)=>{
        console.log(result)
        res.send(result);
    })
    .catch((err)=>{
        console.log("err")
        res.send(err)
    })
})

router.post('/question-answer-create-data', (req,res)=>{
    getData.post_data(req.body)
    .then((result)=>{
        console.log(result)
        res.send({"statuscode":200,"message":"data inserted successfully"})
    })
    .catch((err)=>{
        console.log("error")
        res.send({"statucode":400})
    })
})

router.put('/edit-question-answer/:questionId',(req,res)=>{
    getData.updateData(req.params.questionId, req.body)
    .then((result)=>{
        console.log(result)
        res.send({"statuscode":200,"message":"data updated sucessfully"})
    }).catch((err)=>{
        console.log("error")
        res.send({"statuscode":400})
    })
})

router.delete('/delete-question-answer/:questionId',(req, res)=>{
    getData.deleteData(req.params.questionId)
    .then((result)=>{
        console.log(result)
        res.send({"statuscode":200,"message":"userdata deleted successfully"})
    })
    .catch((err)=>{
        console.log("error")
        res.send({"statuscode":400})
    })
})


module.exports = router;
