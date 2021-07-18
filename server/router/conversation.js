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
    const userId = req.params.userId;
    const sql = `SELECT * FROM conversations WHERE user_one = "${userId}" OR user_two = "${userId}"`;
    try {
        db.query(sql, (err, rows) => {
            if (!err) {
                res.send(rows);
            } else {
                res.status(500).send(err);
            }
        });

    } catch (err) {

        es.status(500).send(err);
    }
})


module.exports = router;