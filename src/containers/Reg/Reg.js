import React, {Component} from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/user';

@connect(state=>({}),actions)
export default class Reg extends Component{
    register=()=>{
        this.props.registerAPI(this.username.value, this.password.value,this.props.history);
    };
    render(){
        return (
            <div className="reg">
                <MHeader>注册</MHeader>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="username">用户名</label>
                            <input type="text" id="username" ref={x=>this.username=x}/>
                        </li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input type="text" id="password" ref={x=>this.password=x}/>
                        </li>
                        <li>
                            <button onClick={this.register}>注册</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}