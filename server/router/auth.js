const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('hello world from the server router.js');
})


router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body 

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'error' })
    }

    try {
        const userExist = await User.findOne({ email: email });

        if(userExist) {
            return res.status(422).json({ error: 'user already exists' })
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "passwords don't match" })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
    
            await user.save();
            res.status(201).json({ message: 'user registered successfully' })
        }

    } catch(err) {
        console.log(err);
    }

    
});

//login route
router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: 'awesome' })
    try{ 
        let token;
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(404).json({ err: 'please fill the data' })
        }

        const userLogin = await User.findOne({ email: email });

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            token = await userLogin.generateAuthToken()

            if(!isMatch) {
                res.status(400).json({ error: 'user error' })
            } else {
                res.json({ message: 'user signed in successfully' })
            }
        } else {
            res.status(400).json({ error: 'Invalid Credentials' })
        }
        
        

    } catch(err) {
        console.log(err)
    }
})


module.exports = router;


// {
//     "name": "raghav",
//     "email": "raghav@raghav.com",
//     "phone": 837848223,
//     "work": "web-dev",
//     "password": "raghav",
//     "cpassword": "raghav"
// }