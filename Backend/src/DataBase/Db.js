const mongoose=require('mongoose');
require('dotenv').config();

const user =process.env.USER
const pass=process.env.PASS


async function connectDB(){
   
        await mongoose.connect(`mongodb+srv://${user}:${pass}@yt-backend.brdjmch.mongodb.net/MERN-Project`)
        console.log("MongoDB connected")
}

module.exports=connectDB


