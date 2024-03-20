import React from 'react';

const FAQPage = () => {
  return (
    <section>
      <h2 className="text-center mb-4 pb-2  fw-bold" style={{ fontSize: '2.5rem', color: 'black' }}>FAQ</h2>
      <p className="text-center mb-5" style={{ color: 'black' }}>
        Find answers to the most frequently asked questions below.
      </p>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h4 className="mb-3 " style={{ fontSize: '1.5rem', color: 'black' }}><i className="far fa-credit-card  pe-2"></i> How do I apply for a credit card with Phoenix Bank?</h4>
          <p style={{ color: 'black' }}>
            To apply for a credit card with Phoenix Bank, visit our nearest branch or apply online through our website. Ensure you have all necessary identification and financial documents ready.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h4 className="mb-3 " style={{ fontSize: '1.5rem', color: 'black' }}><i className="fas fa-exchange-alt  pe-2"></i> Can I transfer money internationally using Phoenix Bank?</h4>
          <p style={{ color: 'black' }}>
            Yes, Phoenix Bank offers international money transfer services. You can initiate international transfers online through our secure banking portal or visit any of our branches for assistance.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h4 className="mb-3 " style={{ fontSize: '1.5rem', color: 'black' }}><i className="fas fa-money-check-alt  pe-2"></i> How do I check my account balance?</h4>
          <p style={{ color: 'black' }}>
            You can check your account balance anytime using Phoenix Bank's online banking portal, mobile app, or by visiting our ATMs.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h4 className="mb-3 " style={{ fontSize: '1.5rem', color: 'black' }}><i className="fas fa-user-lock  pe-2"></i> How do I reset my online banking password?</h4>
          <p style={{ color: 'black' }}>
            To reset your online banking password, go to our website's login page and follow the instructions for password reset. You may need to verify your identity using security questions or a verification code.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h4 className="mb-3 " style={{ fontSize: '1.5rem', color: 'black' }}><i className="fas fa-hand-holding-usd  pe-2"></i> Can I open a savings account for my child?</h4>
          <p style={{ color: 'black' }}>
            Yes, Phoenix Bank offers savings accounts for children. Visit any of our branches to open a children's savings account and start saving for your child's future.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h4 className="mb-3 " style={{ fontSize: '1.5rem', color: 'black' }}><i className="fas fa-comments  pe-2"></i> How can I contact customer support?</h4>
          <p style={{ color: 'black' }}>
            You can reach Phoenix Bank's customer support team by calling our toll-free number or by visiting any of our branches during business hours. You can also send us a message through our website's contact form.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
