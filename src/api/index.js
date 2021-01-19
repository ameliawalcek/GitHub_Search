import axios from 'axios'

const userUrl = 'http://localhost:8080'

export const getUsers = (query) => axios.get(`${userUrl}/user/search/${query}`)