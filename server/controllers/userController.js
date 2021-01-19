import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { GITHUB_TOKEN } = process.env

class UserController {
    constructor() {
        this.baseUrl = 'https://api.github.com'
        this.token = GITHUB_TOKEN
    }

    async getUsers(query) {
        try {
            return (await axios.get(`${this.baseUrl}/search/users?q=${query}&token=${this.key}`)).data
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserController