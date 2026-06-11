const express = require('express');
const multer=require('multer')
const app=express()
const UploadFile=require('./services/storage.service')
const model=require('./models/post.model')
const cors=require('cors')

app.use(express.json());
app.use(cors())
const upload=multer({storage:multer.memoryStorage()})


app.post('/create-post',upload.single("image") ,async(req,res)=>{

    
    const data=req.body;
    const file=req.file

   const result=await UploadFile(file.buffer)

    const finaldata={
        image:result.url,
        caption:data.caption,
        thumbnailUrl:data.thumbnailUrl
    }

    const post=await model.create(finaldata)
 return res.status(201).json({
        message:"uploaded sucessfully",
        post:post
        
    })
    


})

app.get('/posts',async(req,res)=>{

    const posts=await model.find()

    res.status(200).json({ 
     message:"feacthed sucessfully",
     posts:posts
 
 
    })
})



module.exports=app