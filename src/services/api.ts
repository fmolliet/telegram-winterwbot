import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.google.com',
    timeout: 30000
})

export default api;