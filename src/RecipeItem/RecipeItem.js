import React from "react";
import "./RecipeItem.css"

const RecipeItem = (props) => {
  console.log("Ejecutado el render de recipeItem " + props.name)
  return (

    <div class="content_new_recipe">
      <h3>Listado de recetas:</h3>
      <div className="card__recipe" key={props.id}>
        <img className="card__img" src={props.imageUrl} alt="imangen de"></img>
        <div>
          <p className="card__recipe-name">{props.name}</p>
          <p className="card__recipe-name">Número de personas: {props.numpersone}</p>
        </div>

      </div>
    </div>
  );
}

export default RecipeItem;