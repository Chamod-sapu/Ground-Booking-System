const multer = require('multer', { dest: 'uploads/' });
const path = require('path');
const router = require('express').Router();
let Ground = require("../Models/Ground.js");


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

//Add ground
router.route('/add').post(upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const { name, location, sport, capacity, fromTime, toTime, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : ''; // Update the image path

    if (!name || !location || !sport || !capacity || !fromTime || !toTime || !price) {
        return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const facilities = req.body.facilities || [];

    const newGround = new Ground({
        name,
        location,
        sport,
        capacity,
        fromTime,
        toTime,
        price,
        facilities,
        image
    });

    newGround.save()
        .then(() => res.json('Ground Added'))
        .catch((err) => {
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});



// Fetch or get ground data
router.route('/').get((req, res) => {
    Ground.find()
        .then(grounds => res.json(grounds))
        .catch((err) => {
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});

// Update ground
router.route('/update/:id').put(upload.single('image'), async (req, res) => {
    let gId = req.params.id;

    const { name, location, sport, capacity, fromTime, toTime, price } = req.body;
    const facilities = req.body.facilities || [];
    const image = req.file ? `/uploads/${req.file.filename}` : ''; // Update the image path

    const updateGround = {
        name,
        location,
        sport,
        capacity,
        fromTime,
        toTime,
        price,
        facilities,
        image
    };

    try {
        const update = await Ground.findByIdAndUpdate(gId, updateGround, { new: true });
        res.status(200).send({ status: "Ground updated", ground: update });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    }
});

// Delete ground
router.route('/delete/:id').delete(async (req, res) => {
    let gId = req.params.id;

    try {
        const Delete = await Ground.findByIdAndDelete(gId);
        res.status(200).send({ status: "Ground deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with deleting data", error: err.message });
    }
});

//Fetch a one ground
router.route('/get/:id').get(async(req,res)=>{
    let gId = req.params.id;

    try{
        const ground = await Ground.findById(gId);
                        res.status(200).send({ status: "Ground fetched", ground : ground});
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with fetching data", error: err.message})
    }
})

module.exports = router;