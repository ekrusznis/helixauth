// APISecurity.js
import React, { useRef, useEffect, useState } from 'react';
import { Card, Table, Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoggedInHeader from '../../../Shared/LoggedInHeader';
import Footer from '../../../Shared/Footer';
import mockData from '../../../../mock_db.json';
import logo from '../../../../assets/helix_logo_white_trans_150.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Doughnut } from 'react-chartjs-2'; // Import Doughnut from Chart.js
import Sidebar from '../Sidebar';
import { Doughnut } from 'react-chartjs-2';
import "./APISecurity.css"
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ApiTable from '../ApiTable/ApiTable';
//import { validateToken } from '../../../ApiClient';

const APISecurity = () => {

  Chart.register(ArcElement, Tooltip, Legend);

    const specsData = {
      labels: ['APIs with specs', 'APIs without specs'],
        datasets: [{
          label: 'Specs',
          data: [4, 6],
          backgroundColor: ['#4e73df', '#1cc88a'],
          hoverOffset: 4,
          borderWidth: 0,
        }],
    };

    const endpointsData = {
        labels: ['Valid Endpoints'],
        datasets: [{
            label: 'API Endpoints',
            data: [22],
            backgroundColor: ['#f6c23e'],
            hoverOffset: 4,
            borderWidth: 0,
        }],
    };

    const riskData = {
        labels: ['Critical', 'High', 'Medium', 'Low', 'Info'],
        datasets: [{
            label: 'Risk Findings',
            data: [27, 14, 358, 34, 44],
            backgroundColor: ['#e74a3b', '#f6c23e', '#4e73df', '#1cc88a', '#36b9cc'],
            hoverOffset: 4,
            borderWidth: 0,
        }],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
    };

    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => setCollapsed(!collapsed);
    // Mock data extraction (replace this with actual API call data when available)
    const { reportData, dashboardCards } = mockData;
    const navigate = useNavigate();
//    const token = localStorage.getItem('sessionToken');

    const chartRef = useRef(null);

//  useEffect(() => {
//    const validateSessionToken = async () => {
//      try {
//        const validationResponse = await validateToken(token);
//        // Proceed if token is valid
//        console.log('Token is valid:', validationResponse);
//      } catch (error) {
//        // Redirect to login or handle token validation failure
//        console.error(error.message);
//        // navigate('/login'); Uncomment this if you have 'navigate' from react-router
//      }
//    };
//
//    validateSessionToken();
//  }, [token]);

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
                    <p className="title">API Security</p>

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
                    <h3 className='text-white'>Overview</h3>

                    {/* Boxes Section */}
                    <div className="overview-container">
                      <div className="card specs">
                        <div className='title-box'>
                            <p className="card-title">Specs</p>
                        </div>

                        <div className='chart-box'>
                            <Doughnut data={specsData} options={chartOptions}/>
                        </div>
                          
                        <div className="card-info">
                        
                            <div className="card-stats">
                                <div className="stat">
                                    <span className="dot with-specs"></span>APIs with specs
                                </div>
                                <div className="stat">
                                    <span className="dot without-specs"></span>APIs without specs
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="card endpoints">
                        <div className='title-box'>
                            <div className="card-title">API Endpoints</div>
                        </div>

                        <div className='chart-box'>
                            <Doughnut data={endpointsData} options={chartOptions}/>
                        </div>
                          
                          <div className="card-info">
                              <div className="card-stats">
                                  <div className="stat">
                                      <span className="dot valid-endpoints"></span>Valid Endpoints
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="card risks">
                        <div className='title-box'>
                            <div className="card-title">Risk Findings</div>
                        </div>

                        <div className='chart-box'>
                        <Doughnut data={riskData} options={chartOptions}/>
                        </div>
                          
                          <div className="card-info">
                              <div className="card-stats">
                                  {/* Generate stats based on the riskData */}
                              </div>
                          </div>
                      </div>
                    </div>
                  <ApiTable />
                

                <Footer />
              </div>
            
            </div>
          </div>
        </>
      );
};

export default APISecurity;