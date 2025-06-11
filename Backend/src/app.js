import express from 'express';
import {createServer} from 'node:http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from "cors";
import userRoutes from './routes/users.routes.js';
import connectToSocket from './controllers/SocketManager.js';
import crypto from 'crypto';

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);
// app.use("/api/v2/users",newUserRoutes);
const MONGO_URL="mongodb://127.0.0.1:27017/OnlineMeetingPlatform";


// main()
//    .then(() =>{
//     console.log("connected to DB");

//    })
//    .catch((err)=>{
//     console.log(err);
//    });
// async function main() {
//     await mongoose.connect(MONGO_URL);
    
// }

// const start=async()=>{
    
//     //  const connectionDb=await mongoose.connect("mongodb+srv://swatikumaridas1111:OnlinePlatform@cluster0.ipl3aj0.mongodb.net/OnlinePlatform?retryWrites=true&w=majority"
//     //    );
//     //  //const connectionDb=await mongoose.connect("mongodb+srv:Swati:OnlinePlatform@cluster0.99ikzjk.mongodb.net/")
  
//     // console.log(`MONGO Connected DB Host:${connectionDb.connection.host}`)
//     server.listen(app.get("port"),()=>{
//         console.log("Server is running on port 8000");
//     });
// }

const start = async () => {
    try {
      await mongoose.connect(MONGO_URL);
      console.log("Connected to MongoDB");
  
      server.listen(app.get("port"), () => {
        console.log("Server is running on port 8000");
      });
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  };

start();
