import express from 'express'
import UserController from '../controllers/userController.js'
const userRouter = express.Router()

const userController = new UserController()

userRouter.get("/user/search/:query", async (req, res) => {
    console.log('getting users from search')
    const { query } = req.params
    const search = await userController.getUsers(query)

    try {
        res.send({ total: search.total_count, users: search.items })
    } catch (error) {
        res.send(error)
    }
})


export default userRouter