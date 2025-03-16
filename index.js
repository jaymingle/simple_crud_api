import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 8080

mongoose.connect('mongodb+srv://jaymingle:M6LFWkhe3S9Fe1m8@backend.0r5fr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend')
    .then(() => {
        console.log('MongoDB Connection Succesful')
        app.listen(PORT, () => console.log("Server Running"))
    })
    .catch(() => console.error('MongoDB Connection Failed'))

app.get('/', (req, res) => {
    res.json({
        message: 'Server Running'
    })
})