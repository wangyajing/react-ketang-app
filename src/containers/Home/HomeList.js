import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class HomeList extends Component {
    render() {
        return (
            <div className="home-list">
                <ul>
                    {this.props.lessons.map((item, index) => {
                        let {url, title, price, id} = item;
                        return (
                            <li key={index}>
                                <Link to={{pathname:`/detail/${id}`,state:item}}>
                                <img src={url} alt=""/>
                                <p>{title}</p>
                                <strong>{price}</strong>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    }
}