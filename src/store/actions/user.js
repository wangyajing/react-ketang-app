import * as Types from '../action-types';
import {register} from '../../api/user';
let actions = {
    registerAPI(username,password,history){
        //注册成功了，跳转到登录页面
        return function (dispatch,getState) {
            register(username,password).then(function (data) {//data是服务端返回的结果
                //dispatch用于将数据存储到redux中
                dispatch({type:Types.SET_USER_INFO,user:data});
                if (!data.error){
                    history.push('/login');
                }
            })
        }
    }
};
export default actions;