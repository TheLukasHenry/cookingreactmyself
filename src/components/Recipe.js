import React from 'react'
import IngredientsList from './IngredientsList'

export default function Recipe(props) {
    const {
        // id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients
    } = props
    return (
        <div className="recipe">

            <span className="recipe-name">{name}</span>
            <div className="recipe-buttons">

                <button className="button edit-button">
                    Edit
                </button>
                <button className="button delete-button">
                    Delete
                </button>
            </div>


                <span>Cook Time: </span>
                <span>{cookTime}</span>


                <span>Servings: </span>
                <span>{servings}</span>


                <span>Instruction: </span>
                <span>{instructions}</span>

            <div>
                Ingredients:
            </div>
            <IngredientsList ingredients={ingredients} />

        </div>



    )
}
