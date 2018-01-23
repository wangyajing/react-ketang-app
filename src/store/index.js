import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
let store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
window._store = store;
export default store;
//创建store,传入reducer和应用后的中间件，然后导出store