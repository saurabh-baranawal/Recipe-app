import React from "react";
import "./Reci.css";
const Recipes = ({ title, type, image, ingredients }) => {
  return (
    <div class="container">
    <div class="card">
     <div className="">
     <h1>{title}</h1>
      <img src={image} alt="" />
      <div>
        <h5>Dish Type:</h5>
        <p>{type}</p>
      </div>
      <div>
        <h5>Ingredients:</h5>
        <ul className="desciption"  style={{textDecoration:"none"}} class="list-group">
          {ingredients.map((ingredient) => (
            <li className="desciption" style={{textDecoration:"none"}} class="list-group-item">{ingredient.text}</li>
          ))}
        </ul>
     </div>
      </div>
  </div>
</div>

  );
};
export default Recipes;
