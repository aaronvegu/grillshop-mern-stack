import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';

const Product = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title>
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>
          {/* <p className='spcs-text'>{props.product.type[1] ? 'Desde: ' : ''}</p>
          {`$${props.product.type.reduce(
            (min, t) => (t.price < min ? t.price : min),
            props.product.type[0].price
          )}`} */}
          <p className=''>$100</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
