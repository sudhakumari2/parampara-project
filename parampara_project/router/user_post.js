const express = require('express');
const router = express.Router();
const getData = require('../model/user_post');

router.get('/users-post-data', (req, res)=>{
    getData.users_post_data()
    .then((result)=>{
        console.log(result)
        res.send(result);
    })
    .catch((err)=>{
        console.log("err")
        res.send(err)
    })
})

router.post('/new-user-post', (req,res)=>{
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

router.put('/edit-user-post/:userId',(req,res)=>{
    getData.updateData(req.params.userId, req.body)
    .then((result)=>{
        console.log(result)
        res.send({"statuscode":200,"message":"data updated sucessfully"})
    }).catch((err)=>{
        console.log("error")
        res.send({"statuscode":400})
    })
})

router.delete('/delete-user-post/:userId',(req, res)=>{
    getData.deleteData(req.params.userId)
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
