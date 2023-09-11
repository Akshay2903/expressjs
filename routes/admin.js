const express = require('express')
const router = express.Router();

// admin/add-product => GET
router.get("/add-product",(req,res,next) => {
    res.status(200).send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></br><input type="number" name="size"/></br><button type="submit">Add Product</button></form>')

})

router.post('/add-product', (req,res,next) => {
    console.log(req.body.title, req.body.size)
    res.redirect('/shop')
})

module.exports = router