import React, { useState } from 'react';
import axios from 'axios';
import { Table, Form, Button, Container, Row, Col } from 'react-bootstrap';

const TransactionHistory = () => {
  const [accountNo, setAccountNo] = useState('');
  const [password, setPassword] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleFetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customer/transactionHistory', {
        params: {
          accountNo: accountNo,
          password: password
        }
      });
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Form.Group controlId="accountNo">
            <Form.Label>Account No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter account number"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              style={{ border: '1px solid #ced4da' }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: '1px solid #ced4da' }}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleFetchTransactions}>Fetch Transactions</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Transaction Type</th>
                <th>Account No</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Receiver Account</th>
                <th>Transaction Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.transactionId}>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.transactionType}</td>
                  <td>{transaction.accountNo}</td>
                  <td>{new Date(transaction.dateTime).toLocaleString()}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.reciverAccount}</td>
                  <td>{transaction.transactionStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionHistory;
