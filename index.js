import express from 'express';
import cors from 'cors';
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
//dotenv.config();

const app = express();

//GET 

app.get('/', (req, res) => {
    res.send('Hello World');
});

//POST 

app.post('/', (req, res) => {
    res.send('Hello World')

});

app.listen(5000, () => {console.log("Server on")});

