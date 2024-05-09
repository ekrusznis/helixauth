// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import CSS file for styling
import logo from '../../../assets/helix_logo_white_trans.png'

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`text-white sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Icon to toggle sidebar */}
      <div className="sidebar-toggle-open" onClick={toggleSidebar}>
        <FaTimes size={20} />
      </div>
      {/* Logo */}
          <div className="logo" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '60%', height: 'auto' }}/>
      </div>
      {/* Dashboard Link */}
      <Nav className="flex-column" >
        {/* Section 2 */}
        <div className="section-title">Posture Management</div>
        <Nav.Link href="#cloud_inventory">Cloud Inventory</Nav.Link>
        <Nav.Link href="#security_posture">Security Posture</Nav.Link>
        <Nav.Link href="#root_cause_analysis">Root Cause Analysis</Nav.Link>
        <Nav.Link href="#compliance_frameworks">Compliance Frameworks</Nav.Link>
        {/* Section 3 */}
        <div className="section-title">Workloads and Data</div>
        <NavLink className='nav-link'to="/apisecurity">API Dashboard</NavLink>
        <NavLink className='nav-link'to="/specs">Specs</NavLink>
        <NavLink className='nav-link'to="/roles">Roles</NavLink>
        {/* Section 4 */}
        <div className="section-title" style={{ display: 'flex', justifyContent: 'center' }}>Build & Applications</div>
        <Nav.Link href="#cicd" style={{ display: 'flex', justifyContent: 'center' }}>CI/CD</Nav.Link>
        {/* Section 5 */}
        <div className="section-title">Management</div>
        <Nav.Link href="#integrations">Integrations</Nav.Link>
        <NavLink className='nav-link'to="/settings">Settings</NavLink>
      </Nav>
    </div>
  );
};

export default Sidebar;