import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from "./HomeHeader";
import actions from '../../store/actions/home';
import './home.less'
import HomeSlider from "./HomeSlider";
import Loading from "../../components/Loading/Loading";
@connect(state=>({...state.home}),actions)
export default class Home extends Component{
    componentDidMount(){
        if (this.props.sliders.length === 0){
            this.props.querySliders();
        }
    }
    selectCurrentLesson=(lessonName)=>{
        this.props.updateCurrentLesson(lessonName);
    };
    render(){
        return (
            <div>
                <HomeHeader select={this.selectCurrentLesson}/>
                <div className="content">
                    {this.props.sliders.length?<HomeSlider sliders={this.props.sliders}/>:<Loading/>}
                </div>
            </div>
        )
    }
}
