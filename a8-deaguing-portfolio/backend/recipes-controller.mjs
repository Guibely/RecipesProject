// Controllers for the Recipe Collection

import 'dotenv/config';
import express from 'express';
// import asyncHandler from 'express-async-handler'
import * as recipes from './recipes-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/recipes', (req,res) => { 
    recipes.createRecipe(
        req.body.recipeName, 
        req.body.servings, 
        req.body.language,
        req.body.time
        )
        .then(recipe => {
            console.log(`"${recipe.recipeName}" was added to the collection.`);
            res.status(201).json(recipe);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add, server cannot process or recognized the request.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/recipes', (req, res) => {
    recipes.retrieveRecipe()
        .then(recipe => { 
            if (recipe !== null) {
                console.log(`All recipes were retrieved from the collection.`);
                res.json(recipe);
            } else {
                res.status(404).json({ Error: 'Failed to retrieve, server cannot find the requested source.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve! Server cannot process or recognized the request.' });
        });
});


// RETRIEVE by ID controller
app.get('/recipes/:_id', (req, res) => {
    const recipeId = req.params._id;
    recipes.retrieveRecipeByID(req.params._id)
    .then(recipe => { 
        if (recipe !== null) {
            console.log(`"${recipe.recipeName}" was retrieved, based on its ID.`);
            res.json(recipe);
        } else {
            res.status(404).json({ Error: 'Server cannot find the requested source.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve! Server cannot process or recognized the request.' });
    });

});


// UPDATE controller ************************************
app.put('/recipes/:_id', (req, res) => {
    recipes.updateRecipe(
        req.params._id, 
        req.body.recipeName, 
        req.body.servings, 
        req.body.language,
        req.body.time

    )
    .then(recipes => {
        res.json(recipes);
    })
    
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Server cannot process or recognized the request' });
    });
});


// DELETE Controller ******************************
app.delete('/recipes/:_id', (req, res) => {
    recipes.deleteRecipeById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} recipe was deleted.`);
                res.status(200).send({ Success: 'Request has succeeded. Recipe has been deleted.' });
            } else {
                res.status(404).json({ Error: 'Server cannot find the requested source.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Error found, request failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});