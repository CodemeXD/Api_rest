const mongoose = require('mongoose');
const { Schema } = mongoose;

const panierSchema = new Schema(
    {
        product_id : {type : Schema.ObjectId , ref : "Product"},
        user_id : {type : Schema.ObjectId , ref : "User"},
        quantity : {type : Number , require : false},
    }
)

const panierModel = mongoose.model('Panier', panierSchema)

module.exports = panierModel;