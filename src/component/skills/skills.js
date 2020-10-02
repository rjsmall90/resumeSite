import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import Header from '../header/Header'; 
 

export class Skills extends Component {
    render(){
        return( 
            <div id="skills">
                <div>
                  <h2>SKILLS</h2>
                    <Container>
                        <Row>
                            <Col>
                        <h4>Languages</h4>
                        <ul>
                            <li>
                                <a>Java</a>
                            </li>
                            <li>
                                <a>JavaScript</a>
                            </li>
                            <li>
                                <a>Scala</a>
                            </li>  
                            <li> 
                                <a>TypeScript</a>
                            </li>
                            <li>
                                <a>Ruby</a>
                            </li>
                            <li>
                                <a>HTML</a>
                            </li>
                            <li>
                                <a>CSS</a>
                            </li>
                            <li>
                                <a>Node.JS</a>
                            </li>
                        </ul>
                        </Col>

                        <Col>
                        <h4>Frameworks</h4>
                        <ul>
                            <li>
                                <a>Spring/Spring Boot</a>
                            </li>
                            <li>
                                <a>AngularJS</a>
                            </li>
                            <li>
                                <a>Ionic 3</a>
                            </li>  
                            <li>
                                <a>Vue</a>
                            </li> 
                        </ul>
                        </Col>

                        <Col>
                        <h4>Libraries</h4>
                        <ul>
                            <li>
                                <a>React</a>
                            </li>
                            <li>
                                <a>React Native</a>
                            </li>
                        </ul>

                        <h4>Other</h4>
                        <ul>
                            <li>
                                <a>Amazon Web Services</a>
                            </li>
                            <li>
                                <a>RDBMS: MySQL, PostgreSQL</a>
                            </li>
                            <li>
                                <a>REST Services/API's</a>
                            </li>
                            <li>
                                <a>Adobe Creative Suites</a>
                            </li>
                        </ul>
                        </Col>
                        </Row>
                        </Container>
                        
                </div>
            </div>
        )
    };

}

export default Skills; 