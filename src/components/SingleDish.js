import React from "react";
import '../index.css';
const SingleDish=({name, price, image, details})=>
{
    return(
<div className="dish-card">
<img src={image} alt="dish" className="dish-image"/>
<div className="dish-info">
    <h3>{name}</h3>
    <h3 className="price">{price}$</h3>
</div>
<p>{details}</p>

    <button className="order-delivery">Order delivery      <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.148 17.1429H0.376007V20H28.376V17.1429H24.148ZM26.976 15.7143C26.598 9.9 22.426 5.14286 16.952 3.98571C17.092 3.64286 17.176 3.25714 17.176 2.85714C17.176 1.28571 15.916 0 14.376 0C12.836 0 11.576 1.28571 11.576 2.85714C11.576 3.25714 11.66 3.64286 11.8 3.98571C6.32601 5.14286 2.15401 9.9 1.77601 15.7143H26.976ZM14.376 6.54286C18.506 6.54286 22.034 9.15714 23.476 12.8429H5.27601C6.71801 9.15714 10.246 6.54286 14.376 6.54286Z" fill="#495E57"/>
</svg></button>
    
</div>);
};
export default SingleDish;