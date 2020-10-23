const products = [
  {
    _id: '1',
    name: 'New York',
    image: '/images/bone-in-steak.jpg',
    description:
      'Delicioso corte New York, de media pulgada de grosor en piezas de distintos tamaños',
    brand: 'Carnes San Juan',
    category: 'Cortes Premium',
    type: [
      {
        _typeId: 1,
        weight: 600,
        price: 189,
        typeStock: 2,
      },
      {
        _typeId: 2,
        weight: 420,
        price: 130,
        typeStock: 3,
      },
    ],
    rating: 4.5,
    numReviews: 4,
  },
  {
    _id: '2',
    name: 'Rib Eye',
    image: '/images/rib-eye.jpg',
    description:
      'Delicioso corte Rib Eye, de media pulgada de grosor en piezas de distintos tamaños',
    brand: 'Carnes San Juan',
    category: 'Cortes Premium',
    type: [
      {
        _typeId: 1,
        weight: 720,
        price: 210,
        typeStock: 3,
      },
    ],
    rating: 4.0,
    numReviews: 4,
  },
  {
    _id: '3',
    name: 'Aguja',
    image: '/images/steak-oil.jpg',
    description:
      'Deliciosa aguja del norte, de media pulgada de grosor en piezas de distintos tamaños',
    brand: 'Carnes San Juan',
    category: 'Cortes Premium',
    type: [
      {
        _typeId: 1,
        weight: 800,
        price: 140,
        typeStock: 3,
      },
      {
        _typeId: 2,
        weight: 900,
        price: 150,
        typeStock: 1,
      },
    ],
    rating: 5.0,
    numReviews: 7,
  },
  {
    _id: '4',
    name: 'Arrachera',
    image: '/images/steak.jpg',
    description:
      'Deliciosa arrachera marinada, sellada al vacio y lista para ser cocinada',
    brand: 'Carnes San Juan',
    category: 'Cortes Premium',
    type: [
      {
        _typeId: 1,
        weight: 500,
        price: 110,
        typeStock: 2,
      },
      {
        _typeId: 2,
        weight: 1000,
        price: 220,
        typeStock: 3,
      },
      {
        _typeId: 3,
        weight: 300,
        price: 87,
        typeStock: 3,
      },
    ],
    rating: 4.5,
    numReviews: 5,
  },
];

module.exports = products;
