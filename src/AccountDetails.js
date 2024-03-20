import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const AccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "",
    customerId: "",
    customerName: "",
    dateOfCreation: "",
    creditScore: "",
    accountType: "",
    accountStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update logic goes here
  };

  return (
    <div className="account-details container">
      <h2>Account Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            className="form-control"
            id="accountNumber"
            name="accountNumber"
            value={accountDetails.accountNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="text"
            className="form-control"
            id="customerId"
            name="customerId"
            value={accountDetails.customerId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            name="customerName"
            value={accountDetails.customerName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfCreation">Date of Creation</label>
          <input
            type="date"
            className="form-control"
            id="dateOfCreation"
            name="dateOfCreation"
            value={accountDetails.dateOfCreation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditScore">Credit score</label>
          <input
            type="text"
            className="form-control"
            id="creditScore"
            name="creditScore"
            value={accountDetails.creditScore}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type</label>
          <input
            type="text"
            className="form-control"
            id="accountType"
            name="accountType"
            value={accountDetails.accountType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountStatus">Account Status</label>
          <input
            type="text"
            className="form-control"
            id="accountStatus"
            name="accountStatus"
            value={accountDetails.accountStatus}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SEARCH
        </button>
        <button type="submit" className="btn btn-success">
          UPDATE
        </button>
        <button type="submit" className="btn btn-info">
          EDIT
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
