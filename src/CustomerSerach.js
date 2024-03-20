import React, { useState } from 'react';
import axios from 'axios';

const Search1 = () => {
  const [searchType, setSearchType] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchResult2, setSearchResult2] = useState([]);
  

  const handleSearch = () => {
    let url = '';
    if (searchType === 'all') {
      url = 'http://localhost:8080/employee/allCustomers';
    } else if (searchType === 'id') {
      url = `http://localhost:8080/employee/customerBy/${searchInput}`;
    } else if (searchType === 'name') {
      url = `http://localhost:8080/employee/CustomerByName/Bob Johnson`;
    }
    if(searchType === 'all'){
      axios.get(url)
      .then(response => {
        setSearchResult2(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }else{

    axios.get(url)
      .then(response => {
        setSearchResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="searchType"
              id="allRadio"
              value="all"
              checked={searchType === 'all'}
              onChange={() => setSearchType('all')}
            />
            <label className="form-check-label" htmlFor="allRadio">
              All
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="searchType"
              id="idRadio"
              value="id"
              checked={searchType === 'id'}
              onChange={() => setSearchType('id')}
            />
            <label className="form-check-label" htmlFor="idRadio">
              By Account ID
            </label>
            {searchType === 'id' && (
              <input
                type="text"
                className="form-control"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            )}
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="searchType"
              id="nameRadio"
              value="name"
              checked={searchType === 'name'}
              onChange={() => setSearchType('name')}
            />
            <label className="form-check-label" htmlFor="nameRadio">
              By Name
            </label>
            {searchType === 'name' && (
              <input
                type="text"
                className="form-control"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            )}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {searchType=='all'?
      <div className="row mt-4">
      <div className="col">
        {searchResult2 && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Aadhar No</th>
                <th>PAN No</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>User Name</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {searchResult2.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.aadharNo}</td>
                  <td>{employee.panNo}</td>
                  <td>{employee.mobileNo}</td>
                  <td>{employee.email}</td>
                  <td>{employee.userName}</td>
                  <td>{employee.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>  
    </div>
    
        :
        <div className="row mt-4">
        <div className="col">
          {searchResult && (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Aadhar No</th>
                  <th>PAN No</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>User Name</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{searchResult.id}</td>
                  <td>{searchResult.name}</td>
                  <td>{searchResult.aadharNo}</td>
                  <td>{searchResult.panNo}</td>
                  <td>{searchResult.mobileNo}</td>
                  <td>{searchResult.email}</td>
                  <td>{searchResult.userName}</td>
                  <td>{searchResult.dob}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>}
      
    </div>
  );
}

export default Search1;
