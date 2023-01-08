const express = require("express")
const mongoose = require("mongoose")
const Cors = require("cors")
const Pusher = require("pusher")
const Posts = require("./postModel")
const dotenv = require("dotenv")

// App config 
dotenv.config()          
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1524937",
    key: "f4de34544ef4b4f5e77b",
    secret: "f847eaacf4a3ad5f7417",
    cluster: "ap1",
    useTLS: true
})

// Middleware
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect('mongodb+srv://dop:Tiensi1408@dop.xzl7rjj.mongodb.net/card', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))



mongoose.connection.once('open', () => {
    const changeStream = mongoose.connection.collection('post').watch()
    changeStream.on('change', change => {
        console.log(change)
        if(change.operationType === "insert") {
            console.log('Trigerring Pusher')
            pusher.trigger('post', 'inserted', {
                change: change
            })
        } else {
            console.log('Error trigerring Pusher')
        }
    })
})

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/upload', (req, res) => {
    const dbPost = req.body
    Posts.create(dbPost, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/sync', (req, res) => {
    Posts.find((err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

// Listener
app.listen(port, () => {
    console.log("Backend server is running!")
}) 
