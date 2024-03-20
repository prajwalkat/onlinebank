import React, { useState } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 const [withdrawAmount, setWithdrawAmount] = useState('');
 const [otp, setOtp] = useState('');
 const [withdrawTo, setWithdrawTo] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
 };

 return (
    <div className="App, container" >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="withdrawAmount" className="form-label">Withdraw Amount</label>
          <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter amount" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">Enter OTP</label>
          <input type="text" className="form-control" id="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="withdrawTo" className="form-label">Withdraw To</label>
          <input type="text" className="form-control" id="withdrawTo" placeholder="Enter VPA or bank account" value={withdrawTo} onChange={(e) => setWithdrawTo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Enter Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
 );
}

export default App;