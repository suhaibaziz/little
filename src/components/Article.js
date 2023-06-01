import React from 'react';
import res from'./restauranfood.jpg';
import { Link } from 'react-router-dom';

const Article = () => {
  
  return (
    <div className="article">
      
      <div className='article-content'>
      <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lorem vel velit eleifend interdum vitae vitae sem. Quisque ac commodo velit. Fusce a tincidunt turpis. Nullam auctor sem eget mi vulputate, ac tincidunt tellus dapibus. Mauris quis orci et ex rutrum interdum.
      </p>
     <Link to={'/Booking'}><button className='reserve-button' >Reserve a table</button></Link> </div>
      <img src={res} className="article-image" alt="Article Image" />
    </div>
    
  );
};

export default Article;
