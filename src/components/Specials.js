import React from 'react';
import'../index.css'
import spicyChickenCurryImage from '../images/spicy-chicken-curry.jpeg';
import grilledSalmonSteakImage from '../images/grilled-salmon-steak.jpeg';
import mushroomRisottoImage from '../images/mushroom-risotto.jpeg';

const Specials = () => {
  const specials = [
    {
      dish: 'Spicy Chicken Curry',
      requests: 30,
      description: 'Tender chicken cooked in a flavorful blend of spices, served with aromatic basmati rice.',
      image: spicyChickenCurryImage
    },
    {
      dish: 'Grilled Salmon Steak',
      requests: 25,
      description: 'Fresh salmon steak marinated in a zesty lemon and herb sauce, grilled to perfection.',
      image: grilledSalmonSteakImage
    },
    {
      dish: 'Mushroom Risotto',
      requests: 22,
      description: 'Creamy arborio rice cooked with a medley of mushrooms, garnished with parmesan cheese.',
      image: mushroomRisottoImage
    }
  ];

  // Sort specials array in descending order based on the number of requests
  const sortedSpecials = specials.sort((a, b) => b.requests - a.requests);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Specials</h1>
      {sortedSpecials.map((special, index) => (
        <div key={index} className="special-item">
          <img src={special.image} alt={special.dish} className="dishss-image" />
          <div className="dishss-details">
            <h3>{special.dish}</h3>
            <p>Requests: {special.requests}</p>
            <p>{special.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Specials;
