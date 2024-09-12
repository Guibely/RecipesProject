// Models for the Recipe Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Program failed to connect' });
    } else  {
        console.log('Program has successfully connect to MongoDB collections');
    }
});

// SCHEMA: Define the collection's schema.
const recipeSchema = mongoose.Schema({
	recipeName:    { type: String, required: true },
	servings:     { type: Number, required: true },
	language: { type: String, required: true },
    time:  { type: String, required: true}
});

// Compile the model from the schema 
// by defining the collection name "recipes".
const recipes = mongoose.model('Recipes', recipeSchema);


// CREATE model *****************************************
const createRecipe = async (recipeName, servings, language, time) => {
    const recipe = new recipes({ 
        recipeName: recipeName, 
        servings: servings, 
        language: language, 
        time: time
    });
    return recipe.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRecipe = async () => {
    const query = recipes.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRecipeByID = async (_id) => {
    const query = recipes.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRecipeById = async (_id) => {
    const result = await recipes.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRecipe = async (_id, recipeName, servings, language, time) => {
    const result = await recipes.replaceOne({_id: _id},{
        recipeName: recipeName,
        servings: servings,
        language: language,
        time : time
    });
    return {
        recipeName: recipeName,
        servings: servings,
        language: language, 
        time: time }
}

// EXPORT the variables for use in the controller file.
export { createRecipe, retrieveRecipe, retrieveRecipeByID, updateRecipe, deleteRecipeById }