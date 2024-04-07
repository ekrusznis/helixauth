import React, { useState } from 'react';
import { Card, Table, Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoggedInHeader from '../../Shared/LoggedInHeader'; // Make sure the path is correct
import Footer from '../../Shared/Footer';
import mockData from '../../../mock_db.json';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
  // Mock data extraction (replace this with actual API call data when available)
  const { reportData, dashboardCards } = mockData;
  const navigate = useNavigate();

  return (
    <>
      {/* LoggedInHeader component added here */}
      <LoggedInHeader />
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className={`bg-dark text-white sidebar ${collapsed ? "sidebar-collapsed" : ""}`}>
          {/* Icon to toggle sidebar */}
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            {collapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
          </div>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/settings")}>Settings</Nav.Link>
            <Nav.Link onClick={() => navigate("/help")}>Help Wiki</Nav.Link>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
