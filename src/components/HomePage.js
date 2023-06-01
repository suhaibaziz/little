import React from 'react';
import Article from './Article';
import Dishes from './Dishes';
import im from'../images/greek salad.jpg';
import im1 from'../images/lemon dessert.jpg';
import im2 from'../images/restauranfood.jpg';

const HomePage = () => {
  const dishes=[
    {id:1, name:'Greek Salad', price:'$12.00',image: im, details:' The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '}
   ,{id:2, name:'Bruchetta', price:'$13.50',image:im1, details:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '}
   , {id:3, name:'Lemon Dessert', price:'$17.00',image:im2, details:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}

  ];
  return (
    <main>
    <Article/>
    <Dishes dishes={dishes}/>
    
    </main>
  );
};

export default HomePage;
