//import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useLocation } from 'react-router-dom';

// import { Button } from "@mui/base";
// import { Button } from "@mui/material";

// m={2} refers to the value of `theme.space[2]`
import { useState ,useEffect  } from "react";
import Button from "@mui/material/Button";
//import { Route } from "react-router-dom/cjs/react-router-dom";
import { Link, Switch, Route } from "react-router-dom";

import AccountDetails from "./AccountDetails.js";
import LoanReq from "./LoanReq.js";
import ApplyInsurance from "./ApplyInsurrance.js";
import AddressForm from "./Address.js";
import TransactionComponent from "./trans.js";
import SignUpForm from "./SignUp.js";
import { Verified } from "@mui/icons-material";
import Dashboard from "./DashboardC.js";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min.js";
import EmployeeDashboard from "./DashboardE.js";
import FAQPage from "./FAQ.js";
import AboutUsPage from "./Aboutus.jsx";
import BenefitPage from "./benefit.js";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [loginAsEmployee, setLoginAsEmployee] = useState(false);
  const [auth, setAuth] =useState(false);
  const [hiddenNumber, setHiddenNumber] = useState(0);
  const [isLoggedInAsEmp, setIsLoggedInAsEmp] = useState(false);
  const [isLoggedInAsCust, setIsLoggedInAsCust] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for form submission here
  };

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (location.pathname === '/login' && action === 'PUSH') {
        window.location.reload();
      }
    });

    return () => {
      unlisten();
    };
  }, [history]);

  
  const handleSubmitForVerification = async (e) => {
    e.preventDefault();
  
    try {
      const data = {
        "userName": uname,
        "password": password
      };
  

      let url = 'http://localhost:8080/customer/SignIn';
      
      if (loginAsEmployee) {
        // If login as employee is selected, change the URL
        url = 'http://localhost:8080/employee/SignIn';
      }else{
        url= 'http://localhost:8080/customer/SignIn';
      }

      const response = await axios.post(url, data);


      console.log('Response Data:', response.data);
      toast("Login Successful!!!");
      setAuth(true);
      history.push('/');
      if(loginAsEmployee){
        setIsLoggedInAsCust(true)
        setIsLoggedInAsEmp(false)
      }else{
        
        setIsLoggedInAsEmp(true)
        setIsLoggedInAsCust(false)

      }
      


      sessionStorage.setItem('data', response.data['id']);
      sessionStorage.setItem("name",response.data['name']);
      let data2=sessionStorage.getItem('data');
      console.log(data2);
      // Handle successful response here
    } catch (error) {
      console.error('Error:', error);
      toast("That an error.");
      // Handle error here
    }
  };
  

  


    // Add your logic for form submission here
  



  return (
    <div>
      
      <div className="container" id="Heading">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Phoenix Bank</span>
   
          </a>
          
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link-active" aria-current="page">
                <Link to="/">
                  <Button variant="outlined">Home</Button>
                </Link>{" "}
            
                <input type="hidden" id="myHiddenNumberField" value={hiddenNumber} />
               
                {isLoggedInAsEmp && (<Link to="/transaction">
          <Button variant="outlined">Transaction</Button>
        </Link>  )}

                {isLoggedInAsEmp && (
        <Link to="/dashboard">
          <Button variant="outlined">Dashboard</Button>
        </Link>
      )}

{isLoggedInAsCust && (
                <Link to="/edashboard">
                  <Button variant="outlined">E Dashboard</Button>{" "}
                </Link>
)}

              </a>
            </li>
            <li className="nav-item">
            <Link to="/benefit">
              <a href="#" className="nav-link">
                Benifits
              </a>
            </Link>     
            </li>
            <li className="nav-item">
            <Link to="/FAQ">
              <a href="#" className="nav-link">
                FAQs
              </a>
              </Link>  
            </li>
            <li className="nav-item">
            <Link to="/aboutUs">
              <a href="#" className="nav-link">
                About
              </a>
            </Link>  
            </li>
            <li>
              <div
                class="col-md-3 text-end"
                style={{ width: "auto", "margin-top": "4px" }}
              >
                <Link to="/login">
                  <Button variant="outlined">Login</Button>{" "}
                </Link>

                <Link to="/signup">
                  <Button variant="contained">Sign-UP</Button>
                </Link>
              </div>
            </li>
          </ul>
        </header>
      </div>

      <Switch>
        <Route path="/benefit">
          <BenefitPage></BenefitPage>
        </Route>
        <Route path="/aboutUs">
          <AboutUsPage></AboutUsPage>
        </Route>
      <Route path="/FAQ">
        <FAQPage></FAQPage>

        </Route>
        <Route path="/transaction">
          <TransactionComponent></TransactionComponent>
        </Route>
        <Route path="/edashboard">
          <EmployeeDashboard auth={auth} setAuth={setAuth}></EmployeeDashboard>
        </Route>
        <Route path="/dashboard">
          <Dashboard authC={auth} setAuth={setAuth}></Dashboard>
        </Route>
        <Route path="/login">
        {auth?<Redirect to="/dashboard" />:
         <div className="container" style={{ width: "500px" }} id="Login-page">
         <form onSubmit={handleSubmitForVerification} method="post">
           {/* <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
           <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
           <ToastContainer />
           <div class="form-floating">
             <input
               type="text"
               class="form-control"
               id="floatingInput"
               placeholder="Enter Username"
               value={uname}
               onChange={(e) => setUname(e.target.value)}
             ></input>
             <label for="floatingInput">User Name</label>
           </div>
           <div class="form-floating">
             <input
               type="password"
               class="form-control"
               id="floatingPassword"
               placeholder="Password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
             ></input>
             <label for="floatingPassword">Password</label>
           </div>

           <div class="form-check text-start my-3">
             <input
               class="form-check-input"
               type="checkbox"
               value="remember-me"
               id="flexCheckDefault"
               onChange={() => setLoginAsEmployee(!loginAsEmployee)}
             ></input>
             <label class="form-check-label" for="flexCheckDefault">
              Login as Employee
             </label>
           </div>
           {/* <Link to="account"> */}
             <button class="btn btn-primary w-100 py-2" type="submit" >
               Sign in
             </button>
           {/* </Link> */}
         </form>
       </div>}  
       
        </Route>

        <Route path="/signup">
          <SignUpForm></SignUpForm>
        </Route>
       

        <Route path="/account" component={AccountDetails} />

        <Route path="/loan">
          <div className="account-details container">
            <div>
              {" "}
              <h1 className="" style={{ paddingTop: "15px " }}>
                Apply For Loan
              </h1>
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

            <button style={{ marginLeft: "150px" }}>Request</button>
          </div>
        </Route>
        <Route path="/ins" component={ApplyInsurance} />

        <Route path="/">
          <div className="container">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  src="https://picsum.photos/400/500"
                  class="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                  style={{ width: "400px", height: "500px" }}
                ></img>
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Bank at your fingertips
                </h1>
               {auth&&<h3>
                
                Welcome, {sessionStorage.getItem("name")}

                </h3>} 
                <p class="lead">
                Phoenix Bank is a leading financial institution committed to providing exceptional banking services to individuals and businesses alike. With a focus on innovation, security, and customer satisfaction, we strive to be your trusted partner in achieving your financial goals.

Our mission is to empower our customers with convenient banking solutions, personalized support, and advanced technology to help them succeed in today's dynamic marketplace.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/aboutUs"> 
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                  >
                    Learn more
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Route>
       
      </Switch>

      <div className="container" id="footer">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
