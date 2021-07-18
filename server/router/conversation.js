const router = require('express').Router();
const Conversation = require("../models/Conversation");
const { db } = require("../database/db");

//new Conv
router.post('/', async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get convo of a user
router.get('/:userId', async (req, res) => {
    // try {
    //     const conversation = await Conversation.find({
    //         members: { $in: [req.params.userId] },
    //     });
    //     res.status(200).json(conversation);
    // } catch (err) {
    //     res.status(500).json(err);
    // }

    try {
        db.query('SELECT * FROM userAuth', (err, rows) => {
            if (!err) {
                res.send(rows);
            } else {
                return console.log(err);
            }
        })


    } catch (err) {

        console.log(err);
    }
})


module.exports = router;