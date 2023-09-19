let Student = require("../Models/student.js");
const express = require("express");
const router = express.Router();

//ADD DATA

router.post("/add",(req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({

        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added!")
    }).catch((err)=>{
        console.log(err);
    })
})

//GET DATA

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

//UPDATE

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {name,age,gender} =req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{

        res.status(200).send({status:"User Updated", user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })
    
})

//DELETE

router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;
    
    const del = await Student.findByIdAndDelete(userId).then(()=>{

        res.status(200).send({status:"User Deleted", user:del});
    }).catch((err)=>{
        res.status(500).send({status:"Error with delete user", user:del})
    })
})
module.exports = router;