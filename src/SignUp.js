import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import AddressForm from './Address'; // Assuming you have an AddressForm component
import axios from 'axios';
import { toast } from 'react-toastify';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [cnfPassword, setCnfPassword] = useState('');
const [dob, setDob] = useState('');
const [adhno, setAdhno] = useState('');
const [uname, setUname] = useState('');
const [panno, setPanno] = useState('');
const [mbno, setMbno] = useState('');
const [city, setCity] = useState();
const [streetName, setStreetName] = useState('');
const [district, setDistrict] = useState('');
const [pincode, setPincode] = useState('');
const [state, setState] = useState('');




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("cnf password",cnfPassword);
    console.log("Date of Birth:", dob);
    console.log("Adhar No.:", adhno);
    console.log("Pan Card No.:", panno);
    console.log("Mobile No.:", mbno);
    console.log('City:', city);
    console.log('Street Name:', streetName);
    console.log('District:', district);
    console.log('Pincode:', pincode);
    console.log('State:', state);
    
  // axios.get('http://localhost:8080/employee/AllCustomers')
  // .then(response => {
  //   // Handle successful response
  //   console.log('Response Data:', response.data);
  //   // Do something with the response data
  // })
  // .catch(error => {
  //   // Handle error
  //   console.error('Error:', error);
  //   // Do something with the error
  // });

  const signUpCustomer =  () => {
    try {
      const data = {
        "name": name,
        "aadharNo": adhno,
        "panNo": panno,
        "mobileNo": mbno,
        "email": email,
        "userName": uname,
        "password": password,
        "address": {
          "streetName": streetName,
          "cityName": city,
          "district": district,
          "pinCode": pincode,
          "stateName": state
        },
        "dob": dob
      };
  
       const response =  axios.post('http://localhost:8080/customer/SignUp', data);
       console.log('Response Data:', response.data);
      console.log(data);
      toast("Created Successfully...");
      // Handle successful response here
    } catch (error) {
      console.error('Error:', error);
      toast("There's an error...");
      // Handle error here
    }
  };

  signUpCustomer();



    // Handle form submission
  };

  return (
    <div className="container" style={{ width: '500px' }}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <label className="form-label" htmlFor="name">
          Full Name
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

<label htmlFor="uname">User Name</label>
              <input
                className="form-control"
                type="text"
                id="uname"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                required
              />    

              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label htmlFor="cnfpassword">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                id="cnfpassword"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
                required
              />

<label htmlFor="dob">Date of Birth</label>
              <input
                className="form-control"
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />

<label htmlFor="adhno">Adhar No.</label>
              <input
                className="form-control"
                type="number"
                id="adhno"
                value={adhno}
                onChange={(e) => setAdhno(e.target.value)}
                required
              />

<label htmlFor="panno">Pan Card No.</label>
              <input
                className="form-control"
                type="number"
                id="panno"
                value={panno}
                onChange={(e) => setPanno(e.target.value)}
                required
              />

<label htmlFor="mbno">Mobile No.</label>
              <input
                className="form-control"
                type="number"
                id="mbno"
                value={mbno}
                onChange={(e) => setMbno(e.target.value)}
                required
              />

<AddressForm
  city={city}
  setCity={setCity}
  streetName={streetName}
  setStreetName={setStreetName}
  district={district}
  setDistrict={setDistrict}
  pincode={pincode}
  setPincode={setPincode}
  state={state}
  setState={setState}
/>

        {/* Agreement checkbox */}
        <div className="mb-3 form-check">
          <label htmlFor="terms">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            I have read and agree to Terms & Conditions
          </label>
        </div>
        {/* Submit button */}
        <Button variant="contained" type="submit">
          CREATE ACCOUNT
        </Button>
      </form>
      <div className="already-account">
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
