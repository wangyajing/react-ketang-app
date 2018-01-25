import React, {Component} from 'react';
import bg from '../../common/images/login_bg.png';
import avatar from '../../common/images/profile.png';
import {Link} from 'react-router-dom';
import './profile.less'
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={bg} alt=""/>
                    <img src={avatar} alt="" className="avatar"/>
                    <Link to="/login" className="login-btn">登录</Link>
                </div>
            </div>
        )
    }
}