import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message, Button, Card } from 'antd';

const Products = (props) => {
  const { editdone, anotherfunction, cartfunction } = props;
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [val, setVal] = useState(0);
  const [cart, setCart] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const listing = async () => {
    await axios.get('https://dummyjson.com/products', {
      params: {
        limit: limit,
        skip: skip,
      },
    }).then((res) => {
      setProduct(res.data.products);
    });
  };

  useEffect(() => {
    listing();
  }, [skip]);

  const isItemAlreadyInCart = (cart, newItem) => {
    return cart.some(item => item.id === newItem.id);
  };

  const handleAddToCart = (item) => {
    if (!isItemAlreadyInCart(cart, item)) {
      setCart([...cart, item]);
      const finalCart = [...cart, item];
      console.log(finalCart, "finalCart");
      anotherfunction(finalCart);
      cartfunction(finalCart);
      setVal(val + 1);
      editdone(item);
      message.success("Added to cart");
    } else {
      message.error("Already added in cart");
    }
  };

  const OpenCart = (cart) => {
    navigate('/cart');
    editdone(cart);
  };

  const renderProductCards = () => {
    return product.map((item) => (
      <Card key={item.id} style={{ width: 300, marginBottom: 20 }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Brand: {item.brand}</p>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
      </Card>
    ));
  };

  return (
    <>
      <h1 style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', margin: '20px 0' }}>Products</h1>
      <Button style={{ position: 'absolute', top: 0, right: 0, marginTop: '30px' }} onClick={() => OpenCart(cart)}>View Cart: {val}</Button>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '30px 0' }}>
        {renderProductCards()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Button
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            background: 'transparent',
            cursor: 'pointer',
          }}
          onClick={() => setSkip(skip - 10)}
        >
          Previous
        </Button>
        <Button
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            background: 'transparent',
            cursor: 'pointer',
          }}
          onClick={() => setSkip(skip + 10)}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Products;
