var express = require('express');
var router = express.Router();
var ProductModel = require('../models/product')

 

router.get('/', async function(req, res, next) {

    const products = await ProductModel.find();

    res.status(200).json(products);
  
  });
  
  router.get('/:details', async function(req, res, next) {
  
    const details = req.params.details
  
    const product = await ProductModel.findById(details);
  
    res.status(200).json(product);
  
  });
  
  
  router.post('/', async function(req, res, next) {
  
    
    const product = new ProductModel(req.body)
    await product.save();
  
    res.status(200).json(product);
  
  });
  
  router.put('/:details', async function(req, res, next) {
  
    const details = req.params.details
    
    const product = await ProductModel.findByIdAndUpdate(details)
  
  
    res.status(200).json(product);
  
  });
  
  router.delete('/:details', function(req, res, next) {
  
    const details = req.params.details
    
    const product = ProductModel.findByIdAndDelete(details)
  
    res.status(200).json(product);
  
  });
  

module.exports = router;