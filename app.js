const rootDir = require('./utils/path')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contactus');


app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactus', contactRoutes)

app.get('/success',(req,res,next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'success.html'))
})
app.use((req,res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.use("/",(req,res,next) => {
    res.send('<h1>Welcome to ExpressJs</h1>')
})


app.listen(3000)