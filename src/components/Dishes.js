import React from "react";
import SingleDish from "./SingleDish";
const Dishes=({dishes})=>{
return(
<div>
        <div className="dishes-head">
            <h1>This week specials!</h1>
         <button className="reserve-button">Online Menu</button>
         </div> 
         
    <div className="dishes-list">
        {dishes.map((dish)=>(
            <SingleDish name={dish.name}
                        price={dish.price}
                        details={dish.details}
                        image={dish.image}/>
        ))}
    </div>
    </div>
);
};
export default Dishes;