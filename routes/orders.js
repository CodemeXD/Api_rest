var express = require('express');
var router = express.Router();
var ProductModel = require('../models/product')
var PanierModel = require('../models/panier')
var userModel = require('../models/user');
var commandeModel = require('../models/commande');

 

router.get('/', async function(req, res, next) {

    const commande = await commandeModel.find().populate('product_id').populate('user_id');

    res.status(200).json(commande);
  
  });
  
  router.get('/:details', async function(req, res, next) {
  
    const details = req.params.details
  
    const commande = await commandeModel.findById(details).populate('product_id').populate('user_id');
  
    res.status(200).json(commande);
  
  });
  
  
  router.post('/', async function(req, res, next) {
  
    
    const commande = new commandeModel(req.body)
    await commande.save();
  
    res.status(200).json(commande).populate('product_id').populate('user_id');
  
  });
  
  router.put('/:details', async function(req, res, next) {
  
    const details = req.params.details
    
    const commande = await commandeModel.findByIdAndUpdate(details).populate('product_id').populate('user_id')
  
  
    res.status(200).json(commande);
  
  });
  
  router.delete('/:details', function(req, res, next) {
  
    const details = req.params.details
    
    const commande = commandeModel.findByIdAndDelete(details).populate('product_id').populate('user_id')
  
    res.status(200).json(commande);
  
  });
  

module.exports = router;