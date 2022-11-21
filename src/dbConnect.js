import { MongoClient } from 'mongodb';
//import { uri } from "../credentials.js";
import 'dotenv/config'


export function dbConnect () {
    const client = new MongoClient(process.env.MONGO_URI)
    //const client = new MongoClient(uri);
    return client.db("mydatabase");
}