import * as Types from '../action-types';
import {getLessons, getSliders} from "../../api/home";
//actions里面的actionCreator,creator里面返回action对象
let actions = {
    updateCurrentLesson(lesson){
        return function (dispatch,getState) {
            //更改课程类型
            dispatch({type:Types.SET_CURRENT_LESSON,lesson});
            actions.refreshLesson()(dispatch,getState);
        }
    },
    querySliders(){
        return function (dispatch,getState) { //redux-thunk,可以返回一个函数
            dispatch({type:Types.SET_SLIDERS,payload:getSliders()});
            //redux-promise， 可以将payload中的 promise 执行，将执行后的结果放到action.payload中派发。
        }
    },
    queryLessons(){
        return function (dispatch,getState) {
            //请求时需要判断是否更多(从上次的状态中获取)
            let {currentLesson,lesson:{hasMore,offset,limit,isLoading}} = getState().home;
            if (!hasMore||isLoading) return;
           //发送请求之前，状态变成了正在加载，只有使用dispatch派发action,才能改变状态
           dispatch({type:Types.CHANGE_LOADING_STATUS,status:true});
           //异步请求成功后才派发事件
           dispatch({type:Types.SET_LESSONS,payload:getLessons(offset,limit,currentLesson)})
        }
    },
    refreshLesson(){
        return function (dispatch,getState) {
            dispatch({type:Types.RESET_LESSONS});
            actions.queryLessons()(dispatch,getState);
        }
    }
};
export default actions;