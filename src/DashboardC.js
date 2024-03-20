import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import TransactionComponent from './trans';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignOutButton from './logout';
import TransactionHistory from './viewhistory';
import CheckBalance from './GetBalance';
import EditUser from './editCustomer';

// Import your other components for ViewHistory, MakeTransactions, EditProfile, Logout


  

function Dashboard(props){
  const [activeTab, setActiveTab] = useState('View History'); // default active tab

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  



  return (
    <Container fluid>
      <Row>
        <Col sm={3} className="">
          <h3>Dashboard</h3>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleTabChange('View History')} className={activeTab === 'View History' ? 'active' : ''}>View History</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('Make Transactions')} className={activeTab === 'Make Transactions' ? 'active' : ''}>Make Transactions</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('Edit Profile')} className={activeTab === 'Edit Profile' ? 'active' : ''}>Edit Profile</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('Check Balance')} className={activeTab === 'Check Balance' ? 'active' : ''}>Check Balance</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('Logout')} className={activeTab === 'Logout' ? 'active' : ''}>Logout</Nav.Link>
          </Nav>
        </Col>
        <Col sm={9}>
          {activeTab === 'View History' && <TransactionHistory></TransactionHistory>}
          {activeTab === 'Make Transactions' && <TransactionComponent></TransactionComponent>}
          {activeTab === 'Edit Profile' && <EditUser></EditUser>}
          {activeTab === 'Check Balance' && <CheckBalance></CheckBalance>}
          {activeTab === 'Logout' && <SignOutButton  setAuth={props.setAuth} auth={props.auth}></SignOutButton>}
        </Col>
      </Row>
    </Container>
  );
};

// Define your other components: ViewHistory, MakeTransactions, EditProfile, Logout

const ViewHistory = () => {
  return <h4>View History Component</h4>;
};

const MakeTransactions = () => {
  return <h4>Make Transactions Component</h4>;
};

const EditProfile = () => {
  return <h4>Edit Profile Component</h4>;
};



export default Dashboard;
