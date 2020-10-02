import React from 'react';
import { Col, Container, Row,  } from 'react-bootstrap';

import Home from './component/home/Home';
import Footer from './component/footer/footer';



function App() {
  return (
    <div id="App">
      <Container>
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
