import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';


export class Education extends Component {
    render(){
      return (
          <div id="education">
            <h5>
                Locations where I sharpened the most important tool in my arsenal.
            </h5>
                <section className="resume-header">
                    <h4>Software Development & Engineering</h4>
                    <h5>Zip Code Wilmington</h5>
                    <a>May - Aug 2018</a>
                </section>
                <section className="resume-info">
                    <p>
                    Three month, 1200+ hour, highly intensive bootcamp studying the Java language, Object-Oriented Programming principles, RDBMS's & the Spring Framework. 
                    <br></br>
                    Worked on personal developing projects as well as group projects utilizing Agile methodoligies.
                    </p>
                </section>
                <section className="resume-header">
                    <h4>Graphic/Multimedia Design</h4>
                    <h5>The Art Institute of Philadelphia</h5>
                    <a>Aug 2008 - July 2009</a>
                </section>
                <section className="resume-info">
                    <p>
                    </p>
                </section>
            </div>
      )};
  }

  export default Education; 

              {/* <img class="col-xs-6" src="images/work-icon.jpg" width="51 px" length="90 px" class="rounded-circle float-left" /> */}
