// APISecurity.js
import React, { useState } from 'react';
import { Card, Table, Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoggedInHeader from '../../../Shared/LoggedInHeader'; // Make sure the path is correct
import Footer from '../../../Shared/Footer';
import mockData from '../../../../mock_db.json';
import logo from '../../../../assets/helix_logo_white_trans_150.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Doughnut } from 'react-chartjs-2'; // Import Doughnut from Chart.js
import Sidebar from '../Sidebar';

import "./APISecurity.css"

const APISecurity = () => {

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
    
                <div className="api-security-page">
                    {/* Header */}
                    <h2>API Security</h2>

                    {/* Navigation Bar */}
                    <nav className="navigation-bar">
                        <ul>
                        <li>All APIs</li>
                        <li>Internal APIs</li>
                        <li>Externally Exposed</li>
                        <li>Third Party APIs</li>
                        </ul>
                    </nav>

                    {/* Overview Title */}
                    <h3>Overview</h3>

                    {/* Boxes Section */}
                    <div className="boxes-section">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    {/* Table Component */}
                    <div className="table-component">
                        {/* Placeholder for table component */}
                    </div>

                </div>
  
                

                <Footer />
              </div>
            
          </div>
          
        </>
      );
};

export default APISecurity;