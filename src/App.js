import './App.css';
import React from "react";
import RecipeForm from './Recipeform/RecipeForm';
import RecipeList from './RecipeList/RecipeList';


function App() {

  const API_URL = "http://localhost:3004/recipes";
  const [recipeList, setRecipeList] = React.useState([]);

  const getAllRecipesFromAPI = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setRecipeList(data))
      .catch((error) => console.log('Error fetching the API: ' + error))
  }

  React.useEffect(() => {
    getAllRecipesFromAPI();
  }, []);

  const onCreateRecipe = React.useCallback((newRecipe) => {
    console.log("hola");

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newRecipe),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setRecipeList(data));
})

  })

return (
  <div className="App">
    <RecipeForm onCreateRecipe={onCreateRecipe}></RecipeForm>
    <RecipeList listRecipes={recipeList}></RecipeList>
  </div>
);
}

export default App;
