import axios from './index';

//每个接口返回的都是promise对象，可以使用中间件redux-promise直接派发promise
export function getSliders() {
    return axios.get('/sliders');
}