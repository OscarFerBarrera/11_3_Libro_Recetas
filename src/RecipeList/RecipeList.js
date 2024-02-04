import "./RecipeList.css";
import React from 'react';
import RecipeItem from "../RecipeItem/RecipeItem"

const RecipeList = ({ listRecipes }) => {

  return (
    <div>
      {listRecipes.map((item) =>
      // console.log(item.id, item.name),
        <RecipeItem
          id = {item.id}
          name= {item.name}
          imageUrl= {item.imageUrl}
          numpersone={item.numPeople}
        ></RecipeItem>
      )}
      
    </div>
  )
}

// console.log(item.id, item.name),
export default RecipeList;
