import express from 'express';
import {createServer} from 'node:http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from "cors";
import connectToSocket from './src/controllers/SocketManager.js';

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));


const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://swatikumaridas1111:%23MeetingPlatform2025%23@cluster0.ipl3aj0.mongodb.net/")

    console.log(`MONGO Connected DB Host:${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("Server is running on port 8000");
    });
}

start();
