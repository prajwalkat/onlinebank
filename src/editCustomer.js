import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import AddressForm from './Address'; // Assuming you have an AddressForm component
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';





const EditUser=()=> {
const url1='http://localhost:8080/customer/editUserDetails';

const history = useHistory();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

const url = `http://localhost:8080/customer/getByID/${sessionStorage.getItem('data')}`;

axios.get(url)
  .then(response1 => {
    console.log('Response Data:', response1.data);
    setName(response1.data.name);
    setEmail(response1.data.email);
    
    setAdhno(response1.data.aadharNo);
    setPanno(response1.data.panNo);
    setMbno(response1.data.mobileNo);

    setUname(response1.data.userName);
    setDob(response1.data.dob);

    // Handle response data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle error here
  });





  const handleSubmit = (e) => {
    e.preventDefault();

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
  
      //  const response =  axios.get('http://localhost:8080/customer/editUserDetails', data);
      //  console.log('Response Data:', response.data);
      // console.log(data);
      toast("Updated Successfully")
      history.push("/")
      
      // Handle successful response here
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
  };

  signUpCustomer();



    // Handle form submission
  };

  return (
    <div className="container" style={{ width: '500px' }}>
      <h1>Edit Profile</h1>
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

       
        {/* Submit button */}
        <Button variant="contained" type="submit">
          EDIT ACCOUNT
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
