const mongoose = require('mongoose');
const { Schema } = mongoose;

const commandeSchema = new Schema(
    {
        product_id : {type : Schema.ObjectId , ref : "Product"},
        user_id : {type : Schema.ObjectId , ref : "User"},
        quantity : {type : Number , require : false},
        date : {type : Date , default : Date.now()}

    }
)

const commandeModel = mongoose.model('Commande', commandeSchema)

module.exports = commandeModel;

