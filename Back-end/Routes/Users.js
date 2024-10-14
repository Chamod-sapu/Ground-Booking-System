const router = require('express').Router();
const User = require("../Models/User.js");

//Create a user account
router.route('/add').post((req,res)=>{
    const {userName,password,email,telephone,address,image} = req.body;

    const newUser = new User({
        userName,
        password,
        email,
        telephone,
        address,
        image
    });

    newUser.save()
        .then(()=>{
            res.json("User Added")
        }).catch((err)=>{
            console.log(err);
            res.status(400).json('Error'+ err);
        });
})

//Update user information

router.route('/update/:id').put(async(req,res)=>{
    let userId = req.params.id;
    const {userName,password,email,telephone,address,image} = req.body;

    const updateUser = {
        userName,
        password,
        email,
        telephone,
        address,
        image
    };

    try{
        const update = await User.findByIdAndUpdate(userId, updateUser, {new: true});
        res.status(200).send({status: "User updated", user: update})
    } catch(err){
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message})
    }
});

//Fetch or get user data
router.route("/").get((req,res)=>{
    User.find()
        .then(Users => res.json(Users))
        .catch((err)=>{
            console.log(err);
            res.status(400).json('Error'+ err)
        })
})

//Delete user
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    try{
        const Delete = await User.findByIdAndDelete(userId);
        res.status(200).send({status: "User deleted"})
    } catch(err){
        console.log(err);
        res.status(400).send({status: "Error with fetching data", error: err.message})
    }
})

//Fetch a one user
router.route('/get/:id').get(async(req,res)=>{
    let userId = req.params.id

    try{
        const user = await User.findById(userId);
        res.status(200).send({status:"User fetched", user:user})
    } catch(err){
        console.log(err);
        res.status(500).send({status:"Error with fetching data", error:err.message})
    }
})

// Login user
router.route('/login').post(async (req, res) => {
    const { userName, password } = req.body;

    User.findOne({ userName })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.status(200).json("Success");
                } else {
                    res.status(401).json("The password is Incorrect");
                }
            } else {
                res.status(404).json("No record existed");
            }
        })
        .catch(err => {
            res.status(500).json({ status: "Error", error: err.message });
        });
});


module.exports = router;