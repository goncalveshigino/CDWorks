import axios from 'axios';

const apiPublic = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000
})

export { apiPublic }