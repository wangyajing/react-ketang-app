import axios from './index';

//每个接口返回的都是promise对象，可以使用中间件redux-promise直接派发promise
export function getSliders() {
    return axios.get('/sliders');
}

export function getLessons(offset,limit,type){
    console.log(type);
    return axios.get(`/lessons/${offset}/${limit}/${type}`);
}

