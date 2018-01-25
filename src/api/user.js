import axios from './index';
export function register(username,password) {
    return axios.post('/reg',{username,password});
}