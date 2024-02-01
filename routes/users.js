var express = require('express');
var router = express.Router();
var userModel = require('../models/user')

 

router.get('/', async function(req, res, next) {

    const user = await userModel.find();

    res.status(200).json(user);
  
  });
  
  router.get('/:details', async function(req, res, next) {
  
    const details = req.params.details
  
    const user = await userModel.findById(details);
  
    res.status(200).json(user);
  
  });
  
  
  router.post('/', async function(req, res, next) {
  
    
    const user = new userModel(req.body)
    await user.save();
  
    res.status(200).json(user);
  
  });
  
  router.put('/:details', async function(req, res, next) {
  
    const details = req.params.details
    
    const user = await userModel.findByIdAndUpdate(details)
  
  
    res.status(200).json(user);
  
  });
  
  router.delete('/:details', function(req, res, next) {
  
    const details = req.params.details
    
    const user = userModel.findByIdAndDelete(details)
  
    res.status(200).json(user);
  
  });
  

module.exports = router;
