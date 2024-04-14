// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import CSS file for styling

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-dark text-white sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Icon to toggle sidebar */}
      <div className="sidebar-toggle-open" onClick={toggleSidebar}>
        <FaTimes size={20} />
      </div>
      {/* Logo */}
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      {/* Dashboard Link */}
      <Nav className="flex-column">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        {/* Section 1 */}
        <div className="section-title">Threats and Vulnerabilities</div>
        <Nav.Link href="#attack_path_analysis">Attack Path Analysis</Nav.Link>
        <Nav.Link href="#external_path_surface">External Path Surface</Nav.Link>
        <Nav.Link href="#vulnerabilities_management">Vulnerabilities Management</Nav.Link>
        {/* Section 2 */}
        <div className="section-title">Posture Management</div>
        <Nav.Link href="#cloud_inventory">Cloud Inventory</Nav.Link>
        <Nav.Link href="#security_posture">Security Posture</Nav.Link>
        <Nav.Link href="#root_cause_analysis">Root Cause Analysis</Nav.Link>
        <Nav.Link href="#compliance_frameworks">Compliance Frameworks</Nav.Link>
        {/* Section 3 */}
        <div className="section-title">Workloads and Data</div>
        <NavLink to="/apisecurity">API Dashboard</NavLink>
        {/* Section 4 */}
        <div className="section-title">Build & Applications</div>
        <Nav.Link href="#ci_cd">CI/CD</Nav.Link>
        {/* Section 5 */}
        <div className="section-title">Management</div>
        <Nav.Link href="#integrations">Integrations</Nav.Link>
        <Nav.Link href="#management">Settings</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;