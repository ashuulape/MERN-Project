const imagekit =require('@imagekit/nodejs')
require('dotenv').config();

const ImageKitKey= process.env.IMAGEKIT_KEY



const Imagekit=new imagekit({

    privateKey:ImageKitKey
})

async function UploadFile(buffer) {

    console.log(buffer);
    

    const result=await Imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return result;
    
}

module.exports=UploadFile