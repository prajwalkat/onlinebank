import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

function SignOutButton(props){
  const history = useHistory();
  const handleSignOut = () => {
    axios.post('http://localhost:8080/customer/SignOut')
      .then(response => {
        console.log('Sign Out Successful');
        toast.success('Sign Out Successful');
        props.setAuth(false);
        sessionStorage.removeItem('data');
        history.push('/login');
        
        // You can add further actions upon successful sign-out if needed
      })
      .catch(error => {
        console.error('Error signing out:', error);
        toast.error('Error signing out');
        // You can handle errors appropriately here
      });
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
