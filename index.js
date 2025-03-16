import express from 'express'
import connectDB from "./connectDB.js";

const app = express()
const port = process.env.PORT || 8080

connectDB('mongodb+srv://jaymingle:M6LFWkhe3S9Fe1m8@backend.0r5fr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend')


app.listen(port, () => console.log("Server Running"))
app.get('/', (req, res) => {
    res.json({
        message: 'Server Running'
    })
})