const router = require('express').Router();
const { default: mongoose } = require('mongoose');
let Booking = require("../Models/Booking.js");
const multer = require('multer', { dest: 'uploads/' });
const path = require('path');


// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads')); // Specify the folder where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the original filename
    }
});

const upload = multer({ storage: storage });


//Create a booking
router.route("/add").post(upload.single('image'), async (req, res) => {
    const { userName, gname, gId, fromDate, toDate, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : ''; // Update the image path

    const newBooking = new Booking({
        userName,
        gname,
        gId,
        fromDate,
        toDate,
        price,
        image
    });

    newBooking.save()
        .then(() => res.json('Booking Successful'))
        .catch((err) => {
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});

//Fetch Bookings
router.route("/").get(async(req,res)=> {

    Booking.find()
        .then(boookings => res.json(boookings))
        .catch((err)=>{
            console.log(err);
            res.status(400).json('Error: ' + err);
        })

})

//delete a bookoing
router.route("/delete/:id").delete(async(req,res)=>{ 
    const bookingId = req.params.id;

    try{
        await Booking.findByIdAndDelete(bookingId);
        res.status(200).send({ status: "Booking deleted" });

    } catch(err){
        console.log(err);
        res.status(500).send({ status: "Error with deleting data", error: err.message });
    }
})

module.exports = router;