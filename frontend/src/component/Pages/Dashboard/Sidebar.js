import { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar collapseOnSelect expanded={expanded} bg="dark" variant="dark">
      <Button
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="responsive-navbar-nav"
      >
        Toggle
      </Button>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
