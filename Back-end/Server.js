const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
.then(() =>{
    app.listen(() => {
        console.log("Server is running on port " + PORT);
    })
})
.catch(error => console.log(error));

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB Connection Success!");
});

const groundRouter = require("./Routes/Grounds.js");
const userRouter = require("./Routes/Users.js")
const bookingRouter = require("./Routes/Bookings.js")

app.use("/Ground", groundRouter);
app.use("/User", userRouter);
app.use("/Booking", bookingRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
