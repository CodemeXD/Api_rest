const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorieSchema = new Schema(
    {
        name : String,
        description : String,
        img : String


    }
)

const CategorieModel = mongoose.model('Categorie', categorieSchema)

module.exports = CategorieModel;
