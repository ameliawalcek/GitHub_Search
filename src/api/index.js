import axios from 'axios'

const userUrl = 'http://localhost:8080'

export const getUsers = (query, page) => axios.get(`${userUrl}/user/search/${query}/${page}`)
export const getUser = name => axios.get(`${userUrl}/user/${name}`)