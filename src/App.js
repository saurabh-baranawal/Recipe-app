import React, { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./Recipes";
const App = () => {
  // const APP_ID = "6151d582";
  // const APP_KEY = "46c84b8791ad4cfd955ff7981bcccb77";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('paneer');
  useEffect(() => {
    getrecipes();
  }, [query]);
  const getrecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=6151d582&app_key=46c84b8791ad4cfd955ff7981bcccb77`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  
  const updateSearch=(Event)=>{
    setSearch(Event.target.value);
   };
   const getSearch= Event=>{
    Event.preventDefault();
    setQuery(search);
    setSearch('');
   };
 
  return (
    <div className="App">
      <h1>Receipe is here</h1>
      <hr color="black" />
      <form onSubmit={getSearch}
       className="search-form">
        <label htmlFor="">Search here 👉</label>
        <input
          type="text" value={search} onChange={updateSearch}
          className="search-bar mx-3 input-group-sm  rounded-pill"
        />
        <button
          type="submit"
          className="search-button btn btn-info btn rounded-pill"
        >
          search
        </button>
      </form>
      {recipes.map((recipes) => (
        <Recipes
          key={recipes.recipe.label}
          title={recipes.recipe.label}
          type={recipes.recipe.dishType}
          image={recipes.recipe.image}
          ingredients={recipes.recipe.ingredients}
        />
      ))}
      <div className="">
        <h3>Thanks for coming visit again ❤️❤️ </h3>
      </div>
    </div>
  );
};
export default App;
