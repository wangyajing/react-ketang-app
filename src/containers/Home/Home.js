import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from "./HomeHeader";
import actions from '../../store/actions/home';
import './home.less'
import HomeSlider from "./HomeSlider";
import Loading from "../../components/Loading/Loading";
import HomeList from "./HomeList";
import {loadMore,refresh} from "../../common/util";
@connect(state=>({...state.home}),actions)
export default class Home extends Component{
    componentDidMount(){
        //写一个刷新的方法，先清空所有的数据
        refresh(this.target,this.props.refeshLesson);
        loadMore(this.target,this.props.queryLessons);
        //connect将state中的数据和dispatch都变成组件的属性
        if (this.props.sliders.length === 0){
            this.props.querySliders();
        }
        if (this.props.lesson.list.length === 0){
            this.props.queryLessons();
            //为什么请求之后，state会更新
        //    因为dispatch会将action派发给reducer，reducer会重新计算state
        }

    }
    selectCurrentLesson=(lessonName)=>{
        this.props.updateCurrentLesson(lessonName);
    };

    // loadMore=()=>{
    //    this.props.queryLessons();
    // };
    render(){
        return (
            <div>
                <HomeHeader select={this.selectCurrentLesson}/>
                <div className="content" ref={x=>this.target=x}>
                    {this.props.sliders.length?<HomeSlider sliders={this.props.sliders}/>:<Loading/>}
                    <h2 className="home-title"><i className="iconfont icon-wode_kecheng">我的课程</i></h2>
                    <HomeList lessons={this.props.lesson.list}></HomeList>
                    {this.props.lesson.isLoading?<Loading/>:null}
                    {/*<button onClick={this.loadMore}>加载更多</button>*/}
                </div>
            </div>
        )
    }
}
