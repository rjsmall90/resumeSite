import React, { Component } from 'react';
import { Button, Container, Jumbotron, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"


const Home = () => {

    return(
        <div id="home">
        <h1> Welcome to the site, still much to be done</h1>
            <Jumbotron>
            <Row>
                <div className="profile_pic">
                    <img alt="selfie" src={require("../../assets/imgs/betterChoice.jpg")} />
                <section className="overlay">
                <section className="p" >
                    <h3 align="center"> YES! I Take Mirror Selfies,<br></br>But I Also Code Like A Demon</h3>
                    <ul align="center">
                        <h4>Stats: </h4>
                        <li>Name: Ryan Small</li>
                        <li>Age: Undetermined</li>
                    </ul>
                </section>
                </section>
                </div>
               <Col>
                <p>
                    Software Engineer with a strong understanding of Object-Oriented principles, 
                    experience with multiple languages, frameworks, & IDE's, as well as a superb ability to learn and all the
                    will in the world to do so.
                    <br></br>
                    Co-Founder of Black Tech Philly; an non-profit organization built to help foster growth within the tech community of black and brown people
                    in the Greater Philadelphia area and beyond. 
                    <br></br>
                    Reach Out By Clicking The Links Below
                </p>
                </Col>
                </Row>
            </Jumbotron>
        </div> 
        );
    }

export default Home; 

                    
                // {/* <Link to='/resume'>
                //     <Button
                //         variant="link"
                //         size="lg"
                //         block
                //         style={{
                //         color: "white",
                //         ontFamily: "DINCondensed-Bold",
                //     }}>
                //         Read more
                //     </Button>
                // </Link> */}