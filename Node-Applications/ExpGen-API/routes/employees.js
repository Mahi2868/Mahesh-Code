var express = require('express');
var router = express.Router();
const Employee = require('../models/Employee');

//post data of EMployee
router.post('/', async (req, res) =>{
  const empDetail = new Employee({
      id : req.body.id,
      name : req.body.name,
      age : req.body.age,
      gender : req.body.gender,
      designation : req.body.designation,
      salory : req.body.salory,
      address : req.body.address

  })
  try{
      const savedPost = await empDetail.save();
      res.json(savedPost);
  } catch (err){
      res.json({message : err});
  }
})



//get data of all Employees
router.get('/', async (req, res) =>{
  try{
      const empDetails = await Employee.find();
      res.json(empDetails);
  } catch(err){
      res.json({message: err});
  }
});

//get specific data of EMployee
router.get('/:id', async (req, res) =>{
  try{
      const empDetail = await Employee.findById({_id : req.params.id});
      res.json(empDetail);
  } catch (err){
      res.json({message: err});
  }
});

//delete data of Employee
router.delete('/:id', async (req, res) =>{
  try{
      const removedPost = await Employee.deleteOne({_id: req.params.id});
      res.json(removedPost);
  } catch (err){
      res.json({message : err});
  }
});

//update a specific field of Employee
router.patch('/:id', async (req, res) =>{
  try{
      const updatedPost = await Employee.updateOne({_id: req.params.id}, 
          {$set: {designation: req.body.designation, salory: req.body.salory}}
          );
      res.json(updatedPost);
  } catch (err){
      res.json({message : err});
  }

});

//update student details
router.put('/:postId', async (req, res) =>{
  try{
      // const updatedPost = await Employeet.updateOne({_id: req.params.postId}, 
      //     req.body
      //     );
      // res.json(updatedPost);
      const updatedPost = await Employee.updateOne({id: req.params.postId}, 
          {$set: {name: req.body.name, age: req.body.age}}
          );
      res.json(updatedPost);
  } catch (err){
      res.json({message : err});
  }

});


module.exports = router;
