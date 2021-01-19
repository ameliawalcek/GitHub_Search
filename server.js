import express from "express"
import userRouter from './server/routes/user.js'
import dotenv from 'dotenv'
import cors from "cors"

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', userRouter)

app.get('/sanity', (req, res) => {
    res.send('Hello to GitHub search backend')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on ${PORT}`))