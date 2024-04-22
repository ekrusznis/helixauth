import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, Accordion } from 'react-bootstrap';
import './Help.css'; // Make sure to create a corresponding CSS file
import LoggedInHeader from '../../Shared/LoggedInHeader';
import space from '../../../assets/spacee-scaled.jpg'
const Help = () => {
  const categories = ['Category 01', 'Category 02', 'Category 03', 'Category 04'];
  const images = [
    { src: 'https://unsplash.com/photos/WLxQvbMyfas', alt: 'Space' },
    { src: 'https://unsplash.com/photos/L8Qu1sXOgac', alt: 'Business Meeting' },
    { src: 'https://unsplash.com/photos/sGblmsizgls', alt: 'Circuit Board' }
  ];


  return (
    <div className="App">
      <LoggedInHeader />

      <div className='page'>

          <Col md={2} id="sidebar">
            <Accordion defaultActiveKey="0" alwaysOpen>
              {categories.map((category, index) => (
                <Accordion.Item eventKey={index.toString()} className='menu-item'>
                  <Accordion.Header>{category}</Accordion.Header>
                  <Accordion.Body className='menu-content'>
                    <Nav className="flex-column">
                      <Nav.Link href="#">Startup</Nav.Link>
                      <Nav.Link href="#">Setting</Nav.Link>
                      <Nav.Link href="#">Reports</Nav.Link>
                    </Nav>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <div id="page-content">

              <div className='title-block'>

                  <h2>Startup</h2>


                  <h3>Category 02</h3>

              </div>


              <div className='content-block'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>


              <div>
                <Row className='card-row'>
                  {images.map((image, index) => (
                    <Col md={4} key={index}>
                      <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={space} className="card-background-image" alt="Card image" />
                        <button className="card-button">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 1-.5-.5V5.707l-2.147 2.146a.5.5 0 0 1-.708-.708l3-3z"/>
                            <path fill-rule="evenodd" d="M7.5 4.5a.5.5 0 0 1 1 0v6.293l2.146-2.147a.5.5 0 0 1 .708.708l-3 3z"/>
                          </svg>
                        </button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>      
          </div>

      </div>
      
      <footer className="footer">
        <p>Copyright © 2024 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;