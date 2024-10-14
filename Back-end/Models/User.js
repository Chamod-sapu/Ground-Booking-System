const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

        userName : {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true
        },
        telephone : {
            type: String,
            required: false
        },
        address : {
            type: String,
            required: false
        },
        image : {
            type: String,
            required: false
        }

})

const User = mongoose.model('User', userSchema);

module.exports = User;