const path = require('path')
const express = require('express')
const rootDir = require('../utils/path')
const router = express.Router()

router.get("/", (req,res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'contactus.html'))
})

router.post("/", (req,res,next) => {
    res.redirect('/success')
})

module.exports = router