import React, { useState } from 'react'
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const Cart = ({ Checkout, cartfunction }) => {
    const navigate = useNavigate();
    console.log('Checkout', Checkout)
    const [cart, setCart] = useState([]);
    const [checkout, setCheckout] = useState([])
    const handleDeletefromCart = (itemId) => {

        const updatedCart = Checkout.filter((item) => item.id !== itemId);
        // setCart(updatedCart);
        console.log(updatedCart, "updatedCart")
        setCheckout(updatedCart)
        cartfunction(updatedCart)
        setCart(updatedCart)             //updating tha cart state (giving the deleted )
        message.success("Removed from cart");
    }
    let result = Checkout || [];
    const CheckoutDone = () => {
        message.success('Checking Out')
        navigate('/checkout')

    }

    return (
        <div>
            {/* {result.map((item) => (
                <div key={item.title} >
                    <h3 >{`Title: ${item.title}`}</h3>
                    <p>{`Price: $${item.price}`}</p>
                    <p>{`Discount Percentage: ${item.discountPercentage}%`}</p>
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        
                    />
                </div>
            ))} */}
            <h2>Checkout</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>

                        <th style={{ padding: '10px', textAlign: 'left' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item) => (
                        <tr style={{ borderBottom: '1px solid #ccc' }}>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{item.title}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>${item.price}</td>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            />

                            <td style={{ padding: '10px', textAlign: 'center' }}>
                                <Button onClick={() => handleDeletefromCart(item.id)}>Delete from Cart</Button></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <Button onClick={() => CheckoutDone()}>Checkout</Button>
            </div>
        </div>
    )
}

export default Cart

