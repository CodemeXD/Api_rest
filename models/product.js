const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name : String,
        quantity : {type: Number , required : false, default: 1}

    }
)

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel;