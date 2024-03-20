import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function BenefitPage() {
  return (
    <div className="bg-light">
      <Container className="py-5">
        <h2 className="text-center mb-5">Benefits of Banking with Phoenix Bank</h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="bi bi-shield-check h1 text-primary mb-3"></i>
              <h3>Secure Transactions</h3>
              <p>With our state-of-the-art security features, your transactions are always safe and secure.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="bi bi-clock-history h1 text-primary mb-3"></i>
              <h3>Convenience</h3>
              <p>Access your accounts anytime, anywhere with our convenient online banking services.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="bi bi-currency-exchange h1 text-primary mb-3"></i>
              <h3>Competitive Rates</h3>
              <p>Enjoy competitive interest rates on savings accounts, loans, and more.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="bi bi-credit-card h1 text-primary mb-3"></i>
              <h3>Rewards Program</h3>
              <p>Earn rewards points for every transaction you make with your Phoenix Bank credit card.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="bi bi-people h1 text-primary mb-3"></i>
              <h3>Excellent Customer Service</h3>
              <p>Our dedicated customer service team is here to assist you with any inquiries or issues you may have.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="bi bi-lock-fill h1 text-primary mb-3"></i>
              <h3>Privacy Protection</h3>
              <p>Your personal and financial information is always kept private and confidential.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BenefitPage;
