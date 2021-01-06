const express = require ('express');
const router = express.Router();

//@router   POST api/users 
//@desc     register user
//@access   Public
router.post('/',(req,res) => {
    console.log(req.body);
    res.send('User route') 
});

module.exports = router;