const express = require("express")
const morgan = require("morgan")
const axios = require("axios")

const app = express()

let port = 80

// Middlewares
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Hola!</h1><div>Soy Jesh</div>')
})

app.get("/health", (req, res) => {
    res.send("<h1> OK! </h1>")
})


// Route to get Rick and Morty chars
app.get("/rick", (req, res) => {
    const END_POINT = "https://rickandmortyapi.com/api/character"

    axios.get(END_POINT)
        .then(function (response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error)
            res.send(error)
        })
})

// Listen Server
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})