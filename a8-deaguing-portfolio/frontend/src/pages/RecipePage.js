import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

function RecipePage({ setRecipeToEdit }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipes
    const loadRecipes = async () => {
        const response = await fetch('/recipes');
        const recipes = await response.json();
        setRecipes(recipes);
    } 
    

    // UPDATE a single recipe
    const onEdit = recipe => {
        setRecipeToEdit(recipe);
        redirect("/update");
    }


    // DELETE a single Recipe
    const onDelete = async _id => {
        const response = await fetch(`/recipes/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/recipes');
            const recipes = await getResponse.json();
            setRecipes(recipes);
        } else {
            console.error(`Failed to delete movie with id  = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    // DISPLAY the recipes
    return (
        <>  
            <h2> < GiMeal/> Saved Recipes  </h2>
            <p>This recipe log allows you to keep track of your favorite recipes by just enetering the recipe name, the total
                servings it makes, in what language it is and how long it takes to make.
                You can add, edit or delete any recipe you want.
            </p>
            <Link to="/create" id='recipeButton'><IoMdAdd />Add Recipe</Link>
            <RecipeList 
                recipes={recipes} 
                onEdit={onEdit} 
                onDelete={onDelete} 
            />
        </>
    );
}

export default RecipePage;