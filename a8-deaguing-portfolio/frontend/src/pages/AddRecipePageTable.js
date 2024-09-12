import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddRecipePageTable = () => {

    const [recipeName, setRecipeName]       = useState('');
    const [servings, setServings] = useState('');
    const [language, setLanguage] = useState('');
    const [time, setTime]         = useState('');
    
    const navigate = useNavigate();

    const addRecipe = async () => {
        const newRecipe = { recipeName, servings, language, time};
        const response = await fetch('/recipes', {
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Recipe was successfully created`);
        } else {
            alert(`Failed to add movie, status = ${response.status}`);
        }
        navigate('/recipes');
    };


    return (
        <>

        <article>
            <h2>Add a Recipe</h2>
            <p>Enter name, total servings, language and estimated time to make your favorite recipe.</p>
            
            <table id="recipeList">
                <caption>Which recipe are you adding?</caption>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Servings</th>
                        <th>Language</th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="recipeName">Recipe Name</label>
                        <input
                            type="text"
                            placeholder="Title of the Recipe"
                            value={recipeName}
                            onChange={e => setRecipeName(e.target.value)} 
                            id="recipeName" />
                    </td>

                    <td><label for="servings" id='servingsLabel'>Servings</label>
                        <input
                            type="number"
                            value={servings}
                            placeholder="Enter servings"
                            onChange={e => setServings(e.target.value)} 
                            id="servings" />
                    </td>

                    <td><label for="language" id='langlabel'>Language</label>
                        <input
                            type="text"
                            placeholder="Enter Language"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />

                    </td>
                    <td><label for="time">Total Time</label>
                        <input
                            type="text"
                            placeholder="Estimated time to make"
                            value={time}
                            onChange={e => setTime(e.target.value)} 
                            id="time" />
                    </td>

                    <td><label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addRecipe}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddRecipePageTable;