import * as Types from '../action-types';
import {getSliders} from "../../api/home";
//actions里面的actionCreator,creator里面返回action对象
let actions = {
    updateCurrentLesson(lesson){
        return {type:Types.SET_CURRENT_LESSON,lesson};
    },
    querySliders(){
        return function (dispatch,getState) { //redux-thunk,可以返回一个函数
            dispatch({type:Types.SET_SLIDERS,payload:getSliders()});
            //redux-promise， 可以将payload中的 promise 执行，将执行后的结果放到action.payload中派发。
        }
    }
};
export default actions;