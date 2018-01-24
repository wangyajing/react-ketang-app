import React, {Component} from 'react';
import MHeader from "../../components/MHeader/MHeader";
import {getOneLesson} from "../../api/home";
import 'babel-polyfill';
export default class Detail extends Component {
    constructor(){
        super();
        this.state={lesson:{}};
    }
    async componentWillMount() {
        let {state} = this.props.location;
        if (!state) {
            state = await getOneLesson(this.props.match.params.lessonID)
        }
        this.setState({lesson:state});
    }

    render() {
        let {video, poster} = this.state.lesson;
        return (
            <div>
                <MHeader>详情页</MHeader>
                <video src={video}
                       style={{width: '100%'}}
                       controls={true}
                       poster={poster}
                />
            </div>
        )
    }
}