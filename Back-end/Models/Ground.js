const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groundSchema = new Schema({

            name: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            sport: {
                type: String,
                required: true
            },
            capacity: {
                type: String,
                required: true
            },
            fromTime :{
                    type:String,
                    required: true
                },
            toTime :{
                    type:String,
                    required: true
                }
            ,
            price: {
                type: Number,
                required: true
            },
            facilities: [String],
            image: {
                type: String,
                required: false
            }
        });

const Ground = mongoose.model('Ground', groundSchema);

module.exports = Ground; 
