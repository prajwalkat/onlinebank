import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TransactionComponent = () => {
  const [transactionType, setTransactionType] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [amount, setAmount] = useState('');
  const [password, setPassword] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

  const handleTransaction = (type) => {
    setTransactionType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        let apiUrl = '';

        if (transactionType === 'Deposit') {
            apiUrl = `http://localhost:8080/customer/deposit?accountId=${accountNo}&amount=${amount}&password=${password}`;
        } else if (transactionType === 'Withdraw') {
            apiUrl = `http://localhost:8080/customer/withDraw?accountId=${accountNo}&amount=${amount}&password=${password}`;
        } else if (transactionType === 'Transfer') {
            apiUrl = `http://localhost:8080/customer/fundTransfer?fromAccountId=${accountNo}&toAccountId=${recipientAccount}&amount=${amount}&password=${password}`;
        }

        const response = await axios.post(apiUrl);

        console.log('Response Data:', response.data);
        // Handle successful response here
        toast.success('Transaction successful!', { autoClose: 3000 });

        // Reset fields
        setAccountNo('');
        setAmount('');
        setPassword('');
        setRecipientAccount('');

    } catch (error) {
        console.error('Error:', error);
        // Handle error here
        toast.error('Transaction failed. Please try again later.', { autoClose: 3000 });
    }
};


  let headingText = '';
  if (transactionType === 'Deposit') {
    headingText = 'Deposit Funds';
  } else if (transactionType === 'Withdraw') {
    headingText = 'Withdraw Funds';
  } else if (transactionType === 'Transfer') {
    headingText = 'Transfer Funds';
  }

  return (
    <div style={{ display: 'flex', width: "100%" }} className='container'>
      <div>
        <button
          onClick={() => handleTransaction('Deposit')}
          style={{ marginLeft: '20px',display:'block' }}
          className='btn btn-primary btn-block mb-2'
        >
          Deposit
        </button>
        <button
          onClick={() => handleTransaction('Withdraw')}
          style={{ marginLeft: '20px',display:'block' }}
          className='btn btn-primary btn-block mb-2'
        >
          Withdraw
        </button>
        <button
          onClick={() => handleTransaction('Transfer')}
          style={{ marginLeft: '20px',display:'block' }}
          className='btn btn-primary btn-block mb-2'
        >
          Transfer
        </button>
      </div>

      <div className="col-8" style={{padding:'20px'}}>
        {transactionType && (
          <div>
            <h3>{headingText}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="accountNo" className="form-label">Your Account No.:</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNo"
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  required
                />
              </div>
              {transactionType === 'Transfer' && (
                <div className="mb-3">
                  <label htmlFor="recipientAccount" className="form-label">Recipient Account:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipientAccount"
                    value={recipientAccount}
                    onChange={(e) => setRecipientAccount(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount:</label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
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
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionComponent;
