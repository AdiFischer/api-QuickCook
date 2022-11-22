import express from "express";
import cors from "cors";
import { addNewRecipe, getAllRecipes, updateRecipe, getOneRecipe, deleteRecipe } from "./src/recipes.js";

const app = express()
app.use(express.json())
app.use(cors())

app.post('/recipes', addNewRecipe)
app.get('/recipes', getAllRecipes)
app.patch('/recipes/:recipeId', updateRecipe)
app.get('/recipes/:recipeId', getOneRecipe)
app.delete('/recipes/:recipeId', deleteRecipe)

// app.get('/', (req, res) => {
//     res.send('hello')
// })

const PORT = 3031

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))
