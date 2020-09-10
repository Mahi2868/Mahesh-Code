const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

//post data of student
router.post('/', async (req, res) =>{
    const stdDetail = new Student({
        rollNo : req.body.rollNo,
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        cls : req.body.cls,
        medium : req.body.medium,
        marks : req.body.marks,
        address : req.body.address

    })
    try{
        const savedPost = await stdDetail.save();
        res.json(savedPost);
    } catch (err){
        res.json({message : err});
    }
})


//get data of all students
router.get('/', async (req, res) =>{
   try{
       const stdDetails = await Student.find();
       res.json(stdDetails);
   } catch(err){
       res.json({message: err});
   }
});


//get specific data of student
router.get('/:postId', async (req, res) =>{
    try{
        const stdDetail = await Student.findById(req.params.postId);
        res.json(stdDetail);
    } catch (err){
        res.json({message: err});
    }
});

//delete data of student
router.delete('/:postId', async (req, res) =>{
    try{
        const removedPost = await Student.deleteOne({_id: req.params.postId});
        res.json(removedPost);
    } catch (err){
        res.json({message : err});
    }
});



//update a specific field of student
router.patch('/:postId', async (req, res) =>{
    try{
        const updatedPost = await Student.updateOne({_id: req.params.postId}, 
            {$set: {name: req.body.name, age: req.body.age}}
            );
        res.json(updatedPost);
    } catch (err){
        res.json({message : err});
    }

});

//update student details
router.put('/:postId', async (req, res) =>{
    try{
        // const updatedPost = await Student.updateOne({_id: req.params.postId}, 
        //     req.body
        //     );
        // res.json(updatedPost);
        const updatedPost = await Student.updateOne({_id: req.params.postId}, 
            {$set: {name: req.body.name, age: req.body.age}}
            );
        res.json(updatedPost);
    } catch (err){
        res.json({message : err});
    }

});


module.exports = router;