const express = require('express')
const app = express();
const videos = require("./json/video.json");

app.use(express.json())

app.get('/videos', (req,res) => {
    res.status(200).json(videos);
})

app.get('/videos/id/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const video = videos.find(video => video.id === id)
    res.status(200).json(video);
})

app.post('/videos', (req,res) => {
    videos.push(req.body)
    res.status(200).json(videos)
})

app.delete('/videos/id/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let video = videos.find(video => video.id === id)
    videos.splice(videos.indexOf(video),1)
    res.status(200).json(video)
})

app.put('/video/id/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let video = videos.find(video => video.id === id)
    video.title = req.body.title,
    video.imagePreview = req.body.imagePreview,
    video.video = req.body.video,
    video.categories = req.body.categories,
    video.date = req.body.date,
    video.tags = req.body.tags,
    res.status(200).json(parking)
})

app.listen(8090, () => {
    console.log("Serveur à l'écoute")       
  })