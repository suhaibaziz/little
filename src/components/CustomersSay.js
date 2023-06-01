import React from 'react';

const CustomerReview = ({ name, comment, rating }) => {
  // Generate star icons based on the rating
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star-icon">&#9733;</span>
  ));

  return (
    <div className="customer-review">
      <h3 className="customer-name">{name}</h3>
      <div className="rating">{stars}</div>
      <p className="customer-comment">{comment}</p>
    </div>
  );
};

const CustomersSay = () => {
  const reviews = [
    {
      name: 'John Doe',
      comment: 'Great food and excellent service! Highly recommended.',
      rating: 5
    },
    {
      name: 'Jane Smith',
      comment: 'The atmosphere is cozy, and the dishes are delicious. Will come back again!',
      rating: 4
    },
    {
      name: 'David Johnson',
      comment: 'Decent food, but the service could be improved. Average experience overall.',
      rating: 3
    }
  ];

  return (
    <div style={{textAlign:'center'}}>
      <h1>Customers Say</h1>
      {reviews.map((review, index) => (
        <CustomerReview key={index} {...review} />
      ))}
    </div>
  );
};

export default CustomersSay;
