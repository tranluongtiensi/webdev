const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const Videos = require('./models/shortvideoSchema')
// App configuration
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://dop:Tiensi1408@dop.xzl7rjj.mongodb.net/webdev'

// Middleware
app.use(express.json());
app.use(cors());

// DB Configuration
try {
    mongoose.connect(connection_url)
    console.log("connect db successfully")
} catch (error) {
    console.log(error)
}


// API endpoints
app.get('/', (req, res) => res.status(200).send('He so lo he so li'))

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))