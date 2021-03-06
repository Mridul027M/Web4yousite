const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    fName : {
        type : String,
        required : true
    },
    lName : {
        type : String,
        required : true 
    },
    Email : {
        type: String,
        required : true
    },
    Password : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User',userSchema)