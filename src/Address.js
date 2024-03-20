import React, { useState } from 'react';

const IndianStatesAndUTs = [
  "ANDAMANANDNICOBARISLANDS",
  "ANDHRAPRADESH",
  "ARUNACHALPRADESH",
  "ASSAM",
  "BIHAR",
  "CHANDIGARH",
  "CHHATTISGARH",
  "DADRAANDNAGARHAVELIANDDAMANANDDIU",
  "DELHI",
  "GOA",
  "GUJARAT",
  "HARYANA",
  "HIMACHALPRADESH",
  "JAMMUANDKASHMIR",
  "JHARKHAND",
  "KARNATAKA",
  "KERALA",
  "LADAKH",
  "LAKSHADWEEP",
  "MADHYAPRADESH",
  "MAHARASHTRA",
  "MANIPUR",
  "MEGHALAYA",
  "MIZORAM",
  "NAGALAND",
  "ODISHA",
  "PUDUCHERRY",
  "PUNJAB",
  "RAJASTHAN",
  "SIKKIM",
  "TAMILNADU",
  "TELANGANA",
  "TRIPURA",
  "UTTARPRADESH",
  "UTTARAKHAND",
  "WESTBENGAL"
];

function AddressForm(props){
 
  

 
 


  return (
    <section style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Address</h2>
      <form>
      <div className="form-group">
    

        <label htmlFor="city">City name</label>
        <input
          className="form-control"
          type="text"
          id="city"
          value={props.city}
          onChange={(e) => props.setCity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stname">Street name</label>
        <input
          className="form-control"
          type="text"
          id="stname"
          value={props.streetName}
          onChange={(e) => props.setStreetName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="district">District</label>
        <input
          className="form-control"
          type="text"
          id="district"
          value={props.district}
          onChange={(e) => props.setDistrict(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pincode</label>
        <input
          className="form-control"
          type="text"
          id="pincode"
          value={props.pincode}
          onChange={(e) => props.setPincode(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <select
          className="form-control"
          id="state"
          value={props.state}
          onChange={(e) => props.setState(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {IndianStatesAndUTs.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      </form>
    </section>
  );
};

export default AddressForm;
