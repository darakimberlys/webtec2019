import axios from 'axios';

export const http = axios.create ({
    baseURL: 'https://api.github.com/repositories/',
    timeout: 10000,
})
