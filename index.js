import express from "express";
import { addNewRecipe, getAllRecipes, updateRecipe } from "./src/recipes.js";

const app = express()
app.use(express.json())

app.post('/recipes', addNewRecipe)
app.get('/recipes', getAllRecipes)
app.patch('/recipes/:recipeId', updateRecipe)

app.get('/', (req, res) => {
    res.send('hello')
})

const PORT = 3030





app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))
