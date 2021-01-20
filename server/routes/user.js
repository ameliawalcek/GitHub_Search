import express from 'express'
import UserController from '../controllers/userController.js'
const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/user/search/:query/:page', async (req, res) => {
    const { query, page } = req.params
    const search = await userController.getUsers(query, page)

    try {
        res.send({ total: search.total_count, users: search.items })
    } catch (error) {
        res.send(error)
    }
})

userRouter.get('/user/:name', async (req, res) => {
    const { name } = req.params
    const user = await userController.getUser(name)

    try {
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})


export default userRouter