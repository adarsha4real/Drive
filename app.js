const express = require('express')
const userRouter = require('./routes/user.routes')


const app = express()


app.set('view engine','ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user',userRouter)
// /user/test is the full route of this page


app.listen(3001)