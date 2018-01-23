import * as Types from '../action-types';

let initState = {
    currentLesson:"all",
    sliders:[]
};
//返回计算后的state
function home(state=initState,action) {
   switch(action.type){
       case Types.SET_CURRENT_LESSON:
           return {...state,currentLesson:action.lesson};
       case Types.SET_SLIDERS:
           return {...state,sliders:action.payload};
       default:
           return state;
   }
}

export default home;