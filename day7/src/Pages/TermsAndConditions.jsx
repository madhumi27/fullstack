import React from 'react';
import NavBar from '../Components/NavBar';
const TermsAndConditions = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f7f7f7' }}>
    <NavBar></NavBar>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#6B8E23', fontSize: '2rem', marginBottom: '20px' }}>
          Terms and Conditions for YogaZen
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#333' }}>
          Welcome to Yoga Academy! Please read these Terms and Conditions carefully before using our services.
        </p>
        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>1. Acceptance of Terms</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions.
        </p>

        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>2. User Responsibilities</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          Users must adhere to the rules and guidelines provided by Yoga Academy during their participation in yoga classes or events.
        </p>

        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>3. Payment and Refund Policy</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          Payment details and refund policies for our yoga classes are outlined in our separate Payment and Refund Policy document.
        </p>

        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>4. Privacy Policy</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          Our Privacy Policy governs the collection, use, and disclosure of personal information. Please review it to understand how we handle your data.
        </p>

        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>5. Code of Conduct</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          Users are expected to maintain a respectful and supportive atmosphere during yoga sessions, following the Code of Conduct provided by Yoga Academy.
        </p>

        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>6. Modifications</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          Yoga Academy reserves the right to modify these Terms and Conditions at any time. Continued use of our services after any changes constitutes your acceptance of the new terms.
        </p>

        <h2 style={{ color: '#6B8E23', fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>7. Contact Information</h2>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:contact@yogazen.com" style={{ color: '#6B8E23', textDecoration: 'underline' }}>contact@yogaacademy.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
