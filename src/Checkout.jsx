import { Button, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ Checkout }) => {
  const navigate = useNavigate();
  console.log("🚀 ~ file: Checkout.jsx:4 ~ Checkout ~ checkout:", Checkout);

  let result = Checkout || [];

  const successHandler = () => {
    message.success('order made!')
    navigate('/successpage');
  };

  return (
    <div style={checkoutContainer}>
      <h2 style={{ textAlign: 'center' }} >Checkout</h2>
  
      {result.map((item) => (
        <div key={item.title} style={productStyle}>
          <h3 style={titleStyle}>{`Title: ${item.title}`}</h3>
          <p style={priceStyle}>{`Price: $${item.price}`}</p>
          <p style={discountStyle}>{`Discount Percentage: ${item.discountPercentage}%`}</p>
          <img
            src={item.thumbnail}
            alt={item.title}
            style={thumbnailStyle}
          />
        </div>
      ))}
      <Button onClick={successHandler} style={buttonStyle}>Place order</Button>
    </div>
  );
};

const checkoutContainer = {
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column', 
  margin: '20px', 
  padding: '20px', 
};

const productStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px',
  width: '300px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const priceStyle = {
  fontSize: '16px',
};

const discountStyle = {
  fontSize: '14px',
  color: '#007bff',
};

const thumbnailStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  marginTop: '20px',
};

export default Checkout;
