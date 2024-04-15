import React, { useState } from 'react';
import { Card, Table, Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoggedInHeader from '../../Shared/LoggedInHeader'; // Make sure the path is correct
import Footer from '../../Shared/Footer';
import mockData from '../../../mock_db.json';
import logo from '../../../assets/helix_logo_white_trans_150.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Doughnut } from 'react-chartjs-2'; // Import Doughnut from Chart.js
import Sidebar from './Sidebar';

import './Dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
  // Mock data extraction (replace this with actual API call data when available)
  const { reportData, dashboardCards } = mockData;
  const navigate = useNavigate();

  return (
    <>
      
      <div className="dashboard-container">


          <div className={`sidebar-toggle ${collapsed ? '' : 'hide'}`} onClick={toggleSidebar}>
            <FaBars size={20} />
          </div>

          
          <Sidebar collapsed={collapsed}  toggleSidebar={toggleSidebar}/>
       

          <div className={`page-content-wrapper ${collapsed ? 'collapsed' : ''}`}>

            <LoggedInHeader />

            <h1 className="mt-4">Dashboard</h1>
            <div className="container-fluid">
              <div className="row">
                {dashboardCards.map((card, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        {/* Integrate Chart.js here */}
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>

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
            <Footer />
          </div>
        
      </div>
      
    </>
  );
};

export default Dashboard;
