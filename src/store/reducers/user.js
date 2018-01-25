import * as Types from '../action-types';
let initState = {
    user:null,
    msg:'',
    success:'',
    error:0
};
function session(state=initState,action) {
    switch (action.type){
        case Types.SET_USER_INFO:
            return {...action.user};
        default:
            return state;
    }
}
export default session