const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');

const conversationsRoute = require("./router/conversation")

// initializing server
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB")
})



// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/conversations", conversationsRoute);

app.listen(3000, () => {
    console.log("Server running, on port 9000...")
});


console.log("Hello, world");