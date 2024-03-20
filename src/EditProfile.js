import React from 'react';
import { Form, Button } from 'react-bootstrap';

class EditProfile extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Edit Profile</h1>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="middleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="mobileNo">
                        <Form.Label>Mobile No:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="city">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="state">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="zipCode">
                        <Form.Label>ZIP code:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>DOB:</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group controlId="aadhaarNumber">
                        <Form.Label>Aadhaar Number:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="panNumber">
                        <Form.Label>PAN NUMBER:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="plotNumber">
                        <Form.Label>plot no / flat no:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="street">
                        <Form.Label>street / building / Society:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        SAVE CHANGES
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditProfile;