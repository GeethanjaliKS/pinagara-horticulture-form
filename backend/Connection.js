import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import {adduser, deletemember, updatemember, viewmember} from './controller/member.js'
import { addfood, viewfood } from "./controller/food.js";
import { addfer, viewfertilizer } from "./controller/fertilizer.js";
import { addworker, viewworker } from "./controller/worker.js";

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


//view details

app.get('/viewmember',viewmember)
app.get('/viewfood',viewfood)
app.get('/viewfertilizer',viewfertilizer)
app.get('/viewworker',viewworker)


//delete details

app.delete('/deletemember/:id',deletemember)


//update details
app.patch('/updatemember/:id',updatemember)

