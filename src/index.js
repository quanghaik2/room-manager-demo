// const express = require('express')
import express from 'express';
const app = express();
import configViewEngine from './configs/viewEngine';
import dotenv from "dotenv";
import cors from "cors";
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Server from './routers/Server'; 
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);
configViewEngine(app);
Server(app);
app.use(cors());
app.use(morgan("common"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})