const express = require('express')
const router = express.Router();
const { body,validationResult } = require('express-validator');


router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',
    body('email').trim().isLength({min:10}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:4}),
    (req,res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"invalid data"

                
        })
         }
        // console.log(errors);
        
        
    // console.log(req.body)
    res.send(errors)
})



module.exports = router;
