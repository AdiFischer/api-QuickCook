import { dbConnect } from "./dbConnect.js"
import { ObjectId } from "mongodb"


export async function addNewRecipe(req, res) {
    const newRecipe = req.body
    const db = dbConnect()
    await db.collection("recipes").insertOne
        (newRecipe)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: "New Recipe Added." })
    getAllRecipes(req, res) //getAll?
}

export async function getAllRecipes(req, res) {
    const db = dbConnect()
    const collection = await db.collection("recipes").find().toArray()
    res.send(collection)
}

export async function updateRecipe(req, res) {
    const { recipeId } = req.params
    const db = dbConnect()
    await db.collection('recipes')
        .findOneAndUpdate({ _id: new ObjectId(recipeId) }, { $set: req.body })
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(202).send({ message: "recipe updated" })
    getAllRecipes(req, res)//?//
}
export async function getOneRecipe(req, res) {
    const db = dbConnect()
    const { recipeId } = req.params
    const collection = await db.collection("recipes")
        .find({ _id: new ObjectId(recipeId) }).toArray()
    res.send(collection)
}

export async function deleteRecipe(req, res) {
    const db = dbConnect()
    const { recipeId } = req.params
    const collection = await db.collection("recipes")
        .findOneAndDelete({ _id: new ObjectId(recipeId) })
    res.status(203).send('Recipe Deleted')
}