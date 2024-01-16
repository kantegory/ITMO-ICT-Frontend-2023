import axios from 'axios'

const apiURL = 'http://localhost:3000'

const api = axios.create({
 baseURL: apiURL
})

export default api