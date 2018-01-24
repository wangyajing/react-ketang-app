import React, {Component} from 'react';

export default class HomeList extends Component {
    render() {
        return (
            <div className="home-list">
                <ul>
                    {this.props.lessons.map((item, index) => {
                        let {url, title, price} = item;
                        return (
                            <li key={index}>
                                <img src={url} alt=""/>
                                <p>{title}</p>
                                <strong>{price}</strong>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}