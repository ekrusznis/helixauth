// APISecurity.js
import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoggedInHeader from '../../../Shared/LoggedInHeader'; // Make sure the path is correct
import Footer from '../../../Shared/Footer';
import mockData from '../../../../mock_db.json';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import "./Specs.css"
import ApiTable from '../ApiTable/ApiTable';

const Specs = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => setCollapsed(!collapsed);
    // Mock data extraction (replace this with actual API call data when available)
    const { reportData, dashboardCards } = mockData;
    const navigate = useNavigate();

    const chartRef = useRef(null);



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

                    {/* Table Section */}
                    
                  <ApiTable />
                

                <Footer />
              </div>
            
            </div>
          </div>
        </>
      );
};

export default Specs;