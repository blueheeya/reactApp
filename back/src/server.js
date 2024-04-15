const express = require('express');
const app = express();
const cors = require("cors")
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
app.use(express.json());
app.use(cors());
const server = async ()=>{
    try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB연결 완료");
    app.listen(4002);
    } catch (error) {
        console.log("DB연결 실패!")
    }
}