import "./RecipeForm.css";
import React from "react";

const RecipeForm = (props) => {

  const nameRecipe = React.useRef();
  const numPersonRecipe = React.useRef();
  const imageUrlRecipe = React.useRef();

  const submitForm = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newRecipe = {
      name: nameRecipe.current.value,
      numPerson: numPersonRecipe.current.value,
      imageUrl: imageUrlRecipe.current.value,
      ingredients: []
    }

    if (newRecipe.name && newRecipe.numPerson && newRecipe.imageUrl) {
      props.onCreateRecipe(newRecipe);
      nameRecipe.current.value = "";
      numPersonRecipe.current.value = "";
      imageUrlRecipe.current.value = "";
    } else {
      alert("Por favor, complete todos los campos");
    }

  }

  return (
    <div className="content_new_recipe">
      <h3>Añade una nueva receta:</h3>
      <form onSubmit={submitForm}>
        <label>Introduce un nombre:</label>
        <input
          className="label_form"
          type="text"
          name="name"
          ref={nameRecipe}>
        </input>

        <label>Introduce un número de personas:</label>
        <input
          className="label_form"
          type="text"
          name="numperson"
          ref={numPersonRecipe}></input>

        <label>Introduce la url de la imangen:</label>
        <input
          className="label_form"
          type="text"
          name="imagenUrl"
          ref={imageUrlRecipe}></input>

        <button type="submit">Añadir Receta</button>
      </form>


    </div>

  )
}


export default RecipeForm;