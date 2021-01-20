import axios from 'axios'

const userUrl = 'http://localhost:8080/user'

export const getUsers = (query, page) => axios.get(`${userUrl}/search/${query}/${page}`)
export const getUser = name => axios.get(`${userUrl}/${name}`)