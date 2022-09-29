const express = require("express")
const path = require("path")
const hbs = require('hbs');
const app = express()
app.use(express.json())

const port = process.env.PORT || 8000

// PATH 
const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")


app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath))

// ROUTING 
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("*", (req, res) => {
    res.render("404")
})

let users = [
    {
        name: 'jazz',
        id: '1'
    }
]

app.post('/api/weather', (req, res) => {
    res.send({ data: req.body, status: "1" })
});

app.listen(port, () => {
    console.log("Server running oto port ", port);
})