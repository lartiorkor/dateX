const router = require('express').Router();
const Conversation = require("../models/Conversation");
const { db } = require("../database/db");
const { v4: uuidv4 } = require('uuid');

//new Conv
router.post('/', async (req, res) => {
    // const newConversation = new Conversation({
    //     members: [req.body.senderId, req.body.receiverId],
    // });

    // try {
    //     const savedConversation = await newConversation.save();
    //     res.status(200).json(savedConversation);
    // } catch (err) {
    //     res.status(500).json(err);
    // }

    const body = res.body;
    const conversation_id = uuidv4();
    const sql = `INSERT INTO conversations VALUES(
        ${conversation_id}, ${body.user_one},${body.user_two},"message"
    )`
    db.query(sql,(err,rows)=>{
        if(!err){
            res.send(rows);
        }else{
            res.status(500).send(err);
        }
    })
});

//get convo of a user
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const sql = `SELECT * FROM conversations WHERE user_one = "${userId}" OR user_two = "${userId}"`;
    console.log(userId);
    try {
        db.query(sql, (err, rows) => {
            if (!err) {
                res.send(rows);
            } else {
                res.status(500).send(err);
            }
        });

    } catch (err) {

       res.status(500).send(err);
    }
})


module.exports = router;