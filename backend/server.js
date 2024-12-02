import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import db from "./DB/Database.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import { app,server } from './socket/socket.js';


dotenv.config();


const PORT = process.env.PORT || 5000;


app.use(express.json()); // to parse the incoming request with the JSON payload from (req.body)
app.use(cookieParser()); // to parse the incoming request with the cookie

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

app.get('/', (req, res) =>{
    res.send('Hello, World!'); 
});

server.listen(PORT, () => {
    db();
    console.log(`listening on port: ${PORT}`);
});