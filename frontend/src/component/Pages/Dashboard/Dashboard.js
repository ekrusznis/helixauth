import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Table } from 'react-bootstrap';
import Header from '../../Shared/Header';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';
import axios from 'axios';
import { dashboardData } from '../../../ApiClient';

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
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

      <div className="container mt-4">
        <div className="row">
          {/* Cards with Doughnut Graphs */}
          <div className="col-md-4 mb-4">
            <div className="card">
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
            </div>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
                <th>Column 6</th>
                <th>Column 7</th>
                <th>Column 8</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through your data here to render table rows */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
