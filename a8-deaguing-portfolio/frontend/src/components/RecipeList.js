import React from 'react';
import Recipe from './Recipe';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RecipeList({ recipes, onDelete, onEdit }) {
    return (
        <table id="recipes">
            <caption id='recipeLog'>Recipe Log</caption>
            <thead id='recipeHead'>
                <tr>
                    <th id='rnHead'> Title</th>
                    <th id='rsHead'>Servings</th>
                    <th id='rlHead'>Language</th>
                    <th id='rtHead'>Time</th>
                    <th id='rdHead'>Delete</th>
                    <th id='reHead'>Edit</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe, i) => 
                    <Recipe 
                        recipe={recipe} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RecipeList;
