import React, { Component } from 'react';
import { Carousel, Card, Col, Image, Row, Container } from 'react-bootstrap';

import Employment from '../resume/employment'; 
import Education from '../resume/education'; 

 


export class Resume extends Component {
  render(){
    return (
        <div>
            <div id="resume">
                <h2> A List of Previous Destinations </h2>
                <Container className="mt-4">
                <Row>
                    <Col><Education /></Col>
                    <Col><Employment /></Col>
                </Row>
                </Container>
            </div>
        </div>
    )};
}

export default Resume; 