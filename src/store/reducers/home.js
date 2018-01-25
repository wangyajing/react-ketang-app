import * as Types from '../action-types';

let initState = {
    currentLesson: "all",
    sliders: [],
    lesson: {
        list: [],//课程的所有数据
        hasMore: true,
        offset: 0,
        limit: 5,
        isLoading: false
    }
};

//根据action的type做出不同的处理，返回计算后的state
function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.lesson};
        case Types.SET_SLIDERS:
            return {...state, sliders: action.payload};
        case Types.CHANGE_LOADING_STATUS:
            let isLoading = action.status;
            return {...state,lesson:{...state.lesson,isLoading}};
        case Types.SET_LESSONS:
            let {payload} = action;
            return {...state,
                lesson:{...state.lesson,
                isLoading:false, //请求成功后，状态为加载完毕，
                offset:state.lesson.offset + payload.list.length,//当前的偏移量加最新的数据长度
                hasMore:payload.hasMore, //后台返回是否有更多
                list:[...state.lesson.list,...payload.list]}
            };
        case Types.RESET_LESSONS:
            return {...state,lesson:{...state.lesson,isLoading:false,offset:0,list:[],hasMore:true}};
        default:
            return state;
    }
}

export default home;