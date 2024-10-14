const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    userName : {
        type: String,
        required: true
    },
    gname : {
        type: String,
        required: true
    },
    gId: {
        type: String,
        required: true
    },
    fromDate:{
        type: String,
        required:true
    },
    toDate:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;