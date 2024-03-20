import React from "react";
import "./Loan.css";

const LoanReq = () => {
  return (
 
      <div className="account-details ">
        <div >
          <h1 className="header" style={{paddingTop:"15px "}}>Apply For Loan</h1>
        </div>
        <div className="loan-type">
          <label>Loan Type:</label>
          <select>
            <option>Select Loan type</option>
            <option>Home Loan</option>
            <option>Gold Loan</option>
            <option>Vehicle Loan</option>
            <option>Personal Loans</option>
            <option>Education Loans</option>
            <option>Agricultural Loan</option>
            <option>Business Loans</option>
          </select>
        </div>
        <div className="loan-interest">
          <label>Loan Interest:</label>
          <input type="number" min={0} max={100} />
        </div>
        <div className="loan-amount">
          <label>Loan Amount:</label>
          <input type="number" min={0} />
        </div>
        <div className="due-date">
          <label>Due Date:</label>
          <input type="date" />
        </div>
        <div className="terms-conditions">
          <input type="checkbox" />
          <label>I accept Term and conditions</label>
        </div>
        <button style={{marginLeft:"150px"}}>Request</button>
      </div>
  
  );
};

export default LoanReq;
