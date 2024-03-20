import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Container>
        <Row>
          <Col>
            <h1>About Phoenix Bank</h1>
            <p>Phoenix Bank is a leading financial institution committed to providing exceptional banking services to individuals and businesses alike. With a focus on innovation, security, and customer satisfaction, we strive to be your trusted partner in achieving your financial goals.</p>
            <p>Our mission is to empower our customers with convenient banking solutions, personalized support, and advanced technology to help them succeed in today's dynamic marketplace.</p>
            <h2>Our Values</h2>
            <ul>
              <li><strong>Integrity:</strong> We uphold the highest ethical standards in all our interactions.</li>
              <li><strong>Excellence:</strong> We continuously strive for excellence in everything we do.</li>
              <li><strong>Innovation:</strong> We embrace innovation to deliver cutting-edge banking solutions.</li>
              <li><strong>Customer Focus:</strong> We prioritize the needs and satisfaction of our customers.</li>
              <li><strong>Community Engagement:</strong> We are dedicated to giving back to the communities we serve.</li>
            </ul>
            <h2>Our Team</h2>
            <p>At Phoenix Bank, our team is comprised of dedicated professionals with extensive experience in the banking industry. We are passionate about helping our customers succeed and are committed to providing superior service and support.</p>
            <p>Together, we work tirelessly to ensure that Phoenix Bank remains at the forefront of the financial services industry, delivering innovative solutions and unparalleled value to our customers.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
