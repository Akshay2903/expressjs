const express = require('express')
const router = express.Router();

// admin/add-product => GET
router.get("/login",(req,res,next) => {
    res.status(200).send('<form action="/login" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>')

})

router.post('/login', (req,res,next) => {
    console.log(req.body.title, req.body.size)
    res.redirect('/')
})

module.exports = router