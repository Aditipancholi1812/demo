import React from 'react';

const SuccessPage = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Order Placed Successfully</h2>
        <h3>Visit again!</h3>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  width: '300px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default SuccessPage;
