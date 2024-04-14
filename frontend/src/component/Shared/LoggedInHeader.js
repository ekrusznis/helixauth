// LoggedInHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/helix_logo_white_trans_150.png';
import { Form, Navbar, FormControl, Button, Dropdown } from 'react-bootstrap'; // Assuming you're using React Bootstrap
import { FaQuestionCircle, FaBell } from 'react-icons/fa';
import "./LoggedInHeader.css"

const LoggedInHeader = () => {
  // Dummy function for dropdown selection
  const handleDropdownSelect = (eventKey) => {
    console.log("Selected:", eventKey);
  };

  return (
    <header className="header">
      {/* Left buttons */}
      <div className="left-buttons">
        <Button className="mr-2 account-button">
          Scope: General | Accounts: All Accounts
        </Button>
        <Dropdown onSelect={handleDropdownSelect}>
          <Dropdown.Toggle className='ms-2 account-button'>Last 7 days</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="last7days">Last 7 days</Dropdown.Item>
            <Dropdown.Item eventKey="last30days">Last 30 days</Dropdown.Item>
            <Dropdown.Item eventKey="custom">Custom</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Right content */}
      <div className="right-content">
        <Button className="mr-2">
          <FaQuestionCircle /> Help Center
        </Button>
        <Button className="mr-2">
          <FaBell /> Bell
        </Button>
        <div className="user-profile">
          <div className="profile-circle">TT</div>
        </div>
        <span>DEMO</span>
      </div>
    </header>
  );
};

export default LoggedInHeader;