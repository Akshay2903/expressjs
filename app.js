const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))


app.get("/login",(req,res) => {
    res.status(200).send('<form action="/login" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>')

})
app.post('/login', (req, res) => {
    const username = req.body.username;
    res.send(`
        <script>
            localStorage.setItem('username', '${username}');
            window.location.href = '/';
        </script>
    `);
});


app.get("/",(req,res) => {

    res.status(200)
        .send(`
            <form action="/" method ="POST" >
            <input type="hidden" name="username" id="username">
            <input type="text" name="message">
            <button type = "submit">Send</button>
            </form>

            <script>
                var username = localStorage.getItem('username');
                if (username) {
                    document.getElementById('username').value = username;
                }
            </script>
            `)
})


app.post("/", (req,res) => {
    const username = req.body.username
    const message = req.body.message

    fs.appendFile("chat.txt", `${username} : ${message}\n`, (err) => {
        if(err){
            console.error(err)
        }
    })
    res.redirect("/")
})

app.get('/', (req, res) => {
    fs.readFile('chat.txt', 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading chat log');
        } else {
          res.status(200).send(data);
        }
      });
      
  });


app.use((req,res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(3000)