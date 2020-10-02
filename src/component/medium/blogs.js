import React, { Component } from 'react';
import { Carousel, Card, Container, Col } from 'react-bootstrap';
import axios from 'axios';

export class Blogs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        };
        
    }

    componentDidMount(){
    let config = {
            'Bearer' : '20315d2182128c1453459171782cd6210b838178b9daa792999ca838ef119542a'

        }
        axios.get('https://api.medium.com/v1/me', { config })
        .then(results => {
            console.log(results);
        }); 
        // axios.get('https://api.medium.com/v1/users/{{@rjsmall90}}/publications', : config )
        // .then(results => {
        //     return results.json();
        // }).then(data => {
        //     let blogs = data.results.map((blog) => {
        //         return(
        //             <div key={}>

        //             </div>
        //         )
        //     })
        //     this.setState({blogs: blogs});
        //     console.log("state", this.state.blogs);
        // })
    }  
    
    render(){
        return(
            <div id="blogs">
                <section>
                    <h3>Blogs</h3>     
                    {this.state.blogs}
                    <p>
                    Coming Soon!
                    <br></br>
                    Until then follow the link: 
                    <br></br>
                    <a href="https://medium.com/@rjsmall90">https://medium.com/@rjsmall90</a>
                    <br></br>
                    to read some of my technical blogs
                    </p>
                </section>
            </div>
        ); 
    }
}

export default Blogs;