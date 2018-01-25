import React, {Component} from 'react';
import MHeader from "../../components/MHeader/MHeader";
import './index.less'
export default class Reg extends Component{
    render(){
        return (
            <div className="reg">
                <MHeader>注册</MHeader>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="username">用户名</label>
                            <input type="text" id="username"/>
                        </li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input type="text" id="password"/>
                        </li>
                        <li>
                            <button>注册</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}