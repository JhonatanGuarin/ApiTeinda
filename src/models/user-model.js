const mongoose = require('mongoose')


const {Schema} = mongoose

const userSchema = new Schema({

    name: {
        type: String,
        required : true
    },

    lastName: {
        type: String,
        required : true
    },

    mail : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    role : {
        type: String,
        required : true
    }
  })
  
  module.exports = mongoose.model('Users',userSchema)