const express = require('express');
const router = express.Router();
const Model = require('../models/recipeModel');

router.post('/add',(req,res) =>{
    console.log(req.body);
    new Model (req.body).save()
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);

        
    });
    // res.send('Response from user add route');
});
router.post('/email',(req,res) =>{
    res.send('response from user delete route')
});
router.get('/getall',(req,res) =>{
    Model.find({})
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    res.status(500).json(err);
    
   });

});
router.get('/getbyemail/:email',(req,res) =>{
    Model.findOne({email : req.params.email})
    .then((result) => {
    res.json(result);

        
    }).catch((err) => {
        res.status(500).json(err);
        
    });
});

router.get('/getbyid/:id',(req,res) =>{
    Model.findById(req.params.id)
    .then((result) => {
    res.json(result);

        
    }).catch((err) => {
        res.status(500).json(err);
        
    });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});
router.post('/authenticate',(req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            res.json(result);

        }else{
            res.status(401).json({message : 'Invalid credentials'});
        }
    }).catch((err) => {
        res.status(500).json(err);
        
    });


});
module.exports = router;