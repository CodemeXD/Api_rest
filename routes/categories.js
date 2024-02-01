var express = require('express');
var router = express.Router();
var CategorieModel = require('../models/categorie')

 

router.get('/', async function(req, res, next) {

    const categorie = await CategorieModel.find();

    res.status(200).json(categorie);
  
  });
  
  router.get('/:details', async function(req, res, next) {
  
    const details = req.params.details
  
    const categorie = await CategorieModel.findById(details);
  
    res.status(200).json(categorie);
  
  });
  
  
  router.post('/', async function(req, res, next) {
  
    
    const categorie = new CategorieModel(req.body)
    await categorie.save();
  
    res.status(200).json(categorie);
  
  });
  
  router.put('/:details', async function(req, res, next) {
  
    const details = req.params.details
    
    const categorie = await CategorieModel.findByIdAndUpdate(details)
  
  
    res.status(200).json(categorie);
  
  });
  
  router.delete('/:details', function(req, res, next) {
  
    const details = req.params.details
    
    const categorie = CategorieModel.findByIdAndDelete(details)
  
    res.status(200).json(categorie);
  
  });
  

module.exports = router;