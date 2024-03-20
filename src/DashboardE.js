import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Search1 from './CustomerSerach.js';
import SearchTransactions from './TransactationHistory.js';
import { useHistory } from 'react-router-dom';

// Import your other components for Employee components

function EmployeeDashboard(props) {
  const [activeTab, setActiveTab] = useState('View Tasks'); // default active tab
  const history = useHistory();
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleLogout = () => {
    props.setAuth(false);
    history.push('/login');
  };
  

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <h3>Employee Dashboard</h3>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleTabChange('View Transaction')} className={activeTab === 'View Transaction' ? 'active' : ''}>View Transaction</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('Search Customer')} className={activeTab === 'Search Customer' ? 'active' : ''}>Search Customer</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('Logout')} className={activeTab === 'Logout' ? 'active' : ''}>Logout</Nav.Link>
          </Nav>
        </Col>
        <Col sm={9}>
        
          {activeTab === 'Logout' && <button  onClick={handleLogout}>Logout.....</button>}
          {activeTab === 'Search Customer' && <div>
          <Search1></Search1>
          </div>}
          {activeTab === 'View Transaction' && <SearchTransactions></SearchTransactions>}
        </Col>
      </Row>
    </Container>
  );
};

// Define your other components: ViewTasks, SubmitTimesheet, ViewPayroll, EditProfile, Logout

const ViewTasks = () => {
  return <h4>View Tasks Component</h4>;
};

const SubmitTimesheet = () => {
  return <h4>Submit Timesheet Component</h4>;
};

const ViewPayroll = () => {
  return <h4>View Payroll Component</h4>;
};

const EditProfile = () => {
  return <h4>Edit Profile Component</h4>;
};



export default EmployeeDashboard;
