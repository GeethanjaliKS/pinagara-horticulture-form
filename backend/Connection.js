import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {addmembership, adduser, deletemember, updatemember, viewmember} from './controller/member.js'
import { addfood, deletefood, updatefood, viewfood } from "./controller/food.js";
import { addfer,  deletefertilizer, updatefertilizer, viewfertilizer } from "./controller/fertilizer.js";
import { addworker, deleteworker, updateworker, viewworker } from "./controller/worker.js";
// import {  carts } from "./controller/cart.js";
import {   usereg } from "./controller/user.js";
import {  loginUser } from "./controller/Login.js";
// import { addadmin } from "./controller/admin.js";

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
// app.post('./admin',addadmin)
// app.post('/cart',cartstore)
// app.post('/cart', carts)
app.post('/usereg',usereg)
app.post('/login',loginUser)

//view details

app.get('/viewmember',viewmember)
app.get('/viewfood',viewfood)
app.get('/viewfertilizer',viewfertilizer)
app.get('/viewworker',viewworker)


//delete details

app.delete('/deletemember/:id',deletemember)
app.delete('/deletefertilizer/:id',deletefertilizer)
app.delete('/deletefood/:id',deletefood)
app.delete('/deleteworker/:id',deleteworker)


//update details
app.patch('/updatemember/:id',updatemember)
app.patch('/updateworker/:id',updateworker)
app.patch('/updatefood/:id',updatefood)
app.patch('/updatefertilizer/:id',updatefertilizer)
app.patch('/addmembership/:id',addmembership)
