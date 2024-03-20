import React, { useState } from 'react';
import { Form, Button, Table, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SearchTransactions() {
  const [searchType, setSearchType] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    let url = '';
    if (searchType === 'all') {
      url = 'http://localhost:8080/employee/transactionHistory';
    } else if (searchType === 'id') {
      url = `http://localhost:8080/employee/transactionHistory/${searchInput}`;
    }

    axios.get(url)
      .then(response => {
        setSearchResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Form.Check
            type="radio"
            label="All"
            name="searchType"
            id="allRadio"
            value="all"
            checked={searchType === 'all'}
            onChange={() => setSearchType('all')}
          />
          <Form.Check
            type="radio"
            label="By ID"
            name="searchType"
            id="idRadio"
            value="id"
            checked={searchType === 'id'}
            onChange={() => setSearchType('id')}
          />
          {searchType === 'id' && (
            <Form.Control
              type="number"
              placeholder="Enter ID"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          )}
          <Button variant="primary" className="mt-3" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Transaction Type</th>
                <th>Account No</th>
                <th>Date Time</th>
                <th>Amount</th>
                <th>Receiver Account</th>
                <th>Transaction Status</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.map(transaction => (
                <tr key={transaction.transactionId}>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.transactionType}</td>
                  <td>{transaction.accountNo}</td>
                  <td>{transaction.dateTime}</td>
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
}

export default SearchTransactions;
