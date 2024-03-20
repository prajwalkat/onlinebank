import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const ApplyInsurance = () => {
  const [selectedType, setSelectedType] = useState("Select Insurance type");
  const [selectedFrequency, setSelectedFrequency] =
    useState("Select Frequency");
  const [amount, setAmount] = useState(1, 0.0);
  const [otp, setOtp] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Insurance applied successfully!");
  };

  return (
    <div className="App container">
      <h1>Apply Insurance</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="insuranceType">Insurance Type:</label>
        <select
          className="form-control"
          id="insuranceType"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="Select Insurance type">Select Insurance type</option>
          <option value="Motor insurance">Motor insurance</option>
          <option value="Home insurance">Home insurance</option>
          <option value="Life insurance">Life insurance</option>
          <option value="Health insurance">Health insurance</option>
        </select>
        <br />
        <label htmlFor="frequency">Frequency:</label>
        <select
          className="form-control"
          id="frequency"
          value={selectedFrequency}
          onChange={(e) => setSelectedFrequency(e.target.value)}
        >
          <option value="Select Frequency">Select Frequency</option>
          <option value="Annual">Annual</option>
          <option value="Semi-annual">Semi-annual</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <br />
        <label htmlFor="amount">Insurance Amount:</label>
        <input
          className="form-control"
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label htmlFor="otp">Enter OTP:</label>
        <input
          className="form-control"
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
          id="terms"
          checked={isTermsAccepted}
          onChange={(e) => setIsTermsAccepted(e.target.checked)}
        />
        <label htmlFor="terms">I accept Term and conditions</label>
        <br />
        <button type="submit" disabled={!isTermsAccepted}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyInsurance;
