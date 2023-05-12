import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import {adduser} from './controller/member.js'
import { addfood } from "./controller/food.js";
import { addfer } from "./controller/fertilizer.js";
import { addworker } from "./controller/worker.js";

const app = express()

app.use(express.json({limit:"50mb"}))

const PORT = 4001
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

const DB = 'mongodb://127.0.0.1:27017/pingara'
mongoose.connect(DB,{useNewUrlParser: true,
    useUnifiedTopology: true}).then(() =>{
    console.log('Database connected..')
})

app.use(cors());
//add data's

app.post('/adduser',adduser)
app.post('/addfood',addfood)
app.post('/addfer',addfer)
app.post('/addworker',addworker)