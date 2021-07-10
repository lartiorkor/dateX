const router = require('express').Router();
const Message = require("../models/Message");

//new Conv
router.post('/', (req, res) => {
    const newMessage = new Message({
        members: [req.body.senderId, req.body.receiverId],
    });
});

//get convo of a user


module.exports = router;