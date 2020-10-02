import React, { Component } from 'react';
import { Carousel, Card, Col, Image, Row } from 'react-bootstrap';

import Header from '../header/Header';

import Phone from './icons/phone'
import Email from './icons/email'
import GH from './icons/gh'
import Linked from './icons/linked'
import BTP from './icons/btp'



 


export class Contact extends Component { 

    render(){
        return (
            <div id="contact">
                <ul>
                    <li>
                        <Phone />
                    </li>
                    <li>
                        <a href = "mailto: rjsmall90@gmail.com">
                        <Email /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ryansmall90">
                        <Linked />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/rjsmall90">
                        <GH />
                        </a>
                    </li>
                    <li>
                        <a href="https://blacktechphilly.dev">
                        <BTP />
                        </a>
                    </li>
                </ul>
            </div>
        )}   
    }

export default Contact; 