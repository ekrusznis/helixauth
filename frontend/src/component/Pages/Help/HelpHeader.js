import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/helix_logo_white_trans_150.png';
import { Form, Navbar, FormControl, Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap

const HelpHeader = () => {
  const headerStyle = {
    backgroundColor: '#1b3b57', // Primary color background
    color: 'white', // Text color
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-between', // Space out the logo and the form
    alignItems: 'center', // Center items vertically
    padding: '0.5rem 1rem', // Add some padding around the elements
  };
  const formStyle = {
    display: 'flex', // Align form elements inline
    width: '100%', // Use full width to allow centering
    maxWidth: '600px', // Maximum width of the form
  };
  const inputStyle = {
    flexGrow: 1, // Allow the input to grow and fill the space
    marginRight: '0.5rem', // Add some space between the input and the button
  };

  return (
    <Navbar style={headerStyle} expand="lg">
       <div className="sticky-logo logo-area">
         <Link to="/#">
          <img src={logo} alt="logo" />
         </Link>
       </div>
      <Form inline style={formStyle}>
        <FormControl type="text" placeholder="Search Help Articles" style={inputStyle} />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};

export default HelpHeader;
