import React, {Component} from 'react';
import './loading.less';
export default class Loading extends Component{
    render(){
        return (
            <div className="loading">
                <div className='loader loader--audioWave'></div>
            </div>)
    }
}