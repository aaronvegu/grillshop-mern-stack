import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';

const Product = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${props.product._id}`}>
          <Card.Title>
            <strong>{props.product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>
          <p className='spcs-text'>{props.product.type[1] ? 'Desde: ' : ''}</p>
          {`$${props.product.type.reduce(
            (min, t) => (t.price < min ? t.price : min),
            props.product.type[0].price
          )}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
