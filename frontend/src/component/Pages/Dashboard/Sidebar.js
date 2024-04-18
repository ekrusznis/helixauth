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
        <div className="section-title" style={{ display: 'flex', justifyContent: 'center' }}>HELIX AUTH</div>
        <Nav.Link href="#security_posture" style={{ display: 'flex', justifyContent: 'center' }}>Security Roles</Nav.Link>
        <Nav.Link href="#root_cause_analysis" style={{ display: 'flex', justifyContent: 'center' }}>Specs</Nav.Link>
        <Nav.Link href="#compliance_frameworks" style={{ display: 'flex', justifyContent: 'center' }}>Compliance</Nav.Link>
        {/* Section 4 */}
        <div className="section-title" style={{ display: 'flex', justifyContent: 'center' }}>Build & Applications</div>
        <Nav.Link href="#ci_cd" style={{ display: 'flex', justifyContent: 'center' }}>CI/CD</Nav.Link>
        {/* Section 5 */}
        <div className="section-title" style={{ display: 'flex', justifyContent: 'center' }}>Management</div>
        <Nav.Link href="#integrations" style={{ display: 'flex', justifyContent: 'center' }}>Integrations</Nav.Link>
        <Nav.Link href="/settings" style={{ display: 'flex', justifyContent: 'center' }}>Settings</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;