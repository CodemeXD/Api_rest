var express = require('express');
var router = express.Router();
var ProductModel = require('../models/product')
var PanierModel = require('../models/panier')
var userModel = require('../models/user');

 

router.get('/', async function(req, res, next) {

    const panier = await PanierModel.find().populate('product_id').populate('user_id');

    res.status(200).json(panier);
  
  });
  
  router.get('/:details', async function(req, res, next) {
  
    const details = req.params.details
  
    const panier = await PanierModel.findById(details).populate('product_id').populate('user_id');
  
    res.status(200).json(panier);
  
  });
  
  
  router.post('/', async function(req, res, next) {
  
    
    const panier = new PanierModel(req.body).populate('product_id').populate('user_id')
    await panier.save();
  
    res.status(200).json(panier);
  
  });
  
  router.put('/:details', async function(req, res, next) {
  
    const details = req.params.details
    
    const panier = await PanierModel.findByIdAndUpdate(details).populate('product_id').populate('user_id')
  
  
    res.status(200).json(panier);
  
  });
  
  router.delete('/:details', function(req, res, next) {
  
    const details = req.params.details
    
    const panier = PanierModel.findByIdAndDelete(details).populate('product_id').populate('user_id')
  
    res.status(200).json(panier);
  
  });
  

module.exports = router;