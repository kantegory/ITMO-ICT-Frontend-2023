import axios from 'axios'

const apiUrl = "http://localhost:3000"
export const api = axios.create({ baseURL: apiUrl })