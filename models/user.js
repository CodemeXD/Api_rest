const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name : String,
        firstname : String,
        email : String,
        Adress : String,
        tel : Number,
        
    }
)

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;
