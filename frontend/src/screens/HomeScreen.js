import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  // El uso de states es declarado dentro de nuestra React Function debido a que como es una funcion
  // y no una clase, no cuenta con constructor

  // Recibe: [nombreDelEstado, nombreFuncionParaManipularElEstado]
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      // Desestructuring: it could be-> const res = await... and use res.data
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Cortes Premium</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
