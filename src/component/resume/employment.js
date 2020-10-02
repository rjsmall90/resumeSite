import React, { Component } from 'react';
import { Carousel, Card, Col, Image, Row } from 'react-bootstrap';

import Header from '../header/Header'; 
 


export class Employment extends Component {
  render(){
    return (
        <div id="employment">
            <h5>Key places I've worked over the last decade that shaped who I am personally and professionally.</h5>
                <section className="resume-header">
                    <h4>Web Developer/Graphic Designer</h4>
                    <h5>Freelance</h5>
                    <a>Dec 2018 - present</a>
                </section>
                <section className="resume-info">
                    <p>
                        Contacted for small, personal software application builds, assistance on open-source projects, website development and graphic design needs.
                    </p>
                </section>
                <section className="resume-header">
                        {/* <img src="images/work-icon.jpg" width="51 px" length="90 px" class="rounded-circle float-right" /> */}
                    <h4>Priority Card Specialist/Subject Matter Expert</h4>
                    <h5>Bank of America</h5>
                    <a>Sept 2013 - Dec 2016</a>
                </section>
                <section className="resume-info">
                            <p>
                            Interim Team Lead who was hand selected and led a team of 20+ associates in the SBCC, and was certified as one of only ten “Subject Matter Experts” on banking regulations and internal technology systems for the entire SBCC department. 
                            <br></br>
                            Also facilitated new hire training for over 50 associates and developed new training methods and tools toimprove associate learning and assimilation into dual credit card/deposit account roles.
                            </p>
                </section>

        </div>
    )};
}

export default Employment; 

                        {/* <div className="resume-header">
                        <img src="images/work-icon.jpg" width="51 px" length="90 px" class="rounded-circle float-right" />
                            <h4>Teller/Customer Sales & Service Representative</h4>
                            <h5>Wells Fargo, N.A.</h5>
                            <p>Oct 2010 - Jan 2013</p>
                        </div>
                        <div className="resume-info">
                            <p>
                            Started as a Teller maintaining cash deposits and client accounts. Promoted within 16 months to CSSR, acheived sales goals in both positions during tenure.
                            </p> 
                    </div>*/}