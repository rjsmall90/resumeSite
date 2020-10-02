import React, { Component } from 'react';
import { Carousel, Card, Container, Col } from 'react-bootstrap';
import Contact from '../footer/contact';

 


export class Portfolio extends Component {
  render(){
    return (
        <div id="portfolio">
        
            <h3>Works</h3>
            <Carousel>

                <Carousel.Item >
                    <Card className="cards">
                    <Card.Img className ="cards-media"src="images/java_logo.jpg" />
                    <Card.Body>
                        <Card.Title>Simple Java Web Crawler</Card.Title>
                        <Card.Text>
                        Using Java, Maven, & JSoup - Built a simple Java Web Crawler that targets a specific url and with a given keyword will locate the links on website that contains keyword and compile them into a list.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card className="cards">
                    <Card.Img className ="cards-media"src="images/java_logo.jpg" />
                    <Card.Body>
                        <Card.Title>Java Web Crawler 2.0</Card.Title>
                        <Card.Text>
                        Using Java, Maven, & Apache HttpClient for the connection - Building an upgraded web crawler that given a keyword can locate 
                        <br>
                        </br>and collect links, and excerpts where instances of the keyword appear, and print out to a text file.
                        </Card.Text>             
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item >
                    <Card className="cards">
                    <Card.Img className ="cards-media"src="images/Rsmall.jpg" />
                    <Card.Body>
                        <Card.Title>Resume/Portfolio Site</Card.Title>
                        <Card.Text>
                            first foray into React; built portfolio/resume site using JSX and the React libraries. First time registering domain and publishing site using AWS & S3 cloud services.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item> 

                <Carousel.Item>
                    <Card className="cards">
                    <Card.Img className ="cards-media"src="images/java_logo.jpg" />
                    <Card.Body>
                        <Card.Title>Food Reyes-REST & View</Card.Title>
                        <Card.Text>
                            initially a collaboration between myself and acquaintance; designing an inventory management/ordering service.
                            <br></br>
                            REST API developed using Java, Spring Boot, Maven, & PostgreSQL. Frontend still in development using React Native & Redux. 
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card className="cards">
                    <Card.Img className ="cards-media"src="images/final_spitball.jpg" />
                    <Card.Body>
                        <Card.Title>Project Spitball</Card.Title>
                        <Card.Text>
                            full stack application developed during tenure at Zip Code Wilmington.
                            <br></br>
                            Built using Spring Boot, Maven, & MySQL for the REST services. Frontend built using Ionic 3. 
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card className="cards">
                    <Card.Img className ="cards-media"src="images/java_logo.jpg" />
                    <Card.Body>
                        <Card.Title>Java Jawn</Card.Title>
                        <Card.Text>
                            REST API developed using Java, Spring Boot, Maven, & PostgreSQL.
                            <br></br>
                            Built to practice Spring integration testing and writing controller methods. 
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                
            </Carousel>
        </div>
  )};
}

export default Portfolio;
