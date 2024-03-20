# E-Banking Project

## Overview

The E-Banking project aims to develop an online banking system that facilitates transactions, account management, and customer service for both customers and employees. The system provides a secure platform for users to perform various banking operations conveniently.

## Entities

### 1. Customer

The Customer entity represents individuals or entities who hold accounts with the bank. Customers interact with the system to manage their accounts, conduct transactions, and access banking services.

#### Attributes

- **CustomerID**: Unique identifier for each customer.
- **Name**: Full name of the customer.
- **DateOfBirth**: Date of birth of the customer.
- **Address**: Residential address of the customer.
- **ContactNumber**: Contact number of the customer.
- **Email**: Email address of the customer.
- **Username**: Unique username chosen by the customer for login.
- **Password**: Secure password chosen by the customer for login.
- **AccountType**: Type of account (e.g., savings, checking, business).
- **AccountNumber**: Unique identifier for the customer's account.
- **Balance**: Current balance in the customer's account.

#### Functionalities

- **Login**: Customers can log in using their username and password.
- **View Account**: Customers can view their account details, including balance and transaction history.
- **Transfer Funds**: Customers can transfer funds between their accounts or to other accounts.
- **Pay Bills**: Customers can pay bills online.
- **Update Profile**: Customers can update their personal information.
- **Change Password**: Customers can change their login password.

### 2. Employee

The Employee entity represents staff members of the bank who have access to administrative functionalities and customer support features.

#### Attributes

- **EmployeeID**: Unique identifier for each employee.
- **Name**: Full name of the employee.
- **DateOfBirth**: Date of birth of the employee.
- **Address**: Residential address of the employee.
- **ContactNumber**: Contact number of the employee.
- **Email**: Email address of the employee.
- **Username**: Unique username chosen by the employee for login.
- **Password**: Secure password chosen by the employee for login.
- **Role**: Role of the employee within the bank (e.g., manager, teller, customer service representative).

#### Functionalities

- **Login**: Employees can log in using their username and password.
- **Manage Accounts**: Employees can view and manage customer accounts.
- **Approve Transactions**: Employees can approve or reject pending transactions.
- **Customer Support**: Employees can provide assistance to customers regarding account-related queries or issues.
- **Generate Reports**: Employees can generate reports on account activities, transactions, etc.
- **Update Profile**: Employees can update their personal information.
- **Change Password**: Employees can change their login password.

## System Architecture

The E-Banking system will be built using a client-server architecture. The backend will be developed using a programming language such as Java or Python, with a relational database (e.g., MySQL) for data storage. The frontend will be designed using HTML, CSS, and JavaScript for a user-friendly interface.

### Components

1. **Frontend**: The user interface accessible to customers and employees through web browsers or mobile applications.
2. **Backend Server**: The server-side logic responsible for processing requests, executing business logic, and interacting with the database.
3. **Database**: Stores customer and employee information, account details, transaction history, etc.
4. **Security Layer**: Implements encryption, authentication, and authorization mechanisms to ensure data security and prevent unauthorized access.

## Conclusion

The E-Banking project aims to provide a convenient and secure platform for customers to perform banking activities online while enabling employees to efficiently manage accounts and provide support. By leveraging modern technologies and best practices, the system will offer a seamless banking experience for all users.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
