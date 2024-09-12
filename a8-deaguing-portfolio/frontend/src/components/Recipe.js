import React from 'react';

import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBack2Fill } from "react-icons/ri";


function Recipe({ recipe, onEdit, onDelete }) {
    return (
       
        <tr id="recipeRow">
            <td id='titleBody'>{recipe.recipeName}</td>
            <td id='servingsBody'>{recipe.servings}</td>
            <td id='langBody'>{recipe.language}</td>
            <td id='timeBody'>{recipe.time}</td>
            <td id='deleteBody'><RiDeleteBack2Fill onClick={() => onDelete(recipe._id)} /></td>
            <td id='editBody'><MdModeEditOutline  onClick={() => onEdit(recipe)} /></td>
            
        </tr>
        
    );
}

export default Recipe;