const router = require('express').Router();


router.get('/users',(req,res)=>{res.json(users)});
router.post('/users',async(req,res) => {
    try{
        //const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        //console.log(salt)
        //console.log(hashedPassword)


    }catch{
        res.status(500).send()
    }

    const user = { name: req.body.name, password:req.body.password}
    users.push(user)
    res.status(201).send()
    Hash(salt + 'password')
} )

router.post('/users/login', async (req,res) =>{
    const user = users.find(user.name = req.body.name)
    if (user == null){
        return res.status(100).send('user doesnt exist')
    }
    try {
        if(bcrypt.compare(req.body.password,user.password)){
            res.send('success')
        }else{
            res.send('this is not allowed')
    }
        
    } catch  {
        res.status(500).send()
        
    }
})

module.exports = router;