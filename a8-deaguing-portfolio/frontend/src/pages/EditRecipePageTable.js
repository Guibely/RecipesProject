import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRecipePageTable = ({ recipeToEdit }) => {
 
    const [recipeName, setRecipeName]       = useState(recipeToEdit.recipeName);
    const [servings, setServings]         = useState(recipeToEdit.servings);
    const [language, setLanguage] = useState(recipeToEdit.language);
    const [time, setTime]         = useState(recipeToEdit.time)
    
    const redirect = useNavigate();

    const editRecipe = async () => {
        const response = await fetch(`/recipes/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ recipeName: recipeName, servings: servings, language: language, time: time }),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.status === 200) {
            alert(`Recipe was successfully edited`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit recipe, status =  ${response.status}. ${errMessage.Error}`);
        }
        redirect("/recipes");
    }

    return (
        <>
        <article>
            <h2>Edit a recipe</h2>
            <p>Edit the recipe entry you want to change.</p>
            <table id="recipeList">
                <caption>Which entry do you want to edit?</caption>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Servings</th>
                        <th>Language</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="recipeName">Recipe title</label>
                        <input
                            type="text"
                            value={recipeName}
                            onChange={e => setRecipeName(e.target.value)} 
                            id="recipeName" />
                    </td>

                    <td><label for="servings" id='editServLabel'>Servings</label>
                        <input
                            type="number"
                            value={servings}
                            onChange={e => setServings(e.target.value)} 
                            id="servings" />
                    </td>

                    <td><label for="language" id='editLangLabel'>Language</label>
                        <input
                            type="text"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td><label for="time">Total time</label>
                        <input
                            type="text"
                            value={time}
                            onChange={e => setTime(e.target.value)} 
                            id="time" />

                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editRecipe}
                            id="submit"
                        >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditRecipePageTable;