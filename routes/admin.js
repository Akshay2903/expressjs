const path = require('path')
const express = require('express')
const rootDir = require('../utils/path')
const router = express.Router();

// admin/add-product => GET
router.get("/add-product",(req,res,next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req,res,next) => {
    console.log(req.body.title, req.body.size)
    res.redirect('/shop')
})

module.exports = router