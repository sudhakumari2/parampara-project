const express = require('express');
const router = express.Router();
const getData = require('../model/user_registration');

router.get('/users-data', (req, res)=>{
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

router.post('/registration', (req,res)=>{
    getData.signUp(req.body)
    .then((result)=>{
        console.log(result)
        res.send({"statuscode":200,"message":"data inserted successfully"})
    })
    .catch((err)=>{
        console.log("error")
        res.send({"statucode":400})
    })
})


router.put('/profile-edit/:userID',(req,res)=>{
    getData.updateData(req.params.userID, req.body)
    .then((result)=>{
        console.log(result)
        res.send({"statuscode":200,"message":"data updated sucessfully"})
    }).catch((err)=>{
        console.log("error")
        res.send({"statuscode":400})
    })
})

router.delete('/delete-user-registration/:userID',(req, res)=>{
    getData.deleteData(req.params.userID)
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
