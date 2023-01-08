// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer  = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var bodyParser = require('body-parser');
const path = require('node:path');
const Pusher = require("pusher");
const Posts = require("./postModel");
const dotenv = require("dotenv");

// app config
Grid.mongo = mongoose.mongo
const app = express()
const port = process.env.PORT || 9000
dotenv.config() 

const pusher = new Pusher({
    appId: "1535262",
    key: "7af2ca6c7577cc1beff0",
    secret: "8394d6ed6f0f61607150",
    cluster: "ap1",
    useTLS: true
});

// middleware
app.use(bodyParser.json())
app.use(cors())

// DB Config
mongoose.connect('DATABASE_URL = mongodb+srv://user:user@cluster0.1rzhqdb.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))

let gfs

mongoose.connection.once('open', () => {
    console.log('DB Connected')
    gfs = Grid(mongoose.connection.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: 'DATABASE_URL = mongodb+srv://user:user@cluster0.1rzhqdb.mongodb.net/test',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            }
            resolve(fileInfo)
        })
    }
})

const upload = multer({ storage })

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

// api routes
app.get("/", (req, res) => res.status(200).send("Hello UIT"))

app.post('/upload/image', upload.single('file'), (req, res) => {
    res.status(201).send(req.file)
})

app.get('/images/single', (req, res) => {
    gfs.files.fileOne({ filename: req.query.name }, (err, file) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if(!file || file.length === 0){
                res.status(404).json({ err: 'file not found '})
            } else {
                const readstream = gfs.createReadStream(file.filename)
                readstream.pipe(res)
            }
        }
    })
})

app.post('/upload/post', (req, res) => {
    const dbPost = req.body
    Posts.create(dbPost, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/posts', (req, res) => {
    Posts.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            data.sort((b,a) => a.timestamp - b.timestamp)
            res.status(200).send(data)
        }
    })
})

// listen
app.listen(port, () => {
    console.log("Backend server is running!")
}) 
