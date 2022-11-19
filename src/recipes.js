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
//getAll?
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
}
// export async function findFurnitureByType(req,res) {
//     const db = dbConnect()
//     const { search } = req.params
//     const collection = await db.collection("furniture").find({ type: search }).toArray()
//     res.send(collection)
// }