import React, { useState } from 'react';
import axios from 'axios';

function CheckBalance() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckBalance = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/customer/balance?id=${id}&pass=${password}`);
      setBalance(response.data); // Assuming the response is a single integer
      setLoading(false);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              onClick={handleCheckBalance}
              disabled={loading}
            >
              {loading ? 'Checking Balance...' : 'Check Balance'}
            </button>
          </div>
          <div>
            <h2>Your balance is: {balance !== null ? balance : 'N/A'}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBalance;
