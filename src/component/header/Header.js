import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { } from 'react-bootstrap';



export class Header extends Component {
    render(){
        return (
        <div id='header'>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Resume</a>
                </li>
                <li>
                    <a>Works</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </div>
        );
    }
}

export default Header;
