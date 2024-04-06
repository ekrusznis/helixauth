import React, { useState } from 'react';
import { Button, Card, Table, Nav } from 'react-bootstrap';
import Header from '../../Shared/Header';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';
import mockData from '../../../mock_db.json';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
  // Mock data extraction (replace this with actual API call data when available)
  const { reportData, dashboardCards } = mockData;

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className={`bg-dark text-white sidebar ${collapsed ? "collapsed" : ""}`}>
        <Button onClick={toggleSidebar} className="m-2">Toggle</Button>
        <Nav className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>

      {/* Page Content */}
      <div className="page-content-wrapper flex-grow-1">
        <div className="container-fluid">
          <h1 className="mt-4">Dashboard</h1>
          <div className="row">
            {/* Cards with Doughnut Graphs */}
            {dashboardCards.map((card, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    {/* Insert Chart Component Here, use card.data for the chart data */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          {/* Scrollable Table */}
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Path</th>
                  <th>Type</th>
                  <th>Roles</th>
                  <th>Transactions</th>
                  <th>Hits</th>
                  <th>Labels</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{item.path}</td>
                    <td>{item.type}</td>
                    <td>{item.roles.join(', ')}</td>
                    <td>{item.transactions}</td>
                    <td>{item.hits}</td>
                    <td>{item.labels.join(', ')}</td>
                    <td>
                      {/* Action Dropdown */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
                <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
