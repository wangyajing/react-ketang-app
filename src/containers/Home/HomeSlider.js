import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class HomeSlider extends Component {
    constructor(){
        super();
        this.state = {index:0};
    }
    render() {
        let swipeOptions = {
            continuous: true,
            auto: 3000,
            callback:(index)=>{
                this.setState({index});
            }
        };
        return (
            <div className="home-swiper">
                <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                    {this.props.sliders.map((item, index) => (
                        <div key={index}>
                            <a href={item.url}>
                                <img src={item.photoUrl}/>
                            </a>
                        </div>
                    ))}
                </ReactSwipe>
                <div className="dots">
                    {this.props.sliders.map((item,index)=>(
                        <span key={index}
                              className={index===this.state.index?'active':''}/>
                    ))}
                </div>
            </div>
        )
    }
}